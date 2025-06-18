import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import "./ResourceLibrary.css";

const resources = [
  {
    id: 1,
    title: "C++ Course Notes",
    subject: "Programming",
    author: "University of Wollongong",
    size: "1.2 MB",
    url: "https://documents.uow.edu.au/~akheng/WORKSHOP/C%2B%2B%20Course%20Notes.pdf",
  },
  {
    id: 2,
    title: "Machine Learning Cheat Sheet",
    subject: "AI/ML",
    author: "Soulmachine (GitHub)",
    size: "900 KB",
    url: "https://raw.githubusercontent.com/soulmachine/machine-learning-cheat-sheet/master/machine-learning-cheat-sheet.pdf",
  },
  {
    id: 3,
    title: "Object Oriented Programming Using C++",
    subject: "Programming",
    author: "Dr. Subasish Mohapatra",
    size: "2.5 MB",
    url: "https://www.cet.edu.in/noticefiles/285_OOPS%20lecture%20notes%20Complete.pdf",
  },
  {
    id: 4,
    title: "C++ Tutorial - Tutorialspoint",
    subject: "Programming",
    author: "Tutorialspoint",
    size: "1.8 MB",
    url: "https://www.tutorialspoint.com/cplusplus/cpp_tutorial.pdf",
  },
  {
    id: 5,
    title: "Programming Fundamentals in C++",
    subject: "Programming",
    author: "Stanford University",
    size: "1.1 MB",
    url: "https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1208/lectures/fundamentals/Lecture_2_Programming_Fundamentals_in_C%2B%2B.pdf",
  },
  {
    id: 6,
    title: "Super VIP Cheatsheet: Machine Learning",
    subject: "AI/ML",
    author: "Afshine Amidi and Shervine Amidi",
    size: "1.3 MB",
    url: "https://sgfin.github.io/files/cheatsheets/cs229_2018_cheatsheet.pdf",
  },
  {
    id: 7,
    title: "Azure Machine Learning Algorithm Cheat Sheet",
    subject: "AI/ML",
    author: "Microsoft",
    size: "1.0 MB",
    url: "https://download.microsoft.com/download/3/5/b/35bb997f-a8c7-485d-8c56-19444dafd757/azure-machine-learning-algorithm-cheat-sheet-july-2021.pdf",
  },
  {
    id: 8,
    title: "A Complete Guide to Programming in C++",
    subject: "Programming",
    author: "LMPT",
    size: "3.2 MB",
    url: "https://www.lmpt.univ-tours.fr/~volkov/C%2B%2B.pdf",
  },
  {
    id: 9,
    title: "Introduction to C++: Part 1",
    subject: "Programming",
    author: "Boston University",
    size: "1.4 MB",
    url: "https://www.bu.edu/tech/files/2017/02/Introduction-to-C-Part-1.pdf",
  },
  {
    id: 10,
    title: "Cheat Sheet of Machine Learning and Python",
    subject: "AI/ML",
    author: "RoboticsBiz",
    size: "1.6 MB",
    url: "https://roboticsbiz.com/wp-content/uploads/2020/04/Cheat-Sheet-of-Machine-Learning-and-Python-Cheat-Sheets.pdf",
  },
   {
    "id": 1,
    "title": "HTML Notes for Professionals",
    "subject": "HTML",
    "author": "GoalKicker",
    "size": "1.5 MB",
    "url": "https://books.goalkicker.com/HTMLBook/"
  },
  {
    "id": 2,
    "title": "CSS Notes for Professionals",
    "subject": "CSS",
    "author": "GoalKicker",
    "size": "1.8 MB",
    "url": "https://books.goalkicker.com/CSSBook/"
  },
  {
    "id": 3,
    "title": "JavaScript Notes for Professionals",
    "subject": "JavaScript",
    "author": "GoalKicker",
    "size": "2.3 MB",
    "url": "https://books.goalkicker.com/JavaScriptBook/"
  },
  {
    "id": 4,
    "title": "Python Notes for Professionals",
    "subject": "Python",
    "author": "GoalKicker",
    "size": "3.1 MB",
    "url": "https://books.goalkicker.com/PythonBook/"
  },
  {
    "id": 5,
    "title": "SQL Notes for Professionals",
    "subject": "SQL",
    "author": "GoalKicker",
    "size": "1.7 MB",
    "url": "https://books.goalkicker.com/SQLBook/"
  },
  {
    "id": 6,
    "title": "React Notes for Professionals",
    "subject": "React",
    "author": "GoalKicker",
    "size": "2.0 MB",
    "url": "https://books.goalkicker.com/ReactJSBook/"
  },
  {
    "id": 7,
    "title": "Eloquent JavaScript",
    "subject": "JavaScript",
    "author": "Marijn Haverbeke",
    "size": "4.5 MB",
    "url": "https://eloquentjavascript.net/Eloquent_JavaScript.pdf"
  },
  {
    "id": 8,
    "title": "A Byte of Python",
    "subject": "Python",
    "author": "Swaroop C H",
    "size": "1.2 MB",
    "url": "https://python.swaroopch.com/byte_of_python.pdf"
  },
  {
    "id": 9,
    "title": "Learning SQL",
    "subject": "SQL",
    "author": "Alan Beaulieu",
    "size": "3.8 MB",
    "url": "https://www.sqltutorial.org/wp-content/uploads/2016/04/learning-sql.pdf"
  },
  {
    "id": 10,
    "title": "Learning React",
    "subject": "React",
    "author": "Alex Banks & Eve Porcello",
    "size": "5.2 MB",
    "url": "https://library.kre.dp.ua/Books/2-4%20kurs/%D0%9C%D0%BE%D0%B2%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F/JavaScript/Learning_React_Modern_Patterns_for_Developing_React_Apps_by_Alex.pdf"
  },
  {
    "id": 11,
    "title": "Python for Everybody",
    "subject": "Python",
    "author": "Dr. Charles Russell Severance",
    "size": "2.5 MB",
    "url": "https://www.py4e.com/book.php"
  },
  {
    "id": 12,
    "title": "You Don't Know JS (Book Series)",
    "subject": "JavaScript",
    "author": "Kyle Simpson",
    "size": "Varies",
    "url": "https://github.com/getify/You-Dont-Know-JS"
  },
  {
    "id": 13,
    "title": "Fullstack React",
    "subject": "React",
    "author": "Anthony Accomazzo et al.",
    "size": "6.0 MB",
    "url": "https://demo.smarttrainerlms.com/uploads/0003/trainings/course/45/modules/fullstack-react-book-r30_1510302324482009603.pdf"
  },
  {
    "id": 14,
    "title": "JavaScript: The Good Parts",
    "subject": "JavaScript",
    "author": "Douglas Crockford",
    "size": "1.0 MB",
    "url": "https://www.crockford.com/javascript/javascript_the_good_parts.pdf"
  },
  {
    "id": 15,
    "title": "Automate the Boring Stuff with Python",
    "subject": "Python",
    "author": "Al Sweigart",
    "size": "4.8 MB",
    "url": "https://automatetheboringstuff.com/files/automate-the-boring-stuff.pdf"
  },
  {
    "id": 16,
    "title": "Head First HTML and CSS",
    "subject": "HTML/CSS",
    "author": "Elisabeth Robson & Eric Freeman",
    "size": "3.3 MB",
    "url": "https://www.oreilly.com/library/view/head-first-html/9781449324469/"
  },
  {
    "id": 17,
    "title": "Think Python",
    "subject": "Python",
    "author": "Allen B. Downey",
    "size": "2.0 MB",
    "url": "https://greenteapress.com/wp/think-python-2e/"
  },
  {
    "id": 18,
    "title": "JavaScript Allongé",
    "subject": "JavaScript",
    "author": "Reginald Braithwaite",
    "size": "3.5 MB",
    "url": "https://leanpub.com/javascript-allonge/read"
  },
  {
    "id": 19,
    "title": "The Road to learn React",
    "subject": "React",
    "author": "Robin Wieruch",
    "size": "4.0 MB",
    "url": "https://www.roadtoreact.com/"
  },
  {
    "id": 20,
    "title": "SQL for Web Developers",
    "subject": "SQL",
    "author": "John Paul Mueller",
    "size": "2.9 MB",
    "url": "https://www.wiley.com/en-us/SQL+for+Web+Developers-p-9780470097613"
  }
];

const ResourceLibrary = () => {
  const [filter, setFilter] = useState({ subject: "", author: "" });

  // Dynamically get unique subjects and authors from resource list
  const subjects = [...new Set(resources.map((res) => res.subject))];
  const authors = [...new Set(resources.map((res) => res.author))];

  const filteredResources = resources.filter(
    (res) =>
      (filter.subject === "" || res.subject === filter.subject) &&
      (filter.author === "" || res.author === filter.author)
  );

 return (
    <motion.div
      className="resource-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="title">📚 E-Book / PDF Resource Library</h1>

      <div className="filters">
        <select
          value={filter.subject}
          onChange={(e) => setFilter({ ...filter, subject: e.target.value })}
        >
          <option value="">🎯 Filter by Subject</option>
          {subjects.map((sub, index) => (
            <option key={index} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        <select
          value={filter.author}
          onChange={(e) => setFilter({ ...filter, author: e.target.value })}
        >
          <option value="">👤 Filter by Author</option>
          {authors.map((auth, index) => (
            <option key={index} value={auth}>
              {auth}
            </option>
          ))}
        </select>
      </div>

      <div className="resource-list">
        {filteredResources.map((res) => (
          <div key={res.id} className="resource-card">
            <h2>{res.title}</h2>
            <p>
              <strong>Subject:</strong> {res.subject} <br />
              <strong>Author:</strong> {res.author} <br />
              <strong>Size:</strong> {res.size}
            </p>
            
            <a href={res.url} target="_blank" rel="noopener noreferrer" className="download-btn">
              📥 Download
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResourceLibrary;