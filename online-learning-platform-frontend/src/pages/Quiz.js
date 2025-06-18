// src/pages/Quiz.js
import React, { useState, useEffect } from "react";
import "./Quiz.css"; // Create custom styles here

const quizData = {
  "Web Development": [
    // HTML (5 questions)
    {
      question: "What does HTML stand for?",
      options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Markdown Language", "None of the above"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which tag is used for linking CSS?",
      options: ["<style>", "<link>", "<script>", "<css>"],
      answer: "<link>"
    },
    {
      question: "What is the correct HTML element for the largest heading?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      answer: "<h1>"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "font", "styles", "style"],
      answer: "style"
    },
    {
      question: "Which character is used to indicate an end tag in HTML?",
      options: ["^", "*", "/", "\\"],
      answer: "/"
    },

    // CSS (5 questions)
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      answer: "font-size"
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: [".demo", "*demo", "#demo", "demo"],
      answer: "#demo"
    },
    {
      question: "Which property is used to change the background color?",
      options: ["bgcolor", "color", "background-color", "bg-color"],
      answer: "background-color"
    },
    {
      question: "How do you make each word in a text start with a capital letter?",
      options: ["text-transform: capitalize", "text-style: capital", "transform: uppercase", "font-style: capital"],
      answer: "text-transform: capitalize"
    },

    // JavaScript (5 questions)
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Number", "String", "Boolean", "Float"],
      answer: "Float"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function myFunction()",
        "function:myFunction()",
        "function = myFunction()",
        "create myFunction()"
      ],
      answer: "function myFunction()"
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
      answer: "myFunction()"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["*", "-", "=", "x"],
      answer: "="
    },
    {
      question: "What will 'console.log(typeof 42)' output?",
      options: ["'number'", "'string'", "'integer'", "'float'"],
      answer: "'number'"
    },

    // React (5 questions)
    {
      question: "What is React?",
      options: [
        "A programming language",
        "A JavaScript library for building user interfaces",
        "A database management system",
        "An operating system"
      ],
      answer: "A JavaScript library for building user interfaces"
    },
    {
      question: "What is used to pass data to a component from outside in React?",
      options: ["setState", "render with arguments", "Props", "PropTypes"],
      answer: "Props"
    },
    {
      question: "Which hook is used to manage side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      answer: "useEffect"
    },
    {
      question: "In React, keys are used to:",
      options: [
        "Identify unique elements in lists",
        "Encrypt data",
        "Style components",
        "Handle form submissions"
      ],
      answer: "Identify unique elements in lists"
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Syntax",
        "JavaScript Execute"
      ],
      answer: "JavaScript XML"
    }
  ],

  "Machine Learning": [
    // Basic Concepts (5 questions)
    {
      question: "Which algorithm is used for classification?",
      options: ["Linear Regression", "K-Means", "Decision Tree", "PCA"],
      answer: "Decision Tree"
    },
    {
      question: "What is overfitting?",
      options: [
        "Model fits training data well but fails on test data",
        "Model fails to fit data",
        "Data error",
        "None"
      ],
      answer: "Model fits training data well but fails on test data"
    },
    {
      question: "What is the purpose of a validation set?",
      options: [
        "To train the model",
        "To test the final model",
        "To tune hyperparameters",
        "To clean the data"
      ],
      answer: "To tune hyperparameters"
    },
    {
      question: "Which of these is NOT a supervised learning algorithm?",
      options: ["Random Forest", "SVM", "K-Means", "Logistic Regression"],
      answer: "K-Means"
    },
    {
      question: "What does 'bias' refer to in machine learning?",
      options: [
        "Error from erroneous assumptions",
        "Error from too complex model",
        "Error from noisy data",
        "None of the above"
      ],
      answer: "Error from erroneous assumptions"
    },

    // Algorithms (5 questions)
    {
      question: "Which algorithm uses 'information gain' to split nodes?",
      options: ["Linear Regression", "Decision Tree", "KNN", "SVM"],
      answer: "Decision Tree"
    },
    {
      question: "What is the 'kernel trick' used for in SVM?",
      options: [
        "To handle non-linear decision boundaries",
        "To speed up training",
        "To reduce memory usage",
        "To handle missing data"
      ],
      answer: "To handle non-linear decision boundaries"
    },
    {
      question: "Which algorithm is most affected by the 'curse of dimensionality'?",
      options: ["Decision Tree", "KNN", "Linear Regression", "Naive Bayes"],
      answer: "KNN"
    },
    {
      question: "What is the main advantage of Random Forest over single Decision Tree?",
      options: [
        "Faster training",
        "Less prone to overfitting",
        "Works better with small datasets",
        "Doesn't require hyperparameter tuning"
      ],
      answer: "Less prone to overfitting"
    },
    {
      question: "Which algorithm assumes features are conditionally independent?",
      options: ["SVM", "Random Forest", "Naive Bayes", "Neural Network"],
      answer: "Naive Bayes"
    },

    // Deep Learning (5 questions)
    {
      question: "What is an activation function used for in neural networks?",
      options: [
        "To introduce non-linearity",
        "To speed up training",
        "To reduce memory usage",
        "To initialize weights"
      ],
      answer: "To introduce non-linearity"
    },
    {
      question: "Which activation function is commonly used in output layer for binary classification?",
      options: ["ReLU", "Sigmoid", "Tanh", "Linear"],
      answer: "Sigmoid"
    },
    {
      question: "What is the purpose of dropout in neural networks?",
      options: [
        "To speed up training",
        "To reduce overfitting",
        "To handle imbalanced data",
        "To normalize inputs"
      ],
      answer: "To reduce overfitting"
    },
    {
      question: "Which type of neural network is commonly used for image recognition?",
      options: ["RNN", "CNN", "MLP", "LSTM"],
      answer: "CNN"
    },
    {
      question: "What does backpropagation do?",
      options: [
        "Adjusts weights based on error",
        "Initializes weights randomly",
        "Selects best features",
        "Normalizes inputs"
      ],
      answer: "Adjusts weights based on error"
    },

    // Python for ML (5 questions)
    {
      question: "Which Python library is primarily used for numerical operations in ML?",
      options: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      answer: "NumPy"
    },
    {
      question: "What does 'pd' stand for in Python ML code?",
      options: ["Pandas", "Python Data", "Process Data", "Plot Data"],
      answer: "Pandas"
    },
    {
      question: "Which function is used to split data into train and test sets in scikit-learn?",
      options: [
        "train_test_split",
        "split_data",
        "divide_data",
        "make_train_test"
      ],
      answer: "train_test_split"
    },
    {
      question: "What does the 'fit()' method do in scikit-learn?",
      options: [
        "Predicts on new data",
        "Trains the model",
        "Evaluates the model",
        "Visualizes the data"
      ],
      answer: "Trains the model"
    },
    {
      question: "Which library would you use to create a neural network in Python?",
      options: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
      answer: "TensorFlow"
    }
  ],

  "Cybersecurity": [
    // Basic Concepts (5 questions)
    {
      question: "What does VPN stand for?",
      options: [
        "Virtual Private Network",
        "Visual Private Network",
        "Virtual Public Network",
        "None"
      ],
      answer: "Virtual Private Network"
    },
    {
      question: "Which is a common type of malware?",
      options: ["Trojan", "Firewall", "Antivirus", "Cloud"],
      answer: "Trojan"
    },
    {
      question: "What is the primary purpose of encryption?",
      options: [
        "To speed up data transmission",
        "To protect data confidentiality",
        "To compress data",
        "To authenticate users"
      ],
      answer: "To protect data confidentiality"
    },
    {
      question: "What does 'DoS' stand for in cybersecurity?",
      options: [
        "Data over Signal",
        "Denial of Service",
        "Disk of Security",
        "Digital on System"
      ],
      answer: "Denial of Service"
    },
    {
      question: "Which of these is NOT a cybersecurity best practice?",
      options: [
        "Regular software updates",
        "Using strong passwords",
        "Sharing passwords with trusted colleagues",
        "Two-factor authentication"
      ],
      answer: "Sharing passwords with trusted colleagues"
    },

    // Network Security (5 questions)
    {
      question: "What is the purpose of a firewall?",
      options: [
        "To block all network traffic",
        "To monitor and control incoming/outgoing network traffic",
        "To speed up internet connection",
        "To encrypt data"
      ],
      answer: "To monitor and control incoming/outgoing network traffic"
    },
    {
      question: "Which port is commonly used for HTTPS?",
      options: ["80", "22", "443", "3389"],
      answer: "443"
    },
    {
      question: "What is a 'man-in-the-middle' attack?",
      options: [
        "When an attacker secretly intercepts communication",
        "When a server is overloaded with requests",
        "When malware spreads through a network",
        "When passwords are guessed"
      ],
      answer: "When an attacker secretly intercepts communication"
    },
    {
      question: "Which protocol is used to securely transfer files?",
      options: ["HTTP", "FTP", "SFTP", "SMTP"],
      answer: "SFTP"
    },
    {
      question: "What does SSL/TLS provide?",
      options: [
        "Encrypted communication",
        "Faster data transfer",
        "Data compression",
        "User authentication only"
      ],
      answer: "Encrypted communication"
    },

    // Cryptography (5 questions)
    {
      question: "Which is an asymmetric encryption algorithm?",
      options: ["AES", "RSA", "DES", "RC4"],
      answer: "RSA"
    },
    {
      question: "What is hashing used for?",
      options: [
        "Encrypting data for secure transmission",
        "Creating fixed-size unique representation of data",
        "Compressing data",
        "Authenticating users"
      ],
      answer: "Creating fixed-size unique representation of data"
    },
    {
      question: "Which is NOT a property of a good cryptographic hash function?",
      options: [
        "Deterministic",
        "Fast to compute",
        "Reversible",
        "Small change in input changes output significantly"
      ],
      answer: "Reversible"
    },
    {
      question: "What is the main advantage of public-key cryptography?",
      options: [
        "Faster than symmetric cryptography",
        "Doesn't require secure key exchange",
        "Smaller key sizes",
        "Easier to implement"
      ],
      answer: "Doesn't require secure key exchange"
    },
    {
      question: "What does 'salt' refer to in password security?",
      options: [
        "Random data added to passwords before hashing",
        "Encryption algorithm",
        "Type of hash function",
        "Network security protocol"
      ],
      answer: "Random data added to passwords before hashing"
    },

    // Web Security (5 questions)
    {
      question: "What is SQL injection?",
      options: [
        "Injecting SQL queries through input data",
        "A type of DoS attack",
        "Encrypting database contents",
        "Backing up databases"
      ],
      answer: "Injecting SQL queries through input data"
    },
    {
      question: "Which header helps prevent XSS attacks?",
      options: [
        "Content-Security-Policy",
        "X-Powered-By",
        "Server",
        "Cache-Control"
      ],
      answer: "Content-Security-Policy"
    },
    {
      question: "What is CSRF?",
      options: [
        "Cross-Site Request Forgery",
        "Cross-Site Resource Fetching",
        "Content Security Resource Framework",
        "None of the above"
      ],
      answer: "Cross-Site Request Forgery"
    },
    {
      question: "What is the purpose of CORS?",
      options: [
        "To restrict all cross-origin requests",
        "To allow controlled access to resources from different origins",
        "To encrypt cross-origin communications",
        "To authenticate cross-origin users"
      ],
      answer: "To allow controlled access to resources from different origins"
    },
    {
      question: "Which of these is NOT a method to secure web applications?",
      options: [
        "Input validation",
        "Using HTTPS",
        "Storing passwords in plaintext",
        "Regular updates"
      ],
      answer: "Storing passwords in plaintext"
    }
  ]
};

const Quiz = () => {
  const [topic, setTopic] = useState("Web Development");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(30);
  const [showScore, setShowScore] = useState(false);

  const questions = quizData[topic];

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestion, topic]);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption("");
    setShowScore(false);
    setTimer(30);
  };

  return (
    <div className="quiz-container">
      <h2>🧠 {topic} Quiz</h2>

      <div className="topic-select">
        <label>Select Topic: </label>
        <select onChange={(e) => {
          setTopic(e.target.value);
          handleRestart();
        }} value={topic}>
          {Object.keys(quizData).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {showScore ? (
        <div className="result-box">
          <h3>Your Score: {score} / {questions.length}</h3>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <div className="question-box">
          <div className="timer">⏱️ {timer}s</div>
          <h4>{questions[currentQuestion].question}</h4>
          <ul>
            {questions[currentQuestion].options.map((opt, index) => (
              <li
                key={index}
                className={selectedOption === opt ? "selected" : ""}
                onClick={() => setSelectedOption(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
