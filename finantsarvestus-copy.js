const ALL_QUESTIONS = [
{
    id: 'ch1_q1',
    chapter: '1',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas antud majandustehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Ettevõttele ABC laekub raha omaniku finantseerimisest.',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑ = K + O↑'
},
{
    id: 'ch1_q2',
    chapter: '1',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas antud majandustehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Ettevõttele ABC laekub raha panga finantseerimisest.',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑ = K↑ + O'
},
{
    id: 'ch1_q3',
    chapter: '1',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas antud majandustehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Ettevõtte ABC investeerib raha hoone soetamiseks.',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑↓ = K + O'
},
{
    id: 'ch1_q4',
    chapter: '1',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas antud majandustehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Ettevõtte ABC investeerib raha soetatud hoone renoveerimiseks.',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑↓ = K + O'
},
{
    id: 'ch1_q5',
    chapter: '1',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas antud majandustehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Ettevõtte ABC investeerib raha DELL arvuti soetamiseks.',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑↓ = K + O'
},
{
    id: 'ch2_q1',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas materiaalse põhivara krediitostu tehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Materiaalse põhivara (näiteks kontorimööbli) krediitost',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑ = K↑ + O'
},
{
    id: 'ch2_q2',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas raha maksmine materiaalse põhivara krediitostu eest mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Raha maksmine materiaalse põhivara krediitostu eest',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↓ = K↓ + O'
},
{
    id: 'ch2_q3',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas IT-teenuse krediitostu tehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'IT-teenuse krediitostu tehing',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V = K↑ + O↓'
},
{
    id: 'ch2_q4',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas raha maksmine IT-teenuse krediitostu eest mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Raha maksmine IT-teenuse krediitostu eest',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↓ = K↓ + O'
},
{
    id: 'ch2_q5',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas IT-teenuse krediitmüügi tehing mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'IT-teenuse krediitmüügi tehing',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑ = K + O↑'
},
{
    id: 'ch2_q6',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas raha laekumine IT-teenuse krediitmüügist mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Raha laekumine IT-teenuse krediitmüügist',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑↓ = K + O'
},
{
    id: 'ch2_q7',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas raha ettemaksmine tarnijale koolitusteenuse ostu eest mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Raha ettemaksmine tarnijale koolitusteenuse ostu eest',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑↓ = K + O'
},
{
    id: 'ch2_q8',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas koolitusteenuse ost tarnijalt, kellele on ettemaks tehtud enne teenuse saamist mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Koolitusteenuse ost tarnijalt, kellele on ettemaks tehtud enne teenuse saamist',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↓ = K + O↓'
},
{
    id: 'ch2_q9',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas raha ettelaekumine ostjalt koolitusteenuse müügi eest mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Raha ettelaekumine ostjalt koolitusteenuse müügi eest',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V↑ = K↑ + O'
},
{
    id: 'ch2_q10',
    chapter: '2',
    type: 'dropdown',
    points: 2.5,
    question: 'Tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O) kuidas koolitusteenuse müük ostjale, kellelt on ettemakse laekunud enne teenuse müüki, mõjutab ettevõtte finantsseisundit?',
    subQuestion: 'Koolitusteenuse müük ostjale, kellelt on ettemakse laekunud enne teenuse müüki',
    note: 'NB! ↑ - suureneb;  ↓ - väheneb',
    options: ['V = K↑ + O↓', 'V = K↓ + O↑', 'V↑ = K + O↑', 'V↑ = K↑ + O', 'V↑↓ = K + O', 'V↓ = K + O↓', 'V↓ = K↓ + O'],
    correctAnswer: 'V = K↓ + O↑'
},
{
    id: 'ch3_q1',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse materiaalse põhivara krediitostu tehing?',
    matches: [
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q2',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha maksmine materiaalse põhivara krediitostu eest?',
    matches: [
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q3',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse IT-teenuse krediitostu tehing?',
    matches: [
        {
            item: 'Ettemaksed tarnijatele (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'IT-teenuse kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q4',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha maksmine IT-teenuse krediitostu eest?',
    matches: [
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'IT-teenuse kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q5',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse IT-teenuse krediitmüügi tehing?',
    matches: [
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'IT-teenuse tulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q6',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha laekumine IT-teenuse krediitmüügist?',
    matches: [
        {
            item: 'IT-teenuse tulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q7',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha ettemaksmine tarnijale koolitusteenuse ostu eest?',
    matches: [
        {
            item: 'Koolitusteenuse kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed tarnijatele (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q8',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse koolitusteenuse ost tarnijalt, kellele on ettemaks tehtud enne teenuse osutamist?',
    matches: [
        {
            item: 'Koolitusteenuse kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed tarnijatele (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q9',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha ettelaekumine ostjalt koolitusteenuse müügi eest?',
    matches: [
        {
            item: 'Koolitusteenuse kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch3_q10',
    chapter: '3',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse koolitusteenuse müük ostjale, kellelt on ettemakse laekunud enne teenuse osutamist?',
    matches: [
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Koolitusteenuse tulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q1',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse kaubavaru krediitostu tehing?',
    matches: [
        {
            item: 'Kaubavaru (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müüdud kauba kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q2',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha maksmine kaubavaru krediitostu eest?',
    matches: [
        {
            item: 'Kaubavaru (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q3',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse kaubavaru krediitmüügi tehing?',
    matches: [
        {
            item: 'Kaubavaru (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müüdud kauba kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müügitulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q4',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha laekumine kaubavaru krediitmüügist?',
    matches: [
        {
            item: 'Kaubavaru (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müügitulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q5',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha ettelaekumine ostjalt kaubavaru müügi eest?',
    matches: [
        {
            item: 'Kaubavaru (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate ettemaksed (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müügitulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q6',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse kaubavaru müük ostjale, kellelt on ettemakse laekunud enne kaubavaru müüki?',
    matches: [
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Kauba müügi tulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müüdud kauba kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Kaubavaru (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q7',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha ettemaksmine tarnijale kontori üüriteenuse ostu eest?',
    matches: [
        {
            item: 'Kontori üüriteenuse kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed tarnijatele (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q8',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse kontori üüriteenuse ost tarnijalt, kellele on ettemaks tehtud enne teenuse saamist?',
    matches: [
        {
            item: 'Kontori üüriteenuse kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed tarnijatele (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q9',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse kuu lõpus tekkepõhine palgakulu, kui raha makstakse töötajale välja järgmises kuus?',
    matches: [
        {
            item: 'Ettemaksed töötajatele (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Palgakulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Palgavõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},
{
    id: 'ch4_q10',
    chapter: '4',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha maksmine töötajale eelmise kuu töötasu eest?',
    matches: [
        {
            item: 'Ettemaksed töötajatele (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Palgakulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Palgavõlg (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch5_q1',
    chapter: '5',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse materiaalse põhivara (arvuti) krediitostu tehing?',
    matches: [
        {
            item: 'Seadmed (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch5_q2',
    chapter: '5',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha maksmine materiaalse põhivara (arvuti) krediitostu eest?',
    matches: [
        {
            item: 'Seadmed (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch5_q3',
    chapter: '5',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse materiaalse põhivara depretsiatsioon?',
    matches: [
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Depretsiatsiooni kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Akumuleeritud kulum (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch5_q4',
    chapter: '5',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse materiaalse põhivara krediitmüügi tehing eeldusel, et müüdava vara  jääkmaksumus on madalam müügihinnast?',
    matches: [
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Akumuleeritud kulum (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Kasu / kahju mat. põhivara müügist (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch5_q5',
    chapter: '5',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha laekumine materiaalse põhivara krediitmüügist?',
    matches: [
        {
            item: 'Seadmed (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müügitulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt1_q1',
    chapter: '6',
    type: 'calculation',
    points: 2.5,
    question: 'Arvuta ettevõtte Omakapital, kui ettevõtte Varad on 271 € ja Kohustised on 129 €',
    variables: {
        varad: { min: 200, max: 500 },
        kohustised: { min: 80, max: 250 }
    },
    correctAnswer: 142
},

{
    id: 'kt1_q2',
    chapter: '6',
    type: 'multiple-choice',
    points: 2.5,
    question: 'Arvuta ettevõtte ABC 2023. aasta puhaskasum /-kahjum eeldusel, et samal aastal omakapital vähenes 1000 € seoses kasumi jaotamisega ettevõtte ABC omanikule.',
    tableData: {
        headers: ['Ettevõte ABC Finantsseisundi aruanne', '31.12.22', '31.12.23', 'Ettevõte ABC Kasumiaruanne 2023 a.', ''],
        rows: [
            ['Varad', '12 000 €', '20 000 €', 'Puhaskasum/-kahjum', '? €'],
            ['Kohustised', '3 000 €', '8 000 €', '', '', ''],
            ['Omakapital', '? €', '? €', '', '', '']
        ]
    },
    options: [4000, 12000, 3000, 5000, 8000],
    correctAnswer: 4000
},

{
    id: 'kt1_q3',
    chapter: '6',
    type: 'dropdown',
    points: 0.5,
    question: 'Klassifitseeri allolevad kontod vastavalt raamatupidamise põhivõrrandile V = K + O.',
    tableData: {
        title: 'KONTO nimi',
        subtitle: 'jääk 31.12.2023 (€)',
        rows: [
            ['Raha', '4 000'],
            ['Lühiajaline laenuvõlg', '5 000'],
            ['Ettemaksed ostjatelt', '2 000'],
            ['Kaubavaru', '2 000'],
            ['Ettemaksed tarnijatele', '3 000'],
            ['Tarnijatele maksmata arved', '6 000'],
            ['Ostjate maksmata arved', '1 000'],
            ['Materiaalne põhivara', '6 000'],
            ['Omaniku kapital', '7 000'],
            ['Jaotamata kasum / -kahjum', '- 4 000']
        ]
    },
    matches: [
        {
            item: 'Raha',
            correctAnswer: 'VARA',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Lühiajaline laenuvõlg',
            correctAnswer: 'KOHUSTIS',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Ettemaksed ostjatelt',
            correctAnswer: 'KOHUSTIS',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Ettemaksed tarnijatele',
            correctAnswer: 'VARA',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Tarnijatele maksmata arved',
            correctAnswer: 'KOHUSTIS',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Ostjate maksmata arved',
            correctAnswer: 'VARA',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Materiaalne põhivara',
            correctAnswer: 'VARA',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Omaniku kapital',
            correctAnswer: 'OMAKAPITAL',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Jaotamata kasum / -kahjum',
            correctAnswer: 'OMAKAPITAL',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        },
        {
            item: 'Kaubavaru',
            correctAnswer: 'VARA',
            options: ['VARA', 'KOHUSTIS', 'OMAKAPITAL']
        }
    ]
},

{
    id: 'kt1_q4',
    chapter: '6',
    type: 'multiple-choice',
    points: 2.5,
    question: 'Millistel allolevatel kontodel toimub suurenemine deebet-veerus?',
    subQuestion: 'A) Teenustulu\nB) Raha\nC) Kaubavaru\nD) Ettemaksed tarnijatele\nE) Ettemaksed ostjatelt',
    options: ['C, D, E', 'B, C, E', 'B, C, D', 'A, B, C'],
    correctAnswer: 'B, C, D'
},

{
    id: 'kt1_q5',
    chapter: '6',
    type: 'dropdown',
    points: 2.5,
    question: 'Analüüsi ettevõtte ABC majandustehinguid tuginedes järgmistele arvestuspõhimõtetele (eeldused, printsiibid ja piirangud):',
    note: 'EELDUSED: majandusüksuse eeldus (economic entity assumption), rahaühiku eeldus (monetary unit assumption), perioodilisuse eeldus (periodicity assumption), majandustegevuse jätkuvuse eeldus (going concern assumption)\n\nPRINTSIIBID: ssoetusmaksumuse printsiip (historical cost principle), tulude ja kulude vastavuse printsiip (matching principle), realiseerimise printsiip (revenue recognition principle)\n\nPIIRANGUD: olulisuse piirang (materiality constraint)',
    matches: [
        {
            item: 'Ettevõte ABC arvestab ja kajastab müügitulu kasumiaruandes siis, kui teenus või kaup on müüdud, mitte raha laekumise hetkel.',
            correctAnswer: 'Realiseerimise printsiip (revenue recognition principle)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        },
        {
            item: 'Ettevõte ABC klassifitseerib finantsseisundi aruandes varad ja kohustised lühi- ja pikaajalisteks.',
            correctAnswer: 'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        },
        {
            item: 'Ettevõte ABC kajastab finantsseisundi aruandes ostetud materiaalse põhivara maksumusse kõik vara ostmisega kaasnenud väljaminekud.',
            correctAnswer: 'Soetusmaksumuse printsiip (historical cost principle)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        },
        {
            item: 'Ettevõte ABC arvestab materiaalse põhivara kulumit selle kasutusaja jooksul.',
            correctAnswer: 'Tulude ja kulude vastavuse printsiip (matching principle)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        },
        {
            item: 'Ettevõte ABC esitab äriregistrile finantsaruanded kord aastas.',
            correctAnswer: 'Perioodilisuse eeldus (periodicity assumption)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        },
        {
            item: 'Ettevõte ABC arvestas ostuhetkel ostetud kirjatarbed kuluks.',
            correctAnswer: 'Olulisuse piirang (materiality constraint)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        },
        {
            item: 'Ettevõte ABC omanikud kasutavad ettevõtte ressursse ettevõttega seotud majandustegevuses.',
            correctAnswer: 'Majandustükuse eeldus (economic entity assumption)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        },
        {
            item: 'Ettevõte ABC ei arvesta inflatsiooni mõju finantsaruandluses.',
            correctAnswer: 'Rahaühiku eeldus (monetary unit assumption)',
            options: [
                'Realiseerimise printsiip (revenue recognition principle)',
                'Majandustegevuse jätkuvuse eeldus (going concern assumption)',
                'Majandustükuse eeldus (economic entity assumption)',
                'Olulisuse piirang (materiality constraint)',
                'Perioodilisuse eeldus (periodicity assumption)',
                'Rahaühiku eeldus (monetary unit assumption)',
                'Soetusmaksumuse printsiip (historical cost principle)',
                'Tulude ja kulude vastavuse printsiip (matching principle)',
            ]
        }
    ]
},

{
    id: 'kt1_q6',
    chapter: '6',
    type: 'dropdown',
    points: 2.5,
    question: 'Analüüsi antud majandustehinguid, tuginedes raamatupidamise võrrandile VARA (V) = KOHUSTIS (K) + OMAKAPITAL (O)',
    matches: [
        {
            item: 'Materiaalse põhivara (näit. bussi) krediitostu.',
            correctAnswer: 'VARA suureneb ja KOHUSTIS suureneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Materiaalse põhivara (näit. bussi) kulumi arvestus',
            correctAnswer: 'VARA väheneb ja OMAKAPITAL väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Transporditeenuse (näit. linnabussis pileti) ostu eest maksmine.',
            correctAnswer: 'VARA väheneb ja OMAKAPITAL väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Transporditeenuse (näit. linnabussis pileti) müügist raha laekumine.',
            correctAnswer: 'VARA suureneb ja OMAKAPITAL suureneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Raha ettelaekumine ostjalt tansporditeenuse müügi eest',
            correctAnswer: 'VARA suureneb ja KOHUSTIS suureneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Tansporditeenuse müük ostjale ettelaekunud raha eest',
            correctAnswer: 'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Transporditeenuse ostu eest raha ettemaksmine',
            correctAnswer: 'Üks VARAliik suureneb ja teine VARAliik väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Ettemakstud transporditeenuse saamine (ost).',
            correctAnswer: 'VARA väheneb ja OMAKAPITAL väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Transporditeenuse krediitmüük.',
            correctAnswer: 'VARA suureneb ja OMAKAPITAL suureneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Raha laekumine ostjalt transporditeenuse krediitmüügi eest.',
            correctAnswer: 'Üks VARAliik suureneb ja teine VARAliik väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Transporditeenuse krediitost.',
            correctAnswer: 'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Raha maksmine tarnijale transporditeenuse krediitostu eest.',
            correctAnswer: 'VARA väheneb ja KOHUSTIS väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
    ]
},

{
    id: 'kt1_q7',
    chapter: '6',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha ettemaksmine EBSile (tarnijale) koolitusteenuse ostu eest?',
    matches: [
        {
            item: 'Koolitusteenuse kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed tarnijatele (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt1_q8',
    chapter: '6',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse koolitusteenuse ost EBSilt (tarnijalt), kellele on ettemaks tehtud enne teenuse osutamist?',
    matches: [
        {
            item: 'Koolitusteenuse kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed tarnijatele (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt1_q9',
    chapter: '6',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse raha ettelaekumine üliõpilastelt (ostjatelt) koolitusteenuse müügi eest?',
    matches: [
        {
            item: 'Koolitusteenuse kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt1_q10',
    chapter: '6',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse koolitusteenuse müük üliõpilastele (ostjatele), kellelt on ettemakse laekunud enne teenuse osutamist?',
    matches: [
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Koolitusteenuse tulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Tarnijatele maksmata arved (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt1_q11',
    chapter: '6',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse materiaalse põhivara kulumi korrigeerimiskanne?',
    matches: [
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Depretsiatsiooni kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Akumuleeritud kulum (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch6_q1',
    chapter: '7',
    type: 'dropdown',
    points: 2.5,
    question: 'Eeldame, et ettevõte ABC rakendab ostjate maksmata arvete allahindamist (protsent krediitmüügitulust meetod - percentage of sales method).',
    subQuestion: 'Kuidas konteeritakse internetiteenuse krediitmüügitehing?',
    matches: [
        {
            item: 'Ettemaksed ostjatelt (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Internetiteenuse tulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäoline laekumine (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch6_q2',
    chapter: '7',
    type: 'dropdown',
    points: 2.5,
    question: 'Eeldame, et ettevõte ABC rakendab ostjate maksmata arvete allahindamist (protsent krediitmüügitulust meetod - percentage of sales method).',
    subQuestion: 'Kuidas konteeritakse raha laekumine ostjatelt internetiteenuse krediitmüügist?',
    matches: [
        {
            item: 'Internetiteenuse tulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäoline laekumine (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch6_q3',
    chapter: '7',
    type: 'dropdown',
    points: 2.5,
    question: 'Eeldame, et ettevõte ABC rakendab ostjate maksmata arvete allahindamist (protsent krediitmüügitulust meetod - percentage of sales method).',
    subQuestion: 'Kuidas konteeritakse pankrotistunud ostja maksmata arve mahakandmine?',
    matches: [
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäolise laekumise kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäoline laekumine (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch6_q4',
    chapter: '7',
    type: 'dropdown',
    points: 2.5,
    question: 'Eeldame, et ettevõte ABC rakendab ostjate maksmata arvete allahindamist (protsent krediitmüügitulust meetod - percentage of sales method).',
    subQuestion: 'Kuidas konteeritakse ostjate maksmata arvete allahindamise korrigeerimiskanne?',
    matches: [
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäolise laekumise kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäoline laekumine (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch6_q5',
    chapter: '7',
    type: 'dropdown',
    points: 2.5,
    question: 'Eeldame, et ettevõte XYZ rakendab ostjate maksmata arvete mahakandmisel otsest meetodit (direct write-off method).',
    subQuestion: 'Kuidas konteeritakse pankrotistunud ostja maksmata arve mahakandmine?',
    matches: [
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäolise laekumise kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ebatõenäoline laekumine (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch7_q1',
    chapter: '8',
    type: 'input',
    points: 2.5,
    question: 'Laenuvõla arvutamine',
    questionText: 'Üliõpilane võttis pangast laenu 2000 € viis korda 01. jaanuaril intressimääraga 5% aastatel 2014-2018. Vastavalt laenulepingule üliõpilane maksab tagasi 5 ühesuurust makset (An) 01. jaanuaril aastatel 2021-2025.',
    subQuestion: 'Arvuta laenuvõlg koos intressidega 01.01.2018.',
    timeline: {
        type: 'payment-timeline',
        startYear: 2014,
        endYear: 2025,
        events: [
            { year: 2014, date: '01.01.14', amount: '+2000 €', type: 'loan' },
            { year: 2015, date: '01.01.15', amount: '+2000 €', type: 'loan' },
            { year: 2016, date: '01.01.16', amount: '+2000 €', type: 'loan' },
            { year: 2017, date: '01.01.17', amount: '+2000 €', type: 'loan' },
            { year: 2018, date: '01.01.18', amount: '+2000 €', type: 'loan' },
            { year: 2019, date: '01.01.19', type: 'empty' },
            { year: 2020, date: '01.01.20', type: 'empty' },
            { year: 2021, date: '01.01.21', amount: '- An= ? €', type: 'payment' },
            { year: 2022, date: '01.01.22', amount: '- An= ? €', type: 'payment' },
            { year: 2023, date: '01.01.23', amount: '- An= ? €', type: 'payment' },
            { year: 2024, date: '01.01.24', amount: '- An= ? €', type: 'payment' },
            { year: 2025, date: '01.01.25', amount: '- An= ? €', type: 'payment' }
        ]
    },
    note: 'Sisesta vastus numbrina',
    correctAnswer: '11051.26',
    tolerance: 0.5
},

{
    id: 'ch7_q2',
    chapter: '8',
    type: 'input',
    points: 2.5,
    question: 'Laenuvõla arvutamine',
    questionText: 'Üliõpilane võttis pangast laenu 2000 € viis korda 01. jaanuaril intressimääraga 5% aastatel 2014-2018. Vastavalt laenulepingule üliõpilane maksab tagasi 5 ühesuurust makset (An) 01. jaanuaril aastatel 2021-2025.',
    subQuestion: 'Arvuta laenuvõlg koos intressidega 01.01.2019.',
    timeline: {
        type: 'payment-timeline',
        startYear: 2014,
        endYear: 2025,
        events: [
            { year: 2014, date: '01.01.14', amount: '+2000 €', type: 'loan' },
            { year: 2015, date: '01.01.15', amount: '+2000 €', type: 'loan' },
            { year: 2016, date: '01.01.16', amount: '+2000 €', type: 'loan' },
            { year: 2017, date: '01.01.17', amount: '+2000 €', type: 'loan' },
            { year: 2018, date: '01.01.18', amount: '+2000 €', type: 'loan' },
            { year: 2019, date: '01.01.19', type: 'empty' },
            { year: 2020, date: '01.01.20', type: 'empty' },
            { year: 2021, date: '01.01.21', amount: '- An= ? €', type: 'payment' },
            { year: 2022, date: '01.01.22', amount: '- An= ? €', type: 'payment' },
            { year: 2023, date: '01.01.23', amount: '- An= ? €', type: 'payment' },
            { year: 2024, date: '01.01.24', amount: '- An= ? €', type: 'payment' },
            { year: 2025, date: '01.01.25', amount: '- An= ? €', type: 'payment' }
        ]
    },
    note: 'Sisesta vastus numbrina',
    correctAnswer: '11603.55',
    tolerance: 0.5
},

{
    id: 'ch7_q3',
    chapter: '8',
    type: 'input',
    points: 2.5,
    question: 'Laenuvõla arvutamine',
    questionText: 'Üliõpilane võttis pangast laenu 2000 € viis korda 01. jaanuaril intressimääraga 5% aastatel 2014-2018. Vastavalt laenulepingule üliõpilane maksab tagasi 5 ühesuurust makset  (An) 01. jaanuaril aastatel 2021-2025.',
    subQuestion: 'Arvuta laenuvõlg koos intressidega 01.01.2020.',
    timeline: {
        type: 'payment-timeline',
        startYear: 2014,
        endYear: 2025,
        events: [
            { year: 2014, date: '01.01.14', amount: '+2000 €', type: 'loan' },
            { year: 2015, date: '01.01.15', amount: '+2000 €', type: 'loan' },
            { year: 2016, date: '01.01.16', amount: '+2000 €', type: 'loan' },
            { year: 2017, date: '01.01.17', amount: '+2000 €', type: 'loan' },
            { year: 2018, date: '01.01.18', amount: '+2000 €', type: 'loan' },
            { year: 2019, date: '01.01.19', type: 'empty' },
            { year: 2020, date: '01.01.20', type: 'empty' },
            { year: 2021, date: '01.01.21', amount: '- An= ? €', type: 'payment' },
            { year: 2022, date: '01.01.22', amount: '- An= ? €', type: 'payment' },
            { year: 2023, date: '01.01.23', amount: '- An= ? €', type: 'payment' },
            { year: 2024, date: '01.01.24', amount: '- An= ? €', type: 'payment' },
            { year: 2025, date: '01.01.25', amount: '- An= ? €', type: 'payment' }
        ]
    },
    note: 'Sisesta vastus numbrina',
    correctAnswer: '12183.73',
    tolerance: 0.5
},

{
    id: 'ch7_q4',
    chapter: '8',
    type: 'input',
    points: 2.5,
    question: 'Laenuvõla tagasimakse arvutamine',
    questionText: 'Üliõpilane võttis pangast laenu 2000 € viis korda 01. jaanuaril intressimääraga 5% aastatel 2014-2018. Vastavalt laenulepingule üliõpilane maksab tagasi 5 ühesuurust makset  (An) 01. jaanuaril aastatel 2021-2025.',
    subQuestion: 'Arvuta laenu tagasimakse summa An 01. jaanuaril aastatel 2021-2025.',
    timeline: {
        type: 'payment-timeline',
        startYear: 2014,
        endYear: 2025,
        events: [
            { year: 2014, date: '01.01.14', amount: '+2000 €', type: 'loan' },
            { year: 2015, date: '01.01.15', amount: '+2000 €', type: 'loan' },
            { year: 2016, date: '01.01.16', amount: '+2000 €', type: 'loan' },
            { year: 2017, date: '01.01.17', amount: '+2000 €', type: 'loan' },
            { year: 2018, date: '01.01.18', amount: '+2000 €', type: 'loan' },
            { year: 2019, date: '01.01.19', type: 'empty' },
            { year: 2020, date: '01.01.20', type: 'empty' },
            { year: 2021, date: '01.01.21', amount: '- An= ? €', type: 'payment' },
            { year: 2022, date: '01.01.22', amount: '- An= ? €', type: 'payment' },
            { year: 2023, date: '01.01.23', amount: '- An= ? €', type: 'payment' },
            { year: 2024, date: '01.01.24', amount: '- An= ? €', type: 'payment' },
            { year: 2025, date: '01.01.25', amount: '- An= ? €', type: 'payment' }
        ]
    },
    note: 'Sisesta vastus numbrina',
    correctAnswer: '2814.13',
    tolerance: 0.5,
    acceptNegative: true 
},

{
    id: 'kt2_q1',
    chapter: '9',
    type: 'dropdown',
    points: 2.5,
    question: 'Deebet-kreedit reegel',
    tableData: {
        type: 'accounting-equation',
        headers: ['Vara kontod', '=', 'Kohustise kontod', '+', 'Omakapitali kontod'],
        subheaders: ['deebet', 'kreedit', 'deebet', 'kreedit', 'deebet', 'kreedit']
    },
    subQuestion: 'Millises konto veerus toimub suurenemine ja  millises konto veerus vähenemine vastavalt deebet-kreedit reeglile?',
    matches: [
        {
            item: 'Vara kontodel toimub suurenemine',
            correctAnswer: 'deebet veerus',
            options: ['deebet veerus', 'kreedit veerus']
        },
        {
            item: 'Vara kontodel toimub vähenemine',
            correctAnswer: 'kreedit veerus',
            options: ['deebet veerus', 'kreedit veerus']
        },
        {
            item: 'Kohustise ja omakapitali kontodel toimub suurenemine',
            correctAnswer: 'kreedit veerus',
            options: ['deebet veerus', 'kreedit veerus']
        },
        {
            item: 'Kohustise ja omakapitali kontodel toimub vähenemine',
            correctAnswer: 'deebet veerus',
            options: ['deebet veerus', 'kreedit veerus']
        }
    ]
},

{
    id: 'kt2_q2',
    chapter: '9',
    type: 'multiple-choice',
    points: 2.5,
    question: 'Arvuta ettevõtte ABC 2023. aasta puhaskasum /-kahjum eeldusel, et samal aastal omakapital vähenes 1000 € seoses kasumi jaotamisega ettevõtte ABC omanikule.',
    tableData: {
        headers: ['Ettevõte ABC Finantsseisundi aruanne', '31.12.22', '31.12.23', 'Ettevõte ABC Kasumiaruanne 2023 a.', ''],
        rows: [
            ['Varad', '20 000 €', '12 000 €', 'Puhaskasum/-kahjum', '? €'],
            ['Kohustised', '9 000 €', '3 000 €', '', '', ''],
            ['Omakapital', '? €', '? €', '', '', '']
        ]
    },
    options: [4000, 8000, 11000, 3000, 5000],
    correctAnswer: 3000
},

{
    id: 'kt2_q3',
    chapter: '9',
    type: 'input',
    points: 2.5,
    question: 'Kaubavaru FIFO meetodi rakendamine',
    questionText: 'Kaubandusettevõte BBB müüb meeste päevasärke.',
    inventoryData: [
        { date: '29.02.2024', description: 'kaubavaru jääk: 100 tk., 1 tk. ostuhind 190 €' },
        { date: '01.03.2024', description: '1. ost: 100 tk., 1 tk. ostuhind 190 €' },
        { date: '08.03.2024', description: '2. ost: 100 tk., 1 tk. ostuhind 190 €' },
        { date: '15.03.2024', description: '3. ost: 100 tk., 1 tk. ostuhind 195 €' },
        { date: '22.03.2024', description: '4. ost: 200 tk., 1 tk. ostuhind 200 €' },
        { date: '31.03.2024', description: 'kaubavaru jääk: 128 tk.', highlight: true }
    ],
    subQuestion: 'Arvuta kaubavaru jäägi soetusmaksumus 31.03.2024 FIFO meetodiga:',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '25600',
    tolerance: 0 
},

{
    id: 'kt2_q4',
    chapter: '9',
    type: 'dropdown',
    points: 2.5,
    question: 'Kaubavaru pidev arvestussüsteem',
    subQuestion: 'Kuidas konteeritakse kaubavaru krediitmüük?',
    matches: [
        {
            item: 'Kaubavaru (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müüdud kauba kulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Müügitulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt2_q5',
    chapter: '9',
    type: 'input',
    points: 2.5,
    question: 'Kaubavaru jäägi hindamine brutokasumi meetodiga',
    questionText: 'Mängu kaubamajas oli 01.02.2024 tulekahju.\n\nEeldame, et Mängu Kaubamaja brutokasumimäär on 0.24 müügitulust.',
    sideBySideTables: [
        {
            title: 'Mängu Kaubamaja',
            subtitle: 'jaanuar 2024',
            currency: 'EUR',
            rows: [
                { label: 'Müügitulu', value: '500 000' },
                { label: 'Müüdud kaubavaru hinnanguline kulu', value: '?', highlight: true },
                { label: 'Brutokasum', value: '?', highlight: true }
            ]
        },
        {
            title: 'Mängu Kaubamaja',
            subtitle: 'jaanuar 2024',
            currency: 'EUR',
            rows: [
                { label: 'Kaubavaru jääk 01.01.2024', value: '50 000' },
                { label: 'ostetud kaubavaru soetusmaksumus', value: '377 000' },
                { label: 'müüdud kaubavaru hinnanguline soetusmaksumus', value: '?', highlight: true },
                { label: 'Kaubavaru jääk 31.01.2024', value: '?', highlight: true, red: true }
            ]
        }
    ],
    subQuestion: 'Arvuta kaubavaru jääk 31.01.2024 brutokasumi meetodiga',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '47000',
    tolerance: 0
},

{
    id: 'kt2_q6',
    chapter: '9',
    type: 'input',
    points: 2.5,
    question: 'Materiaalse põhivara lineaarse meetodi rakendamine',
    questionText: 'Ettevõte DDD ostis 1.aprillil 2023 materiaalse põhivara ostuhinnaga 25 000 €.',
    additionalInfo: [
        'Ettevõtte DDD juhi hinnangud 01.04.2023:',
        '- mat. põhivara kasulik eluiga on 4 aastat ehk 48 kuud (01.04.23 – 31.03.27),',
        '- mat. põhivara jääkmaksumus kasuliku eluea lõpus (31.03.27) on 1 000 €,',
        '- mat. põhivara kulumit arvutatakse ühtlase ehk lineaarse meetodiga.'
    ],
    subQuestion: 'Arvuta mat. põhivaravara depretsiatsioonikulu summa ühes kuus:',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '500',
    tolerance: 0
},

{
    id: 'kt2_q7',
    chapter: '9',
    type: 'input',
    points: 2.5,
    question: 'Materiaalse põhivara müük',
    questionText: 'Ettevõte DDD ostis 1.aprillil 2023 materiaalse põhivara ostuhinnaga 25 000 €.',
    additionalInfo: [
        'Ettevõtte DDD juhi hinnangud 01.04.2023:',
        '- mat. põhivara kasulik eluiga on 4 aastat ehk 48 kuud (01.04.23 – 31.03.27),',
        '- mat. põhivara jääkmaksumus kasuliku eluea lõpus (31.03.27) on 1 000 €,',
        '- mat. põhivara kulumit arvutatakse ühtlase ehk lineaarse meetodiga.'
    ],
    subQuestion: 'Oletame, et ettevõte DDD müüb materiaalse põhivara müügihinnaga 1,956 € kaks kuud enne kasuliku eluea lõppu 1.veebruaril 2027. Arvuta kasu / kahju materiaalse põhivara müügist 01.02.2027:',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '-44',
    tolerance: 0
},

{
    id: 'kt2_q8',
    chapter: '9',
    type: 'dropdown',
    points: 2.5,
    question: 'Materiaalse põhivara krediitmüük',
    subQuestion: 'Kuidas konteeritakse materiaalse põhivara krediitmüügi tehing eeldusel, et müüdava vara jääkmaksumus on madalam müügihinnast?',
    matches: [
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Akumuleeritud kulum (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Kasu / kahju mat. põhivara müügist (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt2_q9',
    chapter: '9',
    type: 'input',
    points: 2.5,
    question: 'Ostjate maksmata arved',
    questionText: 'Eeldame, et ettevõte XXX rakendab ebatõenäolise laekumise kulu hinnangulist meetodit  (Allowance Method).',
    table: {
        title: 'Ettevõte XXX',
        subtitle: 'Finantsseisundi aruanne 31.01.2024',
        currency: 'EUR',
        rows: [
            { label: 'Nõuded ostjate vastu', value: '200 000', style: 'blue' },
            { label: 'Ostjate maksmata arved', value: '200 000' },
            { label: 'Ebatõenäoline laekumine', value: '- 7 000', style: 'red' },
            { label: 'Neto nõuded ostjate vastu', value: '193 000', style: 'blue' }
        ]
    },
    subQuestion: 'AArvuta neto nõuded ostjate vastu pärast ostja Y 1000 € maksmata arve mahakandmist.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '193000',
    tolerance: 0
},

{
    id: 'kt2_q10',
    chapter: '9',
    type: 'input',
    points: 2.5,
    question: 'Veksli intressinõue',
    questionText: 'Ettevõte YYY investeeris  01.09.2023 raha 10 000 € vekslisse, mille intressimäär on 6% ja laenuaeg kuus kuud (01.09.23-01.03.24).\n\nRaha laekus veksli ja intresside eest 01.03.2024.',
    subQuestion: 'Kui suur oli ettevõtte YYY intressinõue 31.12.2023?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '200',
    tolerance: 0
},

{
    id: 'kt2_q11',
    chapter: '9',
    type: 'input',
    points: 2.5,
    question: 'Veksli intressitulu',
    questionText: 'Ettevõte YYY investeeris  01.09.2023 raha 10 000 € vekslisse, mille intressimäär on 6% ja laenuaeg kuus kuud (01.09.23-01.03.24).\n\nRaha laekus veksli ja intresside eest 01.03.2024.',
    subQuestion: 'Kui suur oli ettevõtte YYY intressitulu 2024 aastal?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '100',
    tolerance: 0
},

{
    id: 'ch8_q1',
    chapter: '10',
    type: 'input',
    points: 2.5,
    question: 'Antud on ettevõtte ABC mõnede kontode jäägid 31.03.2024:',
    tableData: {
        rows: [
            ['käibemaksuvõlg', '1 100 €'],
            ['intressikulu', '2 500 €'],
            ['tarnijatele maksmata arved', '11 500 €'],
            ['lühiajaline vekslivõlg', '5 000 €'],
            ['vekslivõla diskonto', '- 250 €'],
            ['hinnanguline garantiieraldis', '1 200 €'],
            ['ettemaksed tarnijatele', '6 000 €'],
            ['ettemaksed ostjatelt', '3 500 €']
        ]
    },
    subQuestion: 'Arvuta ettevõtte ABC lühiajalised kohustised finantsseisundi aruandes 31.03.2024: ',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '22050',
    tolerance: 0 
},

{
    id: 'ch8_q2',
    chapter: '10',
    type: 'dropdown',
    points: 2.5,
    question: 'Veksli käibele laskmine',
    questionText: 'Ettevõtte ABC ostis 30.09.2023 materiaalse põhivara (seadme) andes müüjale 4%-lise 1-aastase 10 000 € veksli. Ettevõtte ABC maksab intressid ja vekslivõla 30.09.2024.\n\nKuidas ettevõtte ABC allolevad majandustehingud mõjutavad ettevõtte finantsseisundit tuginedes raamatupidamise võrrandile VARAD = KOHUSTISED + OMAKAPITAL?',
    matches: [
        {
            item: '30.09.23 Mat. põhivara (seadme) krediitost järelmaksuga (veksli käibele laskmine)',
            correctAnswer: 'VARA suureneb ja KOHUSTIS suureneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: '31.12.23 Tekkepõhise intressikulu arvestus (okt- dets. 2023)',
            correctAnswer: 'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: '30.09.24 Tekkepõhise intressikulu arvestus (jaan.- sept. 2024)',
            correctAnswer: 'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: '30.09.24 Veksli- ja intressivõla maksmine',
            correctAnswer: 'VARA väheneb ja KOHUSTIS väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
    ]
},

{
    id: 'ch8_q3',
    chapter: '10',
    type: 'input',
    points: 2.5,
    question: 'Veksli intressivõlg',
    questionText: 'Ettevõtte ABC ostis 30.09.2023 materiaalse põhivara (seadme) andes müüjale 4%-lise 1-aastase 10 000 € veksli. Ettevõtte ABC maksab intressid ja vekslivõla 30.09.2024.',
    subQuestion: 'Arvuta ettevõtte ABC intressivõlg finantsseisundi aruandes 31.12.2023:',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '100',
    tolerance: 0
},

{
    id: 'ch8_q4',
    chapter: '10',
    type: 'input',
    points: 2.5,
    question: 'Veksli intressikulu',
    questionText: 'Ettevõtte ABC ostis 30.09.2023 materiaalse põhivara (seadme) andes müüjale 4%-lise 1-aastase 10 000 € veksli. Ettevõtte ABC maksab intressid ja vekslivõla 30.09.2024.',
    subQuestion: 'Arvuta ettevõtte ABC intressikulu 2024 a. kasumiaruandes:',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '300',
    tolerance: 0
},

{
    id: 'ch8_q5',
    chapter: '10',
    type: 'dropdown',
    points: 2.5,
    question: 'Kuidas konteeritakse käibemaksukohustuslase teenuse krediitmüügi tehing?',
    matches: [
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Teenuse müügitulu (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Käibemaksuvõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch8_q6',
    chapter: '10',
    type: 'multiple-choice',
    points: 2.5,
    question: 'Milline alljärgnev lühiajaline kohustis finantsseisundi aruandes on hinnanguline?',
    options: ['garantii', 'sotsiaalmaks', 'intress', 'käibemaks'],  // Strings with quotes
    correctAnswer: 'garantii'  // String with quotes
},

{
    id: 'ch9_q1',
    chapter: '11',
    type: 'input',
    points: 2.5,
    question: 'Võlakiri - ostuhinna arvutamine',
    questionText: 'Ettevõte LHV Group on emiteerinud 35 000 (tk.) võlakirja LHVB060030A nimiväärtusega 1 000 € Nasdaq Tallinna börsil.',
    bondPriceInfo: {
        date: '02. jaanuar 2024',
        nominal: '1 000 EUR',
        buyPrice: '100,566667 %',
        sellPrice: '102,566667 %',  // Optional - not needed but gives context
        note: 'Hind, % nimiväärtusest (sisaldab kogunenud intressi)'
    },
    subQuestion: 'Arvuta Nasdaq Tallinna börsil 02. jaanuaril 2024 (kauplemispäev) antud võlakirja ostuhind täpsusega 1 €.',
    correctAnswer: '1005.66',
    tolerance: 0.5
},

{
    id: 'ch9_q2',
    chapter: '11',
    type: 'input',
    points: 2.5,
    question: 'Võlakiri - müügihinna arvutamine',
    questionText: 'Ettevõte LHV Group on emiteerinud 35 000 (tk.) võlakirja LHVB060030A nimiväärtusega 1 000 € Nasdaq Tallinna börsil.',
    bondPriceInfo: {
        date: '18. märts 2024',
        nominal: '1 000 EUR',
        buyPrice: '101,733333 %',  // Optional context
        sellPrice: '101,783333 %',  // KEY INFO!
        note: 'Hind, % nimiväärtusest (sisaldab kogunenud intressi)'
    },
    subQuestion: 'Arvuta Nasdaq Tallinna börsil 18. märtsil 2024 (kauplemispäev) antud võlakirja müügihind täpsusega 1 €.',
    correctAnswer: '1017.83',
    tolerance: 0.5
},

{
    id: 'ch9_q3',
    chapter: '11',
    type: 'input',
    points: 2.5,
    question: 'Võlakiri - emissiooni kogumahu arvutamine',
    questionText: '01.01.2015 emiteeris ettevõte ABC võlakirju 100 000 tk. (väärtpaberite arv) ja 01.01.2035 maksab laenu tagasi.',
    bondDetails: {
        title: 'ABC VÕLAKIRI',
        info: [
            { label: 'nimiväärtus', value: '100 €', highlight: true },
            { label: 'intressimäär', value: '4% aastas' },
            { label: 'intressimaksed kord poolaastas', value: '01. jaanuar ja 01. juuli' },
            { label: 'laenuperiood', value: '01.01.2015 – 01.01.2035' },
            { label: 'laenu tagasimakse kuupäev', value: '01.01.2035', highlight: true }
        ]
    },
    subQuestion: 'Arvuta 01.01.2035 tagasimakstav võlakirjavõla summa.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '10000000',
    tolerance: 0  // Exact answer (with margin: 0)
},

{
    id: 'ch9_q4',
    chapter: '11',
    type: 'input',
    points: 2.5,
    question: 'Võlakiri - intressimakse arvutamine',
    questionText: '01.01.2015 emiteeris ettevõte ABC võlakirju 100 000 tk. (väärtpaberite arv). Laenuperioodi ajal maksab ettevõte ABC intresse 2 korda aastas, seega kokku 40 korda.',
    bondDetails: {
        title: 'ABC VÕLAKIRI',
        info: [
            { label: 'nimiväärtus', value: '100 €', highlight: true },
            { label: 'intressimäär', value: '4% aastas' },
            { label: 'intressimaksed kord poolaastas', value: '01. jaanuar ja 01. juuli' },
            { label: 'laenuperiood', value: '01.01.2015 – 01.01.2035' },
            { label: 'laenu tagasimakse kuupäev', value: '01.01.2035', highlight: true }
        ]
    },
    subQuestion: 'Arvuta  ettevõtte ABC poolt iga aasta 01. jaanuaril ja 01. juulil makstav intressisumma laenuperioodi ajal.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '200000',
    tolerance: 0  // Exact answer (with margin: 0)
},

{
    id: 'ch9_q5',
    chapter: '11',
    type: 'dropdown',
    points: 2.5,
    question: 'Võlakirjade emiteerimine preemiaga',
    questionText: 'Kuidas konteeritakse raha laekumine võlakirjade emiteerimisest preemiaga?',
    matches: [
        {
            item: 'Võlakirjavõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Võlakirjavõla preemia (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Võlakirjavõla diskonto (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch9_q6',
    chapter: '11',
    type: 'input',
    points: 2.5,
    question: 'Neto võlakirjavõlg',
    questionText: 'Antud on ettevõtte XXX järgmiste kontode jäägid 31.12.2023:',
    tableData: {
        headers: ['konto', 'EUR'],
        rows: [
            ['pikaajaline võlakirjavõlg', '100 000'],
            ['võlakirjavõla diskonto', '4 000'],
            ['neto võlakirjavõlg', '?', { highlight: true, red: true }]
        ]
    },
    subQuestion: 'Arvuta ettevõtte XXX neto võlakirjavõlg finantsseisundi aruandes 31.12.2023:',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '96000',
    tolerance: 0  // Exact answer (with margin: 0)
},

{
    id: 'ch9_q7',
    chapter: '11',
    type: 'input',
    points: 2.5,
    question: 'Neto võlakirjavõlg',
    questionText: 'Antud on ettevõtte YYY järgmiste kontode jäägid 31.12.2023:',
    tableData: {
        headers: ['konto', 'EUR'],
        rows: [
            ['pikaajaline võlakirjavõlg', '100 000'],
            ['võlakirjavõla diskonto', '4 000'],
            ['neto võlakirjavõlg', '?', { highlight: true, red: true }]
        ]
    },
    subQuestion: 'Arvuta ettevõtte YYY neto võlakirjavõlg finantsseisundi aruandes 31.12.2023:',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '104000',
    tolerance: 0  // Exact answer (with margin: 0)
},

{
    id: 'ch10_q1',
    chapter: '12',
    type: 'input',
    points: 2.5,
    question: 'Aktsia emissioonihind',
    questionText: 'Antud on AS XYZ omakapitali struktuur 31.12.2019 a.:',
    equityStatement: {
        shareCapital: [
            {
                name: 'Eelisaktsiad',
                details: '(7%, nimiv. 100 €, emiteeritud 2 000 tk)',
                amount: 200000
            },
            {
                name: 'Lihtaktsiad',
                details: '(nimiv. 10€, emit. 20 000 tk, käibel 19 000 tk)',
                amount: 200000
            }
        ],
        shareCapitalTotal: 400000,
        
        additionalPaidInCapital: [
            {
                name: 'Ülekurss – eelisaktsiad',
                amount: 100000,
                highlight: true
            },
            {
                name: 'Ülekurss – lihtaktsiad',
                amount: 300000
            }
        ],
        additionalPaidInCapitalTotal: 400000,
        
        treasuryStock: {
            name: 'Oma aktsiad – lihtaktsiad (1 000 tk.)',
            amount: -20000
        },
        
        totalStockCapital: 780000,
        
        retainedEarnings: 200000,
        
        totalEquity: 980000
    },
    subQuestion: 'Aktsiaselts XYZ emiteeris 2019. aastal eelisaktsiaid 2 000 tk. Milline oli eelisaktsia emissioonihind?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '150',
    tolerance: 0
},

{
    id: 'ch10_q2',
    chapter: '12',
    type: 'dropdown',
    points: 2.5,
    question: 'Aktsiate emiteerimine',
    questionText: 'Antud on AS XYZ omakapitali struktuur 31.12.2019 a.:',
    equityStatement: {
        shareCapital: [
            {
                name: 'Eelisaktsiad',
                details: '(7%, nimiv. 100 €, emiteeritud 2 000 tk)',
                amount: 200000
            },
            {
                name: 'Lihtaktsiad',
                details: '(nimiv. 10€, emit. 20 000 tk, käibel 19 000 tk)',
                amount: 200000
            }
        ],
        shareCapitalTotal: 400000,
        
        additionalPaidInCapital: [
            {
                name: 'Ülekurss – eelisaktsiad',
                amount: 100000,
                highlight: true
            },
            {
                name: 'Ülekurss – lihtaktsiad',
                amount: 300000
            }
        ],
        additionalPaidInCapitalTotal: 400000,
        
        treasuryStock: {
            name: 'Oma aktsiad – lihtaktsiad (1 000 tk.)',
            amount: -20000
        },
        
        totalStockCapital: 780000,
        
        retainedEarnings: 200000,
        
        totalEquity: 980000
    },
    subQuestion: 'Aktsiaselts XYZ emiteeris 2019. aastal eelisaktsiaid 2 000 tk. Kuidas on konteeritud raha laekumine eelisaktsiate emissioonist?',
    matches: [
        {
            item: 'Eelisaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ülekurss - eelisaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Jaotamata kasum (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch10_q3',
    chapter: '12',
    type: 'input',
    points: 2.5,
    question: 'Kasumi jaotamine - kumulatiivne eelisaktsia',
    questionText: 'Antud on AS XYZ omakapitali struktuur 31.12.2019 a.:',
    equityStatement: {
        shareCapital: [
            {
                name: 'Eelisaktsiad',
                details: '(7%, nimiv. 100 €, emiteeritud 2 000 tk)',
                amount: 200000
            },
            {
                name: 'Lihtaktsiad',
                details: '(nimiv. 10€, emit. 20 000 tk, käibel 19 000 tk)',
                amount: 200000
            }
        ],
        shareCapitalTotal: 400000,
        
        additionalPaidInCapital: [
            {
                name: 'Ülekurss – eelisaktsiad',
                amount: 100000,
                highlight: true
            },
            {
                name: 'Ülekurss – lihtaktsiad',
                amount: 300000
            }
        ],
        additionalPaidInCapitalTotal: 400000,
        
        treasuryStock: {
            name: 'Oma aktsiad – lihtaktsiad (1 000 tk.)',
            amount: -20000
        },
        
        totalStockCapital: 780000,
        
        retainedEarnings: 200000,
        
        totalEquity: 980000
    },
    subQuestion: 'Oletame, et 01.03.2020 deklareeris aktsiaselts XYZ juhatus rahadividende 85 000 €. AS XYZ juhatus ei deklareerinud dividende eelneval aastal ja emiteeritud eelisaktsiad 2 000 tk. on kumulatiivsed.\n\nKui palju tegi AS XYZ juhatus 01.03.2020 aktsionäride üldkoosolekul ettepaneku maksta dividende 1 lihtaktsia kohta?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '3',
    tolerance: 0
},

{
    id: 'ch10_q4',
    chapter: '12',
    type: 'input',
    points: 2.5,
    question: 'Kasumi jaotamine - mittekumulatiivne eelisaktsia',
    questionText: 'Antud on AS XYZ omakapitali struktuur 31.12.2019 a.:',
    equityStatement: {
        shareCapital: [
            {
                name: 'Eelisaktsiad',
                details: '(7%, nimiv. 100 €, emiteeritud 2 000 tk)',
                amount: 200000
            },
            {
                name: 'Lihtaktsiad',
                details: '(nimiv. 10€, emit. 20 000 tk, käibel 19 000 tk)',
                amount: 200000
            }
        ],
        shareCapitalTotal: 400000,
        
        additionalPaidInCapital: [
            {
                name: 'Ülekurss – eelisaktsiad',
                amount: 100000,
                highlight: true
            },
            {
                name: 'Ülekurss – lihtaktsiad',
                amount: 300000
            }
        ],
        additionalPaidInCapitalTotal: 400000,
        
        treasuryStock: {
            name: 'Oma aktsiad – lihtaktsiad (1 000 tk.)',
            amount: -20000
        },
        
        totalStockCapital: 780000,
        
        retainedEarnings: 200000,
        
        totalEquity: 980000
    },
    subQuestion: 'Emiteeritud eelisaktsiad 2 000 tk. on mittekumulatiivsed. 01.03.2020 tegi AS XYZ juhatus aktsionäride üldkoosolekul ettepaneku maksta dividende 2 € lihtaktsia kohta. Kui palju deklareeris 01.03.2020 aktsiaselts XYZ juhatus rahadividende?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '52000',
    tolerance: 0
},

{
    id: 'ch10_q5',
    chapter: '12',
    type: 'input',
    points: 2.5,
    question: 'Oma lihtaktsia ostuhind',
    questionText: 'Antud on AS XYZ omakapitali struktuur 31.12.2019 a.:',
    equityStatement: {
        shareCapital: [
            {
                name: 'Eelisaktsiad',
                details: '(7%, nimiv. 100 €, emiteeritud 2 000 tk)',
                amount: 200000
            },
            {
                name: 'Lihtaktsiad',
                details: '(nimiv. 10€, emit. 20 000 tk, käibel 19 000 tk)',
                amount: 200000
            }
        ],
        shareCapitalTotal: 400000,
        
        additionalPaidInCapital: [
            {
                name: 'Ülekurss – eelisaktsiad',
                amount: 100000,
                highlight: true
            },
            {
                name: 'Ülekurss – lihtaktsiad',
                amount: 300000
            }
        ],
        additionalPaidInCapitalTotal: 400000,
        
        treasuryStock: {
            name: 'Oma aktsiad – lihtaktsiad (1 000 tk.)',
            amount: -20000
        },
        
        totalStockCapital: 780000,
        
        retainedEarnings: 200000,
        
        totalEquity: 980000
    },
    subQuestion: 'Aktsiaselts XYZ ostis 2019. aastal oma lihtaktsiaid. Milline oli oma lihtaktsia ostuhind?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '20',
    tolerance: 0
},
{
    id: 'ch10_q6',
    chapter: '12',
    type: 'dropdown',
    points: 2.5,
    question: 'Oma aktsiate ost',
    questionText: 'Antud on AS XYZ omakapitali struktuur 31.12.2019 a.:',
    equityStatement: {
        shareCapital: [
            {
                name: 'Eelisaktsiad',
                details: '(7%, nimiv. 100 €, emiteeritud 2 000 tk)',
                amount: 200000
            },
            {
                name: 'Lihtaktsiad',
                details: '(nimiv. 10€, emit. 20 000 tk, käibel 19 000 tk)',
                amount: 200000
            }
        ],
        shareCapitalTotal: 400000,
        
        additionalPaidInCapital: [
            {
                name: 'Ülekurss – eelisaktsiad',
                amount: 100000,
                highlight: true
            },
            {
                name: 'Ülekurss – lihtaktsiad',
                amount: 300000
            }
        ],
        additionalPaidInCapitalTotal: 400000,
        
        treasuryStock: {
            name: 'Oma aktsiad – lihtaktsiad (1 000 tk.)',
            amount: -20000
        },
        
        totalStockCapital: 780000,
        
        retainedEarnings: 200000,
        
        totalEquity: 980000
    },
    subQuestion: 'Aktsiaselts XYZ ostis 2019. aastal oma lihtaktsiaid. Kuidas on konteeritud raha maksmine oma lihtaktsiate ostu eest?',
    matches: [
        {
            item: 'Lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ülekurss - lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Oma aktsiad - lihtaktsiad (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'ch10_q7',
    chapter: '12',
    type: 'dropdown',
    points: 2.5,
    question: 'Oma aktsiate müük',
    questionText: 'Antud on AS XYZ omakapitali struktuur 31.12.2019 a.:',
    equityStatement: {
        shareCapital: [
            {
                name: 'Eelisaktsiad',
                details: '(7%, nimiv. 100 €, emiteeritud 2 000 tk)',
                amount: 200000
            },
            {
                name: 'Lihtaktsiad',
                details: '(nimiv. 10€, emit. 20 000 tk, käibel 19 000 tk)',
                amount: 200000
            }
        ],
        shareCapitalTotal: 400000,
        
        additionalPaidInCapital: [
            {
                name: 'Ülekurss – eelisaktsiad',
                amount: 100000,
                highlight: true
            },
            {
                name: 'Ülekurss – lihtaktsiad',
                amount: 300000
            }
        ],
        additionalPaidInCapitalTotal: 400000,
        
        treasuryStock: {
            name: 'Oma aktsiad – lihtaktsiad (1 000 tk.)',
            amount: -20000
        },
        
        totalStockCapital: 780000,
        
        retainedEarnings: 200000,
        
        totalEquity: 980000
    },
    subQuestion: 'Aktsiaselts XYZ ostis 2019. aastal oma lihtaktsiaid. Oletame, et kõik ostetud oma lihtaktsiad müüakse hinnaga 18 €/tk. Kuidas konteeritakse raha laekumine oma lihtaktsiate müügist?',
    matches: [
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Oma aktsiad - lihtaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ülekurss - lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Jaotamata kasum (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt3_q1',
    chapter: '13',
type: 'input',
    points: 2.5,
    question: 'Investeeringu arvutamine',
    questionText: 'Investor investeerib aastatel 2021-2040 iga aasta lõpus 31. detsembril 20 ühesuurust makset (An) intressimääraga 5%.\n\nInvesteerimisaja lõpus 31. detsembril 2040 on investeeringu väärtus 200 000 €.',
    subQuestion: 'Arvuta 31. detsembril aastatel 2021-2040 iga-aastane makse (An) täpsusega 1 €.',
    correctAnswer: '6048',
    acceptNegative: true,  // Accept both 6048 and -6048
    tolerance: 1  // ±1 euro
},

{
    id: 'kt3_q2',
    chapter: '13',
type: 'input',
    points: 0.5,
    question: 'Materiaalse põhivara krediitmüük + KM (käibemaks)',
    questionText: 'Eeldame, et ettevõte ABC müüs kasutatud materiaalse põhivara (vana arvuti, mille  soetusmaksumus oli 2 000 € ja akumuleeritud kulum 1 300 €) müügihinnaga 528 €+ KM 24%.',
    subQuestion: 'Arvuta kasu / kahju materiaalse põhivara müügist.',
    correctAnswer: '-172',
    tolerance: 0  
},

{
    id: 'kt3_q3',
    chapter: '13',
    type: 'dropdown',
    points: 2.5,
    question: 'Materiaalse põhivara krediitmüük + KM (käibemaks)',
    questionText: 'Eeldame, et ettevõte ABC müüs kasutatud materiaalse põhivara (vana arvuti, mille  soetusmaksumus oli 2 000 € ja akumuleeritud kulum 1 300 €) müügihinnaga 1 000 €+ KM 24%.',
    subQuestion: 'Kuidas konteeritakse materiaalse põhivara krediitmüügi tehing?',
    matches: [
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Depretsiatsiooni kulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Akumuleeritud kulum (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ostjate maksmata arved (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Kasu / kahju mat. põhivara müügist (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Käbemaksuvõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Käbemaksunõue (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt3_q4',
    chapter: '13',
    type: 'dropdown',
    points: 2.5,
    question: 'Veksli käibele laskmine',
    questionText: 'Ettevõte ABC ostis 01.04.2024 materiaalse põhivara (seadme) andes müüjale 4%-lise 1-aastase 10 000 € veksli. Ettevõte ABC maksab laenu 10 000 € ja intressid 01.04.2025.',
    subQuestion: 'Tuginedes raamatupidamise võrrandile VARA = KOHUSTIS + OMAKAPITAL, kuidas antud majandustehingud mõjutavad ettevõtte ABC finantsseisundit?',
    matches: [
        {
            item: '01.04.2024 materiaalse põhivara (seadme) ost',
            correctAnswer: 'VARA suureneb ja KOHUSTIS suureneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: 'Iga kuu lõpus tekkepõhise intressikulu arvestus',
            correctAnswer: 'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
        {
            item: '01.04.2025 laenu ja intresside tagasimaksmine',
            correctAnswer: 'VARA väheneb ja KOHUSTIS väheneb',
            options: [
                'KOHUSTIS väheneb ja OMAKAPITAL suureneb',
                'KOHUSTIS suureneb ja OMAKAPITAL väheneb',
                'Üks VARAliik suureneb ja teine VARAliik väheneb',
                'VARA suureneb ja KOHUSTIS suureneb',
                'VARA suureneb ja OMAKAPITAL suureneb',
                'VARA väheneb ja KOHUSTIS väheneb',
                'VARA väheneb ja OMAKAPITAL väheneb'
            ]
        },
    ]
},

{
    id: 'kt3_q5',
    chapter: '13',
    type: 'dropdown',
    points: 2.5,
    question: 'Veksli käibele laskmine',
    questionText: 'Ettevõte ABC ostis 01.04.2024 materiaalse põhivara (seadme) andes müüjale 4%-lise 1-aastase 10 000 € veksli. Ettevõte ABC maksab laenu 10 000 € ja intressid 01.04.2025.',
    subQuestion: 'Kuidas konteeritakse 01.04.2024 materiaalse põhivara (seadme) ost?',
    matches: [
        {
            item: 'Vekslivõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Intressivõlg (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Materiaalne põhivara (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Intressikulu (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
    ]
},

{
    id: 'kt3_q6',
    chapter: '13',
    type: 'input',
    points: 2.5,
    question: 'Veksli intressivõlg',
    questionText: 'Ettevõte ABC ostis 01.04.2024 materiaalse põhivara (seadme) andes müüjale 4%-lise 1-aastase 10 000 € veksli. Ettevõte ABC maksab laenu 10 000 € ja intressid 01.04.2025.',
    subQuestion: 'Arvuta ettevõtte ABC intressivõlg 31.12.2024 finantsseisundi aruandes.',
    correctAnswer: '300',
    tolerance: 0
},

{
    id: 'kt3_q7',
    chapter: '13',
    type: 'input',
    points: 2.5,
    question: 'Veksli intressikulu',
    questionText: 'Ettevõte ABC ostis 01.04.2024 materiaalse põhivara (seadme) andes müüjale 4%-lise 1-aastase 10 000 € veksli. Ettevõte ABC maksab laenu 10 000 € ja intressid 01.04.2025.',
    subQuestion: 'Arvuta ettevõtte ABC intressikulu 2025 a. kasumiaruandes.',
    correctAnswer: '100',
    tolerance: 0
},

{
    id: 'kt3_q8',
    chapter: '13',
    type: 'input',
    points: 2.5,
    question: 'Võlakiri - võlasumma arvutamine',
    questionText: '01.01.2015 emiteeris ettevõte ABC võlakirju 40 000 tk. (väärtpaberite arv), emissioonihind 94%. Laenuajal maksab ettevõte ABC 40 korda intresse.',
    bondDetails: {
        title: 'ABC VÕLAKIRI',
        info: [
            { label: 'nimiväärtus', value: '100 €', highlight: true },
            { label: 'intressimäär', value: '4% aastas' },
            { label: 'intressimaksed kord poolaastas', value: '01. jaanuar ja 01. juuli' },
            { label: 'laenuperiood', value: '01.01.2015 – 01.01.2035' },
            { label: 'laenu tagasimakse kuupäev', value: '01.01.2035', highlight: true }
        ]
    },
    subQuestion: 'Arvuta ettevõtte ABC tagasimakstav võlasumma 01.01.2035.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '4000000',
    tolerance: 0  // Exact answer (with margin: 0)
},

{
    id: 'kt3_q9',
    chapter: '13',
    type: 'input',
    points: 2.5,
    question: 'Võlakiri - intressimakse arvutamine',
    questionText: '01.01.2015 emiteeris ettevõte ABC võlakirju 40 000 tk. (väärtpaberite arv), emissioonihind 94%. Laenuajal maksab ettevõte ABC 40 korda intresse.',
    bondDetails: {
        title: 'ABC VÕLAKIRI',
        info: [
            { label: 'nimiväärtus', value: '100 €', highlight: true },
            { label: 'intressimäär', value: '4% aastas' },
            { label: 'intressimaksed kord poolaastas', value: '01. jaanuar ja 01. juuli' },
            { label: 'laenuperiood', value: '01.01.2015 – 01.01.2035' },
            { label: 'laenu tagasimakse kuupäev', value: '01.01.2035', highlight: true }
        ]
    },
    subQuestion: 'Arvuta ettevõtte ABC intressimaksed 1. jaanuaril ja 01. juulil.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '80000',
    tolerance: 0  // Exact answer (with margin: 0)
},

{
    id: 'kt3_q10',
    chapter: '13',
    type: 'input',
    points: 2.5,
    question: 'Võlakiri - diskonto / preemia amortisatsioonisumma arvutamine',
    questionText: '01.01.2015 emiteeris ettevõte ABC võlakirju 40 000 tk. (väärtpaberite arv), emissioonihind 94%. Laenuajal maksab ettevõte ABC 40 korda intresse.',
    bondDetails: {
        title: 'ABC VÕLAKIRI',
        info: [
            { label: 'nimiväärtus', value: '100 €', highlight: true },
            { label: 'intressimäär', value: '4% aastas' },
            { label: 'intressimaksed kord poolaastas', value: '01. jaanuar ja 01. juuli' },
            { label: 'laenuperiood', value: '01.01.2015 – 01.01.2035' },
            { label: 'laenu tagasimakse kuupäev', value: '01.01.2035', highlight: true }
        ]
    },
    subQuestion: 'Arvuta diskonto / preemia amortisatsioonisumma pooles aastas lineaarse meetodiga',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '6000',
    tolerance: 0  // Exact answer (with margin: 0)
},

{
    id: 'kt3_q11',
    chapter: '13',
    type: 'dropdown',
    points: 2.5,
    question: 'Võlakirjade tekkepõhise intressikulu arvestus',
    questionText: '01.01.2015 emiteeris ettevõte ABC võlakirju 40 000 tk. (väärtpaberite arv), emissioonihind 94%. Laenuajal maksab ettevõte ABC 40 korda intresse.',
    bondDetails: {
        title: 'ABC VÕLAKIRI',
        info: [
            { label: 'nimiväärtus', value: '100 €', highlight: true },
            { label: 'intressimäär', value: '4% aastas' },
            { label: 'intressimaksed kord poolaastas', value: '01. jaanuar ja 01. juuli' },
            { label: 'laenuperiood', value: '01.01.2015 – 01.01.2035' },
            { label: 'laenu tagasimakse kuupäev', value: '01.01.2035', highlight: true }
        ]
    },
    subQuestion: 'Kuidas konteeritakse jaan.- juuni 2015 tekkepõhise intressikulu kanne enne esimest intessimakset 01.07.2015?',
    matches: [
        {
            item: 'Võlakirjavõlg (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Võlakirjavõla diskonto (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Intressivõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Intressikulu (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt3_q12',
    chapter: '13',
    type: 'dropdown',
    points: 2.5,
    question: 'Võlakirjade emiteerimine',
    questionText: '01.01.2015 emiteeris ettevõte ABC võlakirju 40 000 tk. (väärtpaberite arv), emissioonihind 94%. Laenuajal maksab ettevõte ABC 40 korda intresse.',
    bondDetails: {
        title: 'ABC VÕLAKIRI',
        info: [
            { label: 'nimiväärtus', value: '100 €', highlight: true },
            { label: 'intressimäär', value: '4% aastas' },
            { label: 'intressimaksed kord poolaastas', value: '01. jaanuar ja 01. juuli' },
            { label: 'laenuperiood', value: '01.01.2015 – 01.01.2035' },
            { label: 'laenu tagasimakse kuupäev', value: '01.01.2035', highlight: true }
        ]
    },
    subQuestion: 'Kuidas konteeritakse raha laekumine võlakirjade emissioonist?',
    matches: [
        {
            item: 'Võlakirjavõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Võlakirjavõla preemia (kohustise konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Võlakirjavõla diskonto (kohustise konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt3_q13',
    chapter: '13',
    type: 'input',
    points: 2.5,
    question: 'VVõlakiri - turuhinna arvutamine',
    questionText: 'Ettevõte LHV Group on emiteerinud 35 000 (tk.) võlakirja LHVB060030A on noteeritud Nasdaq Tallinna börsil.',
    bondPriceInfo: {
        date: '04. aprill 2024',
        nominal: '1 000 EUR',
        buyPrice: '99,643333 %',
        sellPrice: '100,133333 %',  // Optional - not needed but gives context
        note: 'Hind, % nimiväärtusest (sisaldab kogunenud intressi)'
    },
    subQuestion: 'Arvuta 04. aprillil 2024 (kauplemispäev) antud võlakirja ostuhind täpsusega 1 €.',
    correctAnswer: '996.43',
    tolerance: 0.5
},

{
    id: 'kt4_q1',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Aktsiaselts ZZZ on emiteerinud eelisaktsiaid 600 000 tk. Arvuta eelisaktsia emissioonihind.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '10',
    tolerance: 0
},

{
    id: 'kt4_q2',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Aktsiaselts ZZZ on emiteerinud lihtaktsiaid 6 000 000 tk. Arvuta lihtaktsia emissioonihind.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '2',
    tolerance: 0
},

{
    id: 'kt4_q3',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Aktsiaselts ZZZ on emiteerinud lihtaktsiaid 6 000 000 tk. Kuidas on konteeritud raha laekumine  lihtaktsiate emissioonist?',
    matches: [
        {
            item: 'Lihtaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ülekurss - lihtaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Oma lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Jaotamata kasum (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt4_q4',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Aktsiaselts ZZZ on emiteerinud lihtaktsiaid 6 000 000 tk. Mitu lihtaktsiat on aktsionäride käes?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '5900000',
    tolerance: 0
},

{
    id: 'kt4_q5',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Aktsiaselts ZZZ ostis 2023. aastal börsilt oma lihtaktsiaid 100 000 tk. Kuidas on konteeritud oma lihtaktsiate ost?',
    matches: [
        {
            item: 'Lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Ülekurss - lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Oma lihtaktsiad (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Jaotamata kasum (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt4_q6',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Eeldame, et AS ZZZ eelisaktsiad on kumulatiivsed ja AS ZZZ on eelnevatel aastatel regulaarselt dividende maksnud ettevõte.\n\nOletame, et 01.03.2024 deklareeris aktsiaselts ZZZ juhatus rahadividendi 2€ lihtaktsia kohta.  Arvuta eelis- ja lihtaktsionäridele deklareeritud rahadividendisumma.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '12400000',
    tolerance: 0
},

{
    id: 'kt4_q7',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Eeldame, et AS ZZZ eelisaktsiad on kumulatiivsed ja AS ZZZ pole 2023. aastal dividende maksnud.\n\nOletame, et 01.03.2024 aktsiaselts ZZZ juhatus deklareeris rahadividendi 3€ lihtaktsia kohta. Arvuta eelis- ja lihtaktsionäridele deklareeritud rahadividendisumma.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '18900000',
    tolerance: 0
},

{
    id: 'kt4_q8',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Oletame, et 01.03.2024 aktsiaselts ZZZ juhatus deklareeris rahadividendi 13 000 000 €.\n\nKuidas konteeris AS ZZZ deklareeritud dividendisumma?',
    matches: [
        {
            item: 'Dividendivõlg (kohustise konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Oma lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Jaotamata kasum (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Lihtaktsiad (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt4_q9',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Oletame, et 01.03.2024 aktsiaselts ZZZ juhatus otsustas deklareerida eelisaktsinäridele rahadividendi ja lihtaktsionäridele 100% aktsiadividendi.\n\nMitu lihtaktsiat emiteeris AS ZZZ oma aktsionäridele aktsiadividendiks?',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '5900000',
    tolerance: 0
},

{
    id: 'kt4_q10',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Oletame, et aktsiaselts ZZZ müüs 01.04.2024 eelneval aastal börsilt ostetud oma lihtaktsiad 50 000 tk. müügihinnaga 2 € tükk.\n\nArvuta kasu / kahju 50 000 tk. oma lihtaktsia müügist.',
    note: 'Sisesta vastus numbrina (ilma komadeta)',
    correctAnswer: '50000',
    tolerance: 0
},

{
    id: 'kt4_q11',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Oletame, et aktsiaselts ZZZ müüs 01.04.2024 eelneval aastal börsilt ostetud oma lihtaktsiad 50 000 tk. müügihinnaga 2€ tükk.\n\nKuidas konteeris AS ZZZ 01.04.2024 oma lihtaktsiate müügi?',
    matches: [
        {
            item: 'Ülekurss - oma lihtaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Oma lihtaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Jaotamata kasum (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
},

{
    id: 'kt4_q12',
    chapter: '14',
    type: 'input',
    points: 2.5,
    question: 'AS ZZZ - omakapitali struktuur aktsiaseltsis',
    questionText: 'Antud on AS ZZZ finantsseisundi aruandest 31.12.2023 omakapitali väljavõte:',
    tableData: {
        headers: ['Omakapital', '€'],
        rows: [
            ['Eelisaktsiad (10%, nimiv. 10 €, emit. 600 000 tk.)', '6 000 000'],
            ['Lihtaktsiad (nimiv. 1€, emit. 6 000 000 tk, käibel 5 900 000 tk.)', '6 000 000'],
            ['Ülekurss – lihtaktsiad', '6 000 000'],
            ['Ülekurss – oma lihtaktsiad', '100 000'],
            ['Oma lihtaktsiad (100 000 tk.)', '- 100 000'],
            ['Aktsiakapital kokku', '18 000 000'],  // Mark as bold in renderer based on label
            ['Jaotamata kasum', '32 000 000'],
            ['Omakapital kokku', '50 000 000']  // Mark as bold in renderer based on label
        ]
    },
    subQuestion: 'Oletame, et aktsiaselts ZZZ müüs 20.04.2024 eelneval aastal börsilt ostetud oma lihtaktsiad 50 000 tk. müügihinnaga 0,5€ tükk.\n\nKuidas konteeris AS ZZZ 20.04.2024 oma lihtaktsiate müügi?',
    matches: [
        {
            item: 'Ülekurss - oma lihtaktsiad (omakapitali konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Oma lihtaktsiad (omakapitali konto)',
            correctAnswer: 'kreedit',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Jaotamata kasum (omakapitali konto)',
            correctAnswer: 'seda kontot ei kasutata',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        },
        {
            item: 'Raha (vara konto)',
            correctAnswer: 'deebet',
            options: ['deebet', 'kreedit', 'seda kontot ei kasutata']
        }
    ]
}
];
