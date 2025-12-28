// Node.js script to parse questions from markdown file
const fs = require('fs');

const content = fs.readFileSync('finantsarvestus.md', 'utf8');

// Split by question blocks
const sections = content.split(/\*\*Arvestus \d+ - Question \d+\*\*:/);

const questions = [];
let questionId = 1;

// Process each section (skip first empty one)
for (let i = 1; i < sections.length; i++) {
    const section = sections[i];

    // Extract the JavaScript object from code block
    const match = section.match(/```javascript\n([\s\S]*?)\n```/);
    if (!match) continue;

    const jsCode = match[1];

    try {
        // Create a safe evaluation context
        const questionObj = Function('"use strict"; return (' + jsCode + ')')();

        // Determine chapter number from the id or chapter field
        let chapterNum = questionObj.chapter ? parseInt(questionObj.chapter) : 1;

        // Create base question object
        const convertedQuestion = {
            id: questionId++,
            chapter: chapterNum,
            chapterName: `Arvestus ${chapterNum}`,
            points: questionObj.points || 2.5,
        };

        // Build the question text
        let questionText = questionObj.question || questionObj.questionText || '';
        if (questionObj.subQuestion) {
            questionText += '\n\n' + questionObj.subQuestion;
        }
        if (questionObj.note) {
            questionText += '\n\n' + questionObj.note;
        }
        convertedQuestion.question = questionText.trim();

        // Convert based on type
        if (questionObj.type === 'dropdown' && questionObj.options && questionObj.correctAnswer) {
            // Check if it's better as multiple choice or dropdown
            const numOptions = questionObj.options.length;

            if (numOptions <= 4) {
                // Convert to multiple-choice
                convertedQuestion.type = 'multiple-choice';
                convertedQuestion.options = questionObj.options;
                const correctIndex = questionObj.options.indexOf(questionObj.correctAnswer);
                convertedQuestion.correctAnswer = correctIndex >= 0 ? correctIndex : 0;
                convertedQuestion.explanation = `Õige vastus: ${questionObj.correctAnswer}`;
            } else {
                // Keep as dropdown (single selection from dropdown)
                convertedQuestion.type = 'multiple-choice';
                convertedQuestion.options = questionObj.options;
                const correctIndex = questionObj.options.indexOf(questionObj.correctAnswer);
                convertedQuestion.correctAnswer = correctIndex >= 0 ? correctIndex : 0;
                convertedQuestion.explanation = `Õige vastus: ${questionObj.correctAnswer}`;
            }
        } else if (questionObj.type === 'input') {
            // Convert to calculation
            convertedQuestion.type = 'calculation';
            convertedQuestion.correctAnswer = questionObj.correctAnswer || 0;
            convertedQuestion.tolerance = questionObj.tolerance || 0.01;
            convertedQuestion.unit = questionObj.unit || '€';
            convertedQuestion.explanation = questionObj.explanation || 'Arvutusülesanne';
        } else {
            // Default to multiple choice with dummy options
            convertedQuestion.type = 'multiple-choice';
            convertedQuestion.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
            convertedQuestion.correctAnswer = 0;
            convertedQuestion.explanation = 'No explanation provided';
        }

        questions.push(convertedQuestion);
    } catch (e) {
        console.error(`Error parsing question ${i}:`, e.message);
        console.error('Code snippet:', jsCode.substring(0, 200));
    }
}

// Generate the JavaScript file
const output = `// Finance Accounting Question Bank - Estonian Version
// Total questions: ${questions.length}
// Parsed from finantsarvestus.md

const QUESTION_BANK = ${JSON.stringify(questions, null, 2)};

// Chapter names (Arvestus = Test/Exam in Estonian)
const CHAPTERS = [
  "Arvestus 1",
  "Arvestus 2",
  "Arvestus 3",
  "Arvestus 4",
  "Arvestus 5",
  "Arvestus 6",
  "Arvestus 7",
  "Arvestus 8",
  "Arvestus 9",
  "Arvestus 10",
  "Arvestus 11",
  "Arvestus 12",
  "Arvestus 13",
  "Arvestus 14"
];
`;

fs.writeFileSync('js/questions-parsed.js', output);
console.log(`✓ Successfully parsed ${questions.length} questions!`);
console.log(`✓ Output written to js/questions-parsed.js`);

// Show distribution by chapter
const chapterCounts = {};
questions.forEach(q => {
    chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;
});

console.log('\nQuestions per chapter:');
Object.keys(chapterCounts).sort((a, b) => parseInt(a) - parseInt(b)).forEach(ch => {
    console.log(`  Arvestus ${ch}: ${chapterCounts[ch]} questions`);
});
