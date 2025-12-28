# Finance Accounting Test Exam

A comprehensive web-based exam application for practicing finance and accounting concepts.

## Features

### Exam Mode
- **20 questions per exam session** - Carefully selected from all 14 chapters
- **50 points maximum** - Points distributed across questions based on difficulty
- **90-minute timer** - Realistic exam conditions with countdown timer
- **One question at a time, no going back** - Prevents future questions from revealing answers
- **Results shown only at the end** - Complete exam before seeing your score

### Question Types
1. **Multiple Choice** - Select the best answer from 4 options
2. **Dropdown Matching** - Match terms with their correct definitions
3. **Calculation Questions** - Solve numerical accounting problems

### Content Distribution
- **Equal representation from all 14 chapters**
- **All chapters must be covered in each exam**
- Questions randomly selected to ensure variety

### Chapter Coverage
1. Introduction to Financial Accounting
2. The Accounting Equation
3. Recording Business Transactions
4. Adjusting Accounts
5. Completing the Accounting Cycle
6. Accounting for Merchandising Operations
7. Inventory and Cost of Goods Sold
8. Internal Control and Cash
9. Accounting for Receivables
10. Plant Assets and Depreciation
11. Current Liabilities and Payroll
12. Long-Term Liabilities
13. Corporations and Stockholders' Equity
14. Cash Flow Statement

### Additional Features

#### Performance Dashboard
- Overall statistics (total exams, average score, best score)
- Recent exam history
- Performance breakdown by chapter
- Accuracy percentages and visual progress bars

#### Review Mode
- Review all incorrect answers after completing an exam
- Detailed explanations for each question
- Correct answers displayed alongside your responses
- Categorized by chapter for targeted learning

#### Unlimited Practice
- Take as many exams as you want
- All results saved locally in your browser
- Track progress over time
- Option to clear history and start fresh

## Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Storage**: Browser LocalStorage
- **Styling**: Custom CSS with responsive design
- **Framework**: Jekyll (for static site generation)

## File Structure

```
/
├── exam.md                 # Main exam page
├── js/
│   ├── questions.js       # Question bank with 56 questions
│   └── exam-app.js        # Main application logic
├── css/
│   └── exam.css           # Styling and responsive design
├── _config.yml            # Jekyll configuration
├── index.html             # Homepage
└── about.md               # About page
```

## How to Use

1. **Start an Exam**: Click "Start Exam" on the exam page
2. **Answer Questions**: Complete all 20 questions within 90 minutes
3. **Submit Answers**: Each answer is submitted individually (no going back)
4. **View Results**: See your score, grade, and chapter breakdown
5. **Review Mistakes**: Use review mode to learn from incorrect answers
6. **Track Progress**: Visit the dashboard to see performance over time

## Grading Scale

- **A**: 90-100%
- **B**: 80-89%
- **C**: 70-79%
- **D**: 60-69%
- **F**: Below 60%

## Development

To run locally with Jekyll:

```bash
jekyll serve
```

Then open `http://localhost:4000` in your browser.

## Data Persistence

All exam results are stored in your browser's LocalStorage. This means:
- ✅ Data persists between sessions
- ✅ No server required
- ✅ Privacy - data never leaves your browser
- ⚠️ Clearing browser data will delete your history
- ⚠️ Different browsers have separate histories

## Browser Compatibility

Works with all modern browsers that support:
- ES6 JavaScript
- LocalStorage API
- CSS Grid and Flexbox

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

Potential features for future versions:
- Export results to PDF
- Custom exam creation (select specific chapters)
- Timed practice mode (practice without timer pressure)
- Flashcard mode
- Study notes section
- Mobile app version

## License

This project is provided as-is for educational purposes.

## Contributing

To add more questions:
1. Edit `js/questions.js`
2. Follow the existing question format
3. Ensure each question has proper `explanation` field
4. Maintain chapter distribution balance

---

Happy studying! 📚
