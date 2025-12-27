// Finance Accounting Question Bank
// 14 Chapters with multiple questions per chapter

const QUESTION_BANK = [
  // Chapter 1: Introduction to Financial Accounting
  {
    id: 1,
    chapter: 1,
    chapterName: "Introduction to Financial Accounting",
    type: "multiple-choice",
    points: 2,
    question: "What is the primary purpose of financial accounting?",
    options: [
      "To provide information for internal management decisions",
      "To provide financial information to external users",
      "To calculate taxes owed to the government",
      "To determine employee salaries"
    ],
    correctAnswer: 1,
    explanation: "Financial accounting primarily provides financial information to external users such as investors, creditors, and regulators."
  },
  {
    id: 2,
    chapter: 1,
    chapterName: "Introduction to Financial Accounting",
    type: "multiple-choice",
    points: 2,
    question: "Which accounting principle requires that expenses be matched with revenues?",
    options: [
      "Going Concern Principle",
      "Matching Principle",
      "Revenue Recognition Principle",
      "Cost Principle"
    ],
    correctAnswer: 1,
    explanation: "The Matching Principle requires that expenses be recorded in the same period as the revenues they helped generate."
  },
  {
    id: 3,
    chapter: 1,
    chapterName: "Introduction to Financial Accounting",
    type: "dropdown",
    points: 3,
    question: "Match each accounting concept with its definition:",
    pairs: [
      { term: "Assets", definition: "Resources owned by a business" },
      { term: "Liabilities", definition: "Debts owed by a business" },
      { term: "Equity", definition: "Owner's claim on assets" }
    ],
    explanation: "Assets are resources owned, liabilities are obligations owed, and equity represents the owner's residual interest."
  },

  // Chapter 2: The Accounting Equation
  {
    id: 4,
    chapter: 2,
    chapterName: "The Accounting Equation",
    type: "calculation",
    points: 3,
    question: "If a company has total assets of $150,000 and total liabilities of $60,000, what is the owner's equity?",
    correctAnswer: 90000,
    tolerance: 0,
    unit: "$",
    explanation: "Using the accounting equation: Assets = Liabilities + Equity. Therefore, Equity = Assets - Liabilities = $150,000 - $60,000 = $90,000"
  },
  {
    id: 5,
    chapter: 2,
    chapterName: "The Accounting Equation",
    type: "multiple-choice",
    points: 2,
    question: "Which transaction will increase both assets and liabilities?",
    options: [
      "Purchasing equipment with cash",
      "Borrowing money from a bank",
      "Paying off a loan",
      "Owner investing cash in the business"
    ],
    correctAnswer: 1,
    explanation: "Borrowing money increases both cash (asset) and notes payable (liability)."
  },
  {
    id: 6,
    chapter: 2,
    chapterName: "The Accounting Equation",
    type: "dropdown",
    points: 3,
    question: "Classify each account type:",
    pairs: [
      { term: "Cash", definition: "Asset" },
      { term: "Accounts Payable", definition: "Liability" },
      { term: "Common Stock", definition: "Equity" }
    ],
    explanation: "Cash is an asset, Accounts Payable is a liability, and Common Stock is an equity account."
  },

  // Chapter 3: Recording Business Transactions
  {
    id: 7,
    chapter: 3,
    chapterName: "Recording Business Transactions",
    type: "multiple-choice",
    points: 2,
    question: "What is a debit in accounting?",
    options: [
      "An entry on the right side of an account",
      "An entry on the left side of an account",
      "Always an increase to an account",
      "Always a decrease to an account"
    ],
    correctAnswer: 1,
    explanation: "A debit is an entry on the left side of an account. Its effect depends on the account type."
  },
  {
    id: 8,
    chapter: 3,
    chapterName: "Recording Business Transactions",
    type: "dropdown",
    points: 3,
    question: "Match the normal balance for each account type:",
    pairs: [
      { term: "Assets", definition: "Debit" },
      { term: "Liabilities", definition: "Credit" },
      { term: "Revenue", definition: "Credit" },
      { term: "Expenses", definition: "Debit" }
    ],
    explanation: "Assets and expenses have debit balances, while liabilities, equity, and revenues have credit balances."
  },
  {
    id: 9,
    chapter: 3,
    chapterName: "Recording Business Transactions",
    type: "multiple-choice",
    points: 2,
    question: "Which of the following is NOT a component of a journal entry?",
    options: [
      "Date",
      "Account names",
      "Budget forecast",
      "Debit and credit amounts"
    ],
    correctAnswer: 2,
    explanation: "A journal entry includes the date, account names, and debit/credit amounts. Budget forecasts are not part of journal entries."
  },

  // Chapter 4: Adjusting Accounts
  {
    id: 10,
    chapter: 4,
    chapterName: "Adjusting Accounts",
    type: "multiple-choice",
    points: 2,
    question: "Why are adjusting entries necessary?",
    options: [
      "To correct errors in the accounting records",
      "To ensure revenues and expenses are recorded in the correct period",
      "To close temporary accounts",
      "To prepare the trial balance"
    ],
    correctAnswer: 1,
    explanation: "Adjusting entries ensure that revenues and expenses are recognized in the appropriate accounting period."
  },
  {
    id: 11,
    chapter: 4,
    chapterName: "Adjusting Accounts",
    type: "calculation",
    points: 3,
    question: "A company paid $12,000 for a one-year insurance policy on October 1. What is the insurance expense for the year ending December 31?",
    correctAnswer: 3000,
    tolerance: 0,
    unit: "$",
    explanation: "Insurance expense = ($12,000 / 12 months) × 3 months = $3,000"
  },
  {
    id: 12,
    chapter: 4,
    chapterName: "Adjusting Accounts",
    type: "dropdown",
    points: 3,
    question: "Match each adjusting entry type with its description:",
    pairs: [
      { term: "Accrued Revenue", definition: "Revenue earned but not yet received" },
      { term: "Deferred Revenue", definition: "Cash received before revenue is earned" },
      { term: "Accrued Expense", definition: "Expense incurred but not yet paid" }
    ],
    explanation: "Accrued items are earned/incurred but not yet recorded, while deferred items are recorded but not yet earned/incurred."
  },

  // Chapter 5: Completing the Accounting Cycle
  {
    id: 13,
    chapter: 5,
    chapterName: "Completing the Accounting Cycle",
    type: "multiple-choice",
    points: 2,
    question: "What is the purpose of closing entries?",
    options: [
      "To correct errors in the ledger",
      "To transfer temporary account balances to permanent accounts",
      "To prepare adjusting entries",
      "To calculate net income"
    ],
    correctAnswer: 1,
    explanation: "Closing entries transfer the balances of temporary accounts (revenues, expenses, dividends) to permanent accounts (retained earnings)."
  },
  {
    id: 14,
    chapter: 5,
    chapterName: "Completing the Accounting Cycle",
    type: "multiple-choice",
    points: 2,
    question: "Which accounts are NOT closed at the end of the accounting period?",
    options: [
      "Revenue accounts",
      "Expense accounts",
      "Asset accounts",
      "Dividend accounts"
    ],
    correctAnswer: 2,
    explanation: "Asset accounts are permanent accounts and are not closed. Only temporary accounts (revenues, expenses, dividends) are closed."
  },
  {
    id: 15,
    chapter: 5,
    chapterName: "Completing the Accounting Cycle",
    type: "dropdown",
    points: 3,
    question: "Order the steps in the accounting cycle:",
    pairs: [
      { term: "Step 1", definition: "Analyze transactions" },
      { term: "Step 2", definition: "Journalize transactions" },
      { term: "Step 3", definition: "Post to ledger" },
      { term: "Step 4", definition: "Prepare trial balance" }
    ],
    explanation: "The accounting cycle begins with analyzing transactions, then journalizing, posting, and preparing the trial balance."
  },

  // Chapter 6: Accounting for Merchandising Operations
  {
    id: 16,
    chapter: 6,
    chapterName: "Accounting for Merchandising Operations",
    type: "calculation",
    points: 3,
    question: "If sales revenue is $100,000, cost of goods sold is $60,000, and operating expenses are $25,000, what is the net income?",
    correctAnswer: 15000,
    tolerance: 0,
    unit: "$",
    explanation: "Net Income = Sales Revenue - Cost of Goods Sold - Operating Expenses = $100,000 - $60,000 - $25,000 = $15,000"
  },
  {
    id: 17,
    chapter: 6,
    chapterName: "Accounting for Merchandising Operations",
    type: "multiple-choice",
    points: 2,
    question: "What is the difference between FOB shipping point and FOB destination?",
    options: [
      "FOB shipping point means the buyer pays freight; FOB destination means the seller pays",
      "FOB shipping point means the seller pays freight; FOB destination means the buyer pays",
      "They are the same thing",
      "FOB only applies to international shipping"
    ],
    correctAnswer: 0,
    explanation: "FOB (Free On Board) shipping point means ownership transfers at the shipping point, so the buyer pays freight. FOB destination means ownership transfers at destination, so the seller pays."
  },
  {
    id: 18,
    chapter: 6,
    chapterName: "Accounting for Merchandising Operations",
    type: "dropdown",
    points: 3,
    question: "Match the inventory system with its characteristic:",
    pairs: [
      { term: "Perpetual System", definition: "Updates inventory continuously" },
      { term: "Periodic System", definition: "Updates inventory at period end" }
    ],
    explanation: "Perpetual systems maintain continuous inventory records, while periodic systems update inventory only at the end of the period."
  },

  // Chapter 7: Inventory and Cost of Goods Sold
  {
    id: 19,
    chapter: 7,
    chapterName: "Inventory and Cost of Goods Sold",
    type: "multiple-choice",
    points: 2,
    question: "Which inventory costing method assumes that the newest items are sold first?",
    options: [
      "FIFO (First-In, First-Out)",
      "LIFO (Last-In, First-Out)",
      "Weighted Average",
      "Specific Identification"
    ],
    correctAnswer: 1,
    explanation: "LIFO (Last-In, First-Out) assumes that the most recently purchased items are sold first."
  },
  {
    id: 20,
    chapter: 7,
    chapterName: "Inventory and Cost of Goods Sold",
    type: "calculation",
    points: 3,
    question: "Beginning inventory is $20,000, purchases are $80,000, and ending inventory is $15,000. What is the cost of goods sold?",
    correctAnswer: 85000,
    tolerance: 0,
    unit: "$",
    explanation: "Cost of Goods Sold = Beginning Inventory + Purchases - Ending Inventory = $20,000 + $80,000 - $15,000 = $85,000"
  },
  {
    id: 21,
    chapter: 7,
    chapterName: "Inventory and Cost of Goods Sold",
    type: "dropdown",
    points: 3,
    question: "Match the inventory method with its effect during inflation:",
    pairs: [
      { term: "FIFO", definition: "Higher net income" },
      { term: "LIFO", definition: "Lower net income" },
      { term: "Weighted Average", definition: "Between FIFO and LIFO" }
    ],
    explanation: "During inflation, FIFO results in higher net income because older, cheaper costs are matched against revenue. LIFO results in lower net income."
  },

  // Chapter 8: Internal Control and Cash
  {
    id: 22,
    chapter: 8,
    chapterName: "Internal Control and Cash",
    type: "multiple-choice",
    points: 2,
    question: "Which of the following is a principle of internal control?",
    options: [
      "Establish responsibilities",
      "Maximize profits",
      "Reduce employee count",
      "Eliminate all paperwork"
    ],
    correctAnswer: 0,
    explanation: "Establishing clear responsibilities is a key principle of internal control to prevent errors and fraud."
  },
  {
    id: 23,
    chapter: 8,
    chapterName: "Internal Control and Cash",
    type: "calculation",
    points: 3,
    question: "A bank reconciliation shows a book balance of $5,000, outstanding checks of $800, deposits in transit of $1,200, and a bank service charge of $20. What is the adjusted book balance?",
    correctAnswer: 4980,
    tolerance: 0,
    unit: "$",
    explanation: "Adjusted Book Balance = Book Balance - Bank Service Charge = $5,000 - $20 = $4,980"
  },
  {
    id: 24,
    chapter: 8,
    chapterName: "Internal Control and Cash",
    type: "dropdown",
    points: 3,
    question: "Match each internal control activity:",
    pairs: [
      { term: "Segregation of Duties", definition: "Different people handle different tasks" },
      { term: "Physical Controls", definition: "Safes, locks, cameras" },
      { term: "Documentation", definition: "Written evidence of transactions" }
    ],
    explanation: "These are key components of a strong internal control system."
  },

  // Chapter 9: Accounting for Receivables
  {
    id: 25,
    chapter: 9,
    chapterName: "Accounting for Receivables",
    type: "multiple-choice",
    points: 2,
    question: "What is the allowance method for uncollectible accounts?",
    options: [
      "Writing off bad debts when they occur",
      "Estimating bad debts in advance",
      "Never recognizing bad debts",
      "Collecting all accounts receivable"
    ],
    correctAnswer: 1,
    explanation: "The allowance method involves estimating uncollectible accounts in advance and recording them in the same period as the related sales."
  },
  {
    id: 26,
    chapter: 9,
    chapterName: "Accounting for Receivables",
    type: "calculation",
    points: 3,
    question: "If accounts receivable is $50,000 and the allowance for doubtful accounts is $2,000, what is the net realizable value?",
    correctAnswer: 48000,
    tolerance: 0,
    unit: "$",
    explanation: "Net Realizable Value = Accounts Receivable - Allowance for Doubtful Accounts = $50,000 - $2,000 = $48,000"
  },
  {
    id: 27,
    chapter: 9,
    chapterName: "Accounting for Receivables",
    type: "dropdown",
    points: 3,
    question: "Match the term with its definition:",
    pairs: [
      { term: "Promissory Note", definition: "Written promise to pay" },
      { term: "Accounts Receivable", definition: "Amounts owed by customers" },
      { term: "Bad Debt Expense", definition: "Uncollectible accounts expense" }
    ],
    explanation: "These are key concepts in accounting for receivables."
  },

  // Chapter 10: Plant Assets and Depreciation
  {
    id: 28,
    chapter: 10,
    chapterName: "Plant Assets and Depreciation",
    type: "calculation",
    points: 3,
    question: "A machine costs $50,000, has a salvage value of $5,000, and a useful life of 5 years. Using straight-line depreciation, what is the annual depreciation expense?",
    correctAnswer: 9000,
    tolerance: 0,
    unit: "$",
    explanation: "Annual Depreciation = (Cost - Salvage Value) / Useful Life = ($50,000 - $5,000) / 5 = $9,000"
  },
  {
    id: 29,
    chapter: 10,
    chapterName: "Plant Assets and Depreciation",
    type: "multiple-choice",
    points: 2,
    question: "Which depreciation method results in higher depreciation expense in the early years?",
    options: [
      "Straight-line method",
      "Units-of-production method",
      "Double-declining balance method",
      "All methods are the same"
    ],
    correctAnswer: 2,
    explanation: "The double-declining balance method is an accelerated depreciation method that results in higher depreciation in the early years."
  },
  {
    id: 30,
    chapter: 10,
    chapterName: "Plant Assets and Depreciation",
    type: "dropdown",
    points: 3,
    question: "Match the depreciation method with its characteristic:",
    pairs: [
      { term: "Straight-Line", definition: "Equal expense each period" },
      { term: "Units-of-Production", definition: "Based on usage" },
      { term: "Declining Balance", definition: "Accelerated depreciation" }
    ],
    explanation: "Different depreciation methods serve different purposes based on asset usage patterns."
  },

  // Chapter 11: Current Liabilities and Payroll
  {
    id: 31,
    chapter: 11,
    chapterName: "Current Liabilities and Payroll",
    type: "multiple-choice",
    points: 2,
    question: "What is a current liability?",
    options: [
      "An obligation due within one year",
      "An obligation due in more than one year",
      "An asset that will be converted to cash within one year",
      "Owner's equity"
    ],
    correctAnswer: 0,
    explanation: "Current liabilities are obligations that must be paid within one year or the operating cycle, whichever is longer."
  },
  {
    id: 32,
    chapter: 11,
    chapterName: "Current Liabilities and Payroll",
    type: "calculation",
    points: 3,
    question: "If gross pay is $5,000 and total payroll deductions are $1,200, what is the net pay?",
    correctAnswer: 3800,
    tolerance: 0,
    unit: "$",
    explanation: "Net Pay = Gross Pay - Total Deductions = $5,000 - $1,200 = $3,800"
  },
  {
    id: 33,
    chapter: 11,
    chapterName: "Current Liabilities and Payroll",
    type: "dropdown",
    points: 3,
    question: "Match the liability type:",
    pairs: [
      { term: "Accounts Payable", definition: "Amount owed to suppliers" },
      { term: "Notes Payable", definition: "Formal written promise to pay" },
      { term: "Unearned Revenue", definition: "Cash received before earning" }
    ],
    explanation: "These are common types of current liabilities."
  },

  // Chapter 12: Long-Term Liabilities
  {
    id: 34,
    chapter: 12,
    chapterName: "Long-Term Liabilities",
    type: "multiple-choice",
    points: 2,
    question: "What is a bond?",
    options: [
      "A short-term loan from a bank",
      "A long-term debt security",
      "An ownership interest in a company",
      "A current liability"
    ],
    correctAnswer: 1,
    explanation: "A bond is a long-term debt security issued by a company or government to raise funds."
  },
  {
    id: 35,
    chapter: 12,
    chapterName: "Long-Term Liabilities",
    type: "calculation",
    points: 3,
    question: "A bond with a face value of $100,000 and a stated rate of 8% pays interest annually. What is the annual interest payment?",
    correctAnswer: 8000,
    tolerance: 0,
    unit: "$",
    explanation: "Annual Interest = Face Value × Interest Rate = $100,000 × 8% = $8,000"
  },
  {
    id: 36,
    chapter: 12,
    chapterName: "Long-Term Liabilities",
    type: "dropdown",
    points: 3,
    question: "Match the bond terminology:",
    pairs: [
      { term: "Face Value", definition: "Amount paid at maturity" },
      { term: "Market Rate", definition: "Current interest rate in market" },
      { term: "Premium", definition: "Bond sold above face value" }
    ],
    explanation: "Understanding bond terminology is essential for accounting for long-term debt."
  },

  // Chapter 13: Corporations and Stockholders' Equity
  {
    id: 37,
    chapter: 13,
    chapterName: "Corporations and Stockholders' Equity",
    type: "multiple-choice",
    points: 2,
    question: "What is the main advantage of the corporate form of business?",
    options: [
      "Unlimited liability",
      "Limited liability for owners",
      "Simple formation process",
      "Lower taxes"
    ],
    correctAnswer: 1,
    explanation: "The main advantage of a corporation is limited liability, meaning shareholders are only liable up to their investment amount."
  },
  {
    id: 38,
    chapter: 13,
    chapterName: "Corporations and Stockholders' Equity",
    type: "calculation",
    points: 3,
    question: "A company has 10,000 shares of $5 par value common stock outstanding. If the stock is sold for $8 per share, what is the total paid-in capital in excess of par?",
    correctAnswer: 30000,
    tolerance: 0,
    unit: "$",
    explanation: "Paid-in Capital in Excess of Par = (Selling Price - Par Value) × Number of Shares = ($8 - $5) × 10,000 = $30,000"
  },
  {
    id: 39,
    chapter: 13,
    chapterName: "Corporations and Stockholders' Equity",
    type: "dropdown",
    points: 3,
    question: "Match the stock terminology:",
    pairs: [
      { term: "Common Stock", definition: "Basic ownership shares" },
      { term: "Preferred Stock", definition: "Priority in dividends" },
      { term: "Treasury Stock", definition: "Reacquired company stock" }
    ],
    explanation: "These are key types of stock in corporate accounting."
  },

  // Chapter 14: Cash Flow Statement
  {
    id: 40,
    chapter: 14,
    chapterName: "Cash Flow Statement",
    type: "multiple-choice",
    points: 2,
    question: "Which section of the cash flow statement reports cash received from customers?",
    options: [
      "Financing activities",
      "Investing activities",
      "Operating activities",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Cash received from customers is reported in the operating activities section of the cash flow statement."
  },
  {
    id: 41,
    chapter: 14,
    chapterName: "Cash Flow Statement",
    type: "dropdown",
    points: 3,
    question: "Match the activity type with the transaction:",
    pairs: [
      { term: "Operating Activities", definition: "Cash from sales" },
      { term: "Investing Activities", definition: "Purchase of equipment" },
      { term: "Financing Activities", definition: "Issuing bonds" }
    ],
    explanation: "The cash flow statement classifies cash flows into three categories based on the nature of the activities."
  },
  {
    id: 42,
    chapter: 14,
    chapterName: "Cash Flow Statement",
    type: "multiple-choice",
    points: 2,
    question: "What is the purpose of the cash flow statement?",
    options: [
      "To show profitability",
      "To show cash receipts and payments",
      "To show assets and liabilities",
      "To calculate tax liability"
    ],
    correctAnswer: 1,
    explanation: "The cash flow statement shows the cash receipts and cash payments of a business during a specific period."
  },

  // Additional questions to ensure sufficient coverage
  {
    id: 43,
    chapter: 1,
    chapterName: "Introduction to Financial Accounting",
    type: "multiple-choice",
    points: 2,
    question: "Which financial statement reports a company's financial position at a specific point in time?",
    options: [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow Statement",
      "Statement of Retained Earnings"
    ],
    correctAnswer: 1,
    explanation: "The Balance Sheet (Statement of Financial Position) reports assets, liabilities, and equity at a specific point in time."
  },
  {
    id: 44,
    chapter: 2,
    chapterName: "The Accounting Equation",
    type: "multiple-choice",
    points: 2,
    question: "What is the fundamental accounting equation?",
    options: [
      "Revenue - Expenses = Net Income",
      "Assets = Liabilities + Equity",
      "Debits = Credits",
      "Cash In - Cash Out = Net Cash Flow"
    ],
    correctAnswer: 1,
    explanation: "The fundamental accounting equation is Assets = Liabilities + Equity, which must always be in balance."
  },
  {
    id: 45,
    chapter: 3,
    chapterName: "Recording Business Transactions",
    type: "multiple-choice",
    points: 2,
    question: "What is the purpose of a trial balance?",
    options: [
      "To calculate net income",
      "To verify that total debits equal total credits",
      "To prepare financial statements",
      "To record transactions"
    ],
    correctAnswer: 1,
    explanation: "A trial balance is prepared to verify that the total of all debit balances equals the total of all credit balances."
  },
  {
    id: 46,
    chapter: 4,
    chapterName: "Adjusting Accounts",
    type: "multiple-choice",
    points: 2,
    question: "Prepaid insurance is classified as what type of account?",
    options: [
      "Liability",
      "Expense",
      "Asset",
      "Revenue"
    ],
    correctAnswer: 2,
    explanation: "Prepaid insurance is an asset because it represents a future economic benefit (insurance coverage)."
  },
  {
    id: 47,
    chapter: 5,
    chapterName: "Completing the Accounting Cycle",
    type: "multiple-choice",
    points: 2,
    question: "What is a post-closing trial balance?",
    options: [
      "A trial balance prepared before closing entries",
      "A trial balance that includes only permanent accounts",
      "A trial balance that includes only temporary accounts",
      "The same as an adjusted trial balance"
    ],
    correctAnswer: 1,
    explanation: "A post-closing trial balance contains only permanent (balance sheet) accounts after closing entries have been made."
  },
  {
    id: 48,
    chapter: 6,
    chapterName: "Accounting for Merchandising Operations",
    type: "calculation",
    points: 3,
    question: "If net sales are $200,000 and cost of goods sold is $120,000, what is the gross profit?",
    correctAnswer: 80000,
    tolerance: 0,
    unit: "$",
    explanation: "Gross Profit = Net Sales - Cost of Goods Sold = $200,000 - $120,000 = $80,000"
  },
  {
    id: 49,
    chapter: 7,
    chapterName: "Inventory and Cost of Goods Sold",
    type: "multiple-choice",
    points: 2,
    question: "What does the lower-of-cost-or-market rule require?",
    options: [
      "Inventory always valued at cost",
      "Inventory always valued at market",
      "Inventory valued at lower of cost or market",
      "Inventory valued at higher of cost or market"
    ],
    correctAnswer: 2,
    explanation: "The lower-of-cost-or-market (LCM) rule requires inventory to be valued at the lower of its historical cost or current market value."
  },
  {
    id: 50,
    chapter: 8,
    chapterName: "Internal Control and Cash",
    type: "multiple-choice",
    points: 2,
    question: "What is a petty cash fund?",
    options: [
      "The company's main cash account",
      "A small amount of cash for minor expenditures",
      "Cash held by the bank",
      "Electronic payments"
    ],
    correctAnswer: 1,
    explanation: "A petty cash fund is a small amount of cash kept on hand for minor, incidental expenditures."
  },
  {
    id: 51,
    chapter: 9,
    chapterName: "Accounting for Receivables",
    type: "multiple-choice",
    points: 2,
    question: "What is the maturity value of a note?",
    options: [
      "The principal amount only",
      "The interest amount only",
      "The principal plus interest",
      "The market value of the note"
    ],
    correctAnswer: 2,
    explanation: "The maturity value of a note is the sum of the principal amount plus any accrued interest."
  },
  {
    id: 52,
    chapter: 10,
    chapterName: "Plant Assets and Depreciation",
    type: "multiple-choice",
    points: 2,
    question: "What is book value of a plant asset?",
    options: [
      "The original cost",
      "The market value",
      "Cost minus accumulated depreciation",
      "The salvage value"
    ],
    correctAnswer: 2,
    explanation: "Book value (or carrying value) is the asset's cost minus its accumulated depreciation."
  },
  {
    id: 53,
    chapter: 11,
    chapterName: "Current Liabilities and Payroll",
    type: "multiple-choice",
    points: 2,
    question: "Which of the following is an employer payroll tax?",
    options: [
      "Federal income tax withheld",
      "Employee's portion of FICA",
      "Employer's portion of FICA",
      "Health insurance premiums"
    ],
    correctAnswer: 2,
    explanation: "The employer's portion of FICA (Social Security and Medicare) is an employer payroll tax expense."
  },
  {
    id: 54,
    chapter: 12,
    chapterName: "Long-Term Liabilities",
    type: "multiple-choice",
    points: 2,
    question: "When is a bond sold at a discount?",
    options: [
      "When market rate equals stated rate",
      "When market rate is less than stated rate",
      "When market rate exceeds stated rate",
      "Bonds are never sold at a discount"
    ],
    correctAnswer: 2,
    explanation: "A bond sells at a discount when the market interest rate exceeds the bond's stated rate."
  },
  {
    id: 55,
    chapter: 13,
    chapterName: "Corporations and Stockholders' Equity",
    type: "multiple-choice",
    points: 2,
    question: "What is a stock dividend?",
    options: [
      "A cash payment to stockholders",
      "Distribution of additional shares to stockholders",
      "A liability of the corporation",
      "A reduction in stockholders' equity"
    ],
    correctAnswer: 1,
    explanation: "A stock dividend is a distribution of additional shares to existing stockholders, proportional to their holdings."
  },
  {
    id: 56,
    chapter: 14,
    chapterName: "Cash Flow Statement",
    type: "multiple-choice",
    points: 2,
    question: "Under the indirect method, how is net income adjusted for depreciation?",
    options: [
      "Subtracted from net income",
      "Added to net income",
      "Not adjusted",
      "Multiplied by net income"
    ],
    correctAnswer: 1,
    explanation: "Depreciation is added back to net income because it's a non-cash expense that reduced net income but didn't affect cash."
  }
];

// Ensure all 14 chapters are represented
const CHAPTERS = [
  "Introduction to Financial Accounting",
  "The Accounting Equation",
  "Recording Business Transactions",
  "Adjusting Accounts",
  "Completing the Accounting Cycle",
  "Accounting for Merchandising Operations",
  "Inventory and Cost of Goods Sold",
  "Internal Control and Cash",
  "Accounting for Receivables",
  "Plant Assets and Depreciation",
  "Current Liabilities and Payroll",
  "Long-Term Liabilities",
  "Corporations and Stockholders' Equity",
  "Cash Flow Statement"
];
