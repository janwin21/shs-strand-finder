const ABM = {
  // STRAND DESCRIPTION
  name: "Accountancy, Business, and Management",
  description:
    "Specialized tracks that high school students can choose to pursue under the K-12 program. Designed to prepare students for college and careers in the fields of business, finance, accounting, entrepreneurship, and management.",
  imagePath: "uploads\\sample\\img10.jpg",

  // SUBJECTS (6 SUBJECTS)
  subjects: [
    // Applied Economics
    {
      name: "Applied Economics",
      description:
        "A subfield of economics that focuses on the practical application of economic theories and principles to real-world issues and problems. It involves the use of economic analysis and tools to understand and address various economic and policy-related challenges.",
      imagePath: "uploads\\sample\\img10.jpg",

      // QUESTIONS
      questions: [
        {
          question: "What is the primary focus of macroeconomics?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Micro-level decision-making by individuals",
              imagePath: null,
              correct: false,
            },
            {
              value: "Study of individual firms and industries",
              imagePath: null,
              correct: false,
            },
            {
              value: "Overall behavior of the economy",
              imagePath: null,
              correct: true,
            },
            {
              value: "International trade patterns",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question: "In economics, what does GDP stand for?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Gross Domestic Profit",
              imagePath: null,
              correct: false,
            },
            {
              value: "General Development Program",
              imagePath: null,
              correct: false,
            },
            {
              value: "Gross Domestic Product",
              imagePath: null,
              correct: true,
            },
            {
              value: "Growth and Distribution Principle",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question: "Which of the following is an example of a regressive tax?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Income tax",
              imagePath: null,
              correct: false,
            },
            {
              value: "Property tax",
              imagePath: null,
              correct: false,
            },
            {
              value: "Sales tax",
              imagePath: null,
              correct: true,
            },
            {
              value: "Corporate tax",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question: "What is the main goal of fiscal policy in economics?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Regulating the money supply",
              imagePath: null,
              correct: false,
            },
            {
              value: "Controlling inflation",
              imagePath: null,
              correct: false,
            },
            {
              value: "Managing government revenue and expenditure",
              imagePath: null,
              correct: true,
            },
            {
              value: "Promoting international trade",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question:
            "Which economic indicator measures the average change in prices paid by consumers for a basket of goods and services?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Inflation rate",
              imagePath: null,
              correct: true,
            },
            {
              value: "GDP growth rate",
              imagePath: null,
              correct: false,
            },
            {
              value: "Unemployment rate",
              imagePath: null,
              correct: false,
            },
            {
              value: "Exchange rate",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question:
            "What term is used in economics to describe the maximum amount that a consumer is willing to pay for a product or service?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Marginal cost",
              imagePath: null,
              correct: false,
            },
            {
              value: "Price floor",
              imagePath: null,
              correct: false,
            },
            {
              value: "Consumer surplus",
              imagePath: null,
              correct: true,
            },
            {
              value: "Elasticity",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question: "In economics, what is the law of demand?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value:
                "As the price of a good increases, the quantity demanded increases.",
              imagePath: null,
              correct: false,
            },
            {
              value:
                "As the price of a good decreases, the quantity demanded decreases",
              imagePath: null,
              correct: false,
            },
            {
              value:
                "As the price of a good increases, the quantity demanded decreases.",
              imagePath: null,
              correct: true,
            },
            {
              value:
                "As the price of a good decreases, the quantity demanded remains constant.",
              imagePath: null,
              correct: false,
            },
          ],
        },
      ],
    },
    // Fundamentals of Accountancy, Business and Management
    {
      name: "Fundamentals of Accountancy, Business and Management",
      description:
        "A set of subjects or courses commonly offered as part of the academic curriculum in the Philippines, particularly in the Senior High School (SHS) program. These courses are designed to provide students with a foundational understanding of key concepts related to accounting, business, and management.",
      imagePath: "uploads\\sample\\img10.jpg",

      // QUESTIONS
      questions: [
        {
          question:
            "What financial statement provides an overview of a company's financial position at a specific point in time?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Income statement",
              imagePath: null,
              correct: false,
            },
            {
              value: "Cash flow statement",
              imagePath: null,
              correct: false,
            },
            {
              value: " Balance sheet",
              imagePath: null,
              correct: true,
            },
            {
              value: "Statement of retained earnings",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question:
            "What does ROI stand for in the context of business and finance?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Return on Investment",
              imagePath: null,
              correct: true,
            },
            {
              value: "Revenue of Income",
              imagePath: null,
              correct: false,
            },
            {
              value: "Rate of Inflation",
              imagePath: null,
              correct: false,
            },
            {
              value: "Risk of Investment",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question:
            "Which of the following is an example of a fixed cost for a business?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Employee wages",
              imagePath: null,
              correct: false,
            },
            {
              value: "Rent for office space",
              imagePath: null,
              correct: true,
            },
            {
              value: "Utility bills",
              imagePath: null,
              correct: false,
            },
            {
              value: "Cost of raw materials",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question: "What is the primary purpose of a business plan?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Record daily transactions",
              imagePath: null,
              correct: false,
            },
            {
              value: "Secure a bank loan",
              imagePath: null,
              correct: false,
            },
            {
              value: "Outline the company's goals and strategies",
              imagePath: null,
              correct: true,
            },
            {
              value: "Pay taxes",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question:
            "In accounting, which financial statement shows a company's revenues and expenses over a specific period?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Balance sheet",
              imagePath: null,
              correct: false,
            },
            {
              value: "Income statement",
              imagePath: null,
              correct: true,
            },
            {
              value: "Statement of cash flows",
              imagePath: null,
              correct: false,
            },
            {
              value: "Statement of changes in equity",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question: "What does SWOT analysis stand for in business management?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Strengths, Weaknesses, Opportunities, Threats",
              imagePath: null,
              correct: true,
            },
            {
              value: "Sales, Workforce, Operations, Trends",
              imagePath: null,
              correct: false,
            },
            {
              value: "Shareholders, Wealth, Organizational Tactic",
              imagePath: null,
              correct: false,
            },
            {
              value: "Service, Waste, Orders, Taxes",
              imagePath: null,
              correct: false,
            },
          ],
        },
        {
          question:
            "What is the main function of human resource management in a business?",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "Marketing and advertising",
              imagePath: null,
              correct: false,
            },
            {
              value: "Product development",
              imagePath: null,
              correct: false,
            },
            {
              value: "Recruitment, training, and employee management",
              imagePath: null,
              correct: true,
            },
            {
              value: "Financial analysis and planning",
              imagePath: null,
              correct: false,
            },
          ],
        },
      ],
    },
    // Business Math
    {
      name: "Business Math",
      description:
        "A specialized branch of mathematics that focuses on mathematical concepts and techniques that are commonly used in various business and financial contexts. This field of mathematics is specifically tailored to meet the quantitative needs of businesses, organizations, and individuals involved in commerce, finance, and economics.",
      imagePath: "uploads\\sample\\img10.jpg",

      // QUESTIONS
      questions: [
        {
          question: "",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "",
              imagePath: null,
              correct: false,
            },
          ],
        },
      ],
    },
    // Business Finance
    {
      name: "Business Finance",
      description:
        "A specialized area of finance that focuses on the financial management and decision-making aspects of businesses and organizations. It deals with the acquisition, allocation, and management of financial resources to achieve the goals and objectives of a business.",
      imagePath: "uploads\\sample\\img10.jpg",

      // QUESTIONS
      questions: [
        {
          question: "",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "",
              imagePath: null,
              correct: false,
            },
          ],
        },
      ],
    },
    // Organization and Management
    {
      name: "Organization and Management",
      description:
        "A field of study and practice that focuses on understanding, designing, and effectively running organizations, including businesses, government agencies, non-profit organizations, and various institutions. It involves the planning, coordination, and supervision of resources, processes, and people to achieve the goals and objectives of the organization.",
      imagePath: "uploads\\sample\\img10.jpg",

      // QUESTIONS
      questions: [
        {
          question: "",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "",
              imagePath: null,
              correct: false,
            },
          ],
        },
      ],
    },
    // Principles of Marketing
    {
      name: "Principles of Marketing",
      description:
        "A foundational course or subject in the field of marketing. It provides an introduction to the fundamental concepts, theories, and practices that underlie the discipline of marketing.",
      imagePath: "uploads\\sample\\img10.jpg",

      // QUESTIONS
      questions: [
        {
          question: "",
          questionImagePath: null,

          // ANSWER KEYS
          answerKeys: [
            {
              value: "",
              imagePath: null,
              correct: false,
            },
          ],
        },
      ],
    },
  ],
};
