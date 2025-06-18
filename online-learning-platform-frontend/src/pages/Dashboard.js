import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import Quiz from "../components/Quiz";
import "../App.css";
import Certificate from './Certificate';  // current folder



const videos = [
  {
    title: "HTML Full Course",
    url: "https://www.youtube.com/embed/pQN-pnXPaVg",
    desc: "Learn the basics of HTML in this crash course.",
    category: "HTML",
  },
  {
    title: "CSS Full Course",
    url: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    desc: "Master CSS for web design and layout.",
    category: "CSS",
  },
  {
    title: "JavaScript Tutorial",
    url: "https://www.youtube.com/embed/hdI2bqOjy3c",
    desc: "Understand core JavaScript concepts.",
    category: "JavaScript",
  },
  {
    title: "Responsive Web Design",
    url: "https://www.youtube.com/embed/srvUrASNj0s",
    desc: "Create websites that look great on all devices.",
    category: "CSS",
  },
  {
    title: "React JS Basics",
    url: "https://www.youtube.com/embed/bMknfKXIFA8",
    desc: "Start building apps using React.",
    category: "React",
  },
  {
    title: "Node.js Crash Course",
    url: "https://www.youtube.com/embed/fBNz5xF-Kx4",
    desc: "Introduction to server-side JavaScript with Node.",
    category: "Node",
  },
  {
    title: "MongoDB Basics",
    url: "https://www.youtube.com/embed/WwwpKjjRHa0",
    desc: "Get started with MongoDB and NoSQL.",
    category: "Database",
  },
  {
    title: "Git & GitHub",
    url: "https://www.youtube.com/embed/RGOj5yH7evk",
    desc: "Version control your code with Git & GitHub.",
    category: "Tools",
  },
  {
    title: "Python for Beginners",
    url: "https://www.youtube.com/embed/kqtD5dpn9C8",
    desc: "Learn Python programming from scratch.",
    category: "Python",
  },
  {
    title: "REST API Tutorial",
    url: "https://www.youtube.com/embed/qfPUMV9J5yw",
    desc: "Learn how to build and use REST APIs.",
    category: "Backend",
  },

    {
    "title": "CS50x 2024 – Harvard’s Intro to Computer Science",
    "url": "https://www.youtube.com/embed/5gdEezb1pYY",
    "desc": "Harvard's CS50 course full introduction lecture.",
    "category": "Computer Science"
  },
  {
    "title": "HTML Full Course - Build a Website Tutorial",
    "url": "https://www.youtube.com/embed/pQN-pnXPaVg",
    "desc": "Complete HTML tutorial for beginners.",
    "category": "HTML"
  },
  {
    "title": "CSS Full Course - For Beginners",
    "url": "https://www.youtube.com/embed/OXGznpKZ_sA",
    "desc": "Learn CSS from scratch to advanced level.",
    "category": "CSS"
  },
  {
    "title": "JavaScript Full Course for Beginners",
    "url": "https://www.youtube.com/embed/SBmSRK3feww",
    "desc": "Complete JavaScript tutorial with projects.",
    "category": "JavaScript"
  },
  {
    "title": "Python Full Course - Learn Python in 12 Hours",
    "url": "https://www.youtube.com/embed/rfscVS0vtbw",
    "desc": "Beginner to advanced Python course.",
    "category": "Python"
  },
  {
    "title": "Learn React In 1 Hour",
    "url": "https://www.youtube.com/embed/SqcY0GlETPk",
    "desc": "Quick guide to React.js for beginners.",
    "category": "React"
  },
  {
    "title": "Node.js Crash Course",
    "url": "https://www.youtube.com/embed/fBNz5xF-Kx4",
    "desc": "Introduction to Node.js with hands-on coding.",
    "category": "Node.js"
  },
  {
    "title": "SQL Tutorial - Full Database Course for Beginners",
    "url": "https://www.youtube.com/embed/HXV3zeQKqGY",
    "desc": "Learn SQL with MySQL step by step.",
    "category": "Database"
  },
  {
    "title": "Git and GitHub for Beginners",
    "url": "https://www.youtube.com/embed/RGOj5yH7evk",
    "desc": "Complete Git and GitHub tutorial.",
    "category": "Tools"
  },
  {
    "title": "Bootstrap 5 Full Course",
    "url": "https://www.youtube.com/embed/4sosXZsdy-s",
    "desc": "Design beautiful websites with Bootstrap 5.",
    "category": "CSS"
  },
  {
    "title": "C Programming Language Tutorial",
    "url": "https://www.youtube.com/embed/ZSPZob_1TOk",
    "desc": "Full C programming course for beginners.",
    "category": "C"
  },
  {
    "title": "C++ Full Course",
    "url": "https://www.youtube.com/embed/e7sAf4SbS_g",
    "desc": "Complete C++ programming course.",
    "category": "C++"
  },
  {
    "title": "Java Full Course for Beginners",
    "url": "https://www.youtube.com/embed/UmnCZ7-9yDY",
    "desc": "Java programming from beginner to expert.",
    "category": "Java"
  },
  {
    "title": "PHP Full Course for Beginners",
    "url": "https://www.youtube.com/embed/OK_JCtrrv-c",
    "desc": "Learn PHP and build dynamic websites.",
    "category": "PHP"
  },
  {
    "title": "Learn TypeScript in 50 Minutes",
    "url": "https://www.youtube.com/embed/BwuLxPH8IDs",
    "desc": "Beginner's guide to TypeScript.",
    "category": "TypeScript"
  },
  {
    "title": "Learn MongoDB in 50 Minutes",
    "url": "https://www.youtube.com/embed/Of1CzBe0LzY",
    "desc": "MongoDB introduction and how to use it.",
    "category": "Database"
  },
  {
    "title": "Linux Command Line Full Course",
    "url": "https://www.youtube.com/embed/ZtqBQ68cfJc",
    "desc": "Master Linux commands and terminal usage.",
    "category": "Tools"
  },
  {
    "title": "Machine Learning Tutorial for Beginners",
    "url": "https://www.youtube.com/embed/Gv9_4yMHFhI",
    "desc": "Andrew Ng's ML crash course summary.",
    "category": "Machine Learning"
  },
  {
    "title": "Artificial Intelligence in 5 Minutes",
    "url": "https://www.youtube.com/embed/2ePf9rue1Ao",
    "desc": "Quick explanation of AI concepts.",
    "category": "Artificial Intelligence"
  },
  {
    "title": "Cyber Security Full Course",
    "url": "https://www.youtube.com/embed/inWWhr5tnEA",
    "desc": "Complete guide to Cyber Security.",
    "category": "Cybersecurity"
  },
  {
    "title": "Web Development Full Course",
    "url": "https://www.youtube.com/embed/zJSY8tbf_ys",
    "desc": "Complete guide to becoming a web developer.",
    "category": "Web Development"
  },
  {
    "title": "DevOps Full Course for Beginners",
    "url": "https://www.youtube.com/embed/0yWAtQ6wYNM",
    "desc": "Learn the basics of DevOps.",
    "category": "DevOps"
  },
  {
    "title": "Data Structures and Algorithms",
    "url": "https://www.youtube.com/embed/RBSGKlAvoiM",
    "desc": "Introduction to data structures and algorithms.",
    "category": "DSA"
  },
  {
    "title": "Data Science Full Course",
    "url": "https://www.youtube.com/embed/ua-CiDNNj30",
    "desc": "Complete Data Science course for beginners.",
    "category": "Data Science"
  },
  {
    "title": "Deep Learning Full Course",
    "url": "https://www.youtube.com/embed/aircAruvnKk",
    "desc": "Neural networks and deep learning basics.",
    "category": "Artificial Intelligence"
  },
  {
    "title": "Natural Language Processing (NLP) Tutorial",
    "url": "https://www.youtube.com/embed/8Mpc9ukltVA",
    "desc": "NLP crash course for beginners.",
    "category": "Artificial Intelligence"
  },
  {
    "title": "Computer Vision Tutorial",
    "url": "https://www.youtube.com/embed/YRhxdVk_sIs",
    "desc": "Introduction to computer vision with OpenCV.",
    "category": "Artificial Intelligence"
  },
  {
    "title": "Blockchain Full Course",
    "url": "https://www.youtube.com/embed/SSo_EIwHSd4",
    "desc": "Learn the fundamentals of blockchain.",
    "category": "Blockchain"
  },
  {
    "title": "Internet of Things (IoT) Full Course",
    "url": "https://www.youtube.com/embed/PLCQFjXwWpY",
    "desc": "IoT basics and applications.",
    "category": "IoT"
  },
  {
    "title": "Augmented Reality Tutorial",
    "url": "https://www.youtube.com/embed/8BqXsRJAnG8",
    "desc": "Build an AR app using Unity.",
    "category": "Augmented Reality"
  },
  {
    "title": "Virtual Reality Development Basics",
    "url": "https://www.youtube.com/embed/-g5F2k5twE4",
    "desc": "Learn the basics of VR development.",
    "category": "Virtual Reality"
  },
  {
    "title": "Android Development Full Course",
    "url": "https://www.youtube.com/embed/fis26HvvDII",
    "desc": "Master Android development using Kotlin.",
    "category": "Mobile Development"
  },
  {
    "title": "iOS App Development with Swift",
    "url": "https://www.youtube.com/embed/FcsY1YPBwzQ",
    "desc": "iOS app development crash course.",
    "category": "Mobile Development"
  },
  {
    "title": "Kotlin for Beginners",
    "url": "https://www.youtube.com/embed/F9UC9DY-vIU",
    "desc": "Kotlin full course for Android development.",
    "category": "Kotlin"
  },
  {
    "title": "Swift Programming Tutorial",
    "url": "https://www.youtube.com/embed/comQ1-x2a1Q",
    "desc": "Learn Swift for iOS app development.",
    "category": "Swift"
  },
  {
    "title": "Ruby Programming Tutorial",
    "url": "https://www.youtube.com/embed/t_ispmWmdjY",
    "desc": "Learn the basics of Ruby language.",
    "category": "Ruby"
  },
  {
    "title": "UI/UX Design Tutorial for Beginners",
    "url": "https://www.youtube.com/embed/_QJkzMXF9lM",
    "desc": "Learn UI/UX design principles.",
    "category": "Design"
  },
  {
    "title": "Data Analysis with Python",
    "url": "https://www.youtube.com/embed/r-uOLxNrNk8",
    "desc": "Use Python for data analysis and visualization.",
    "category": "Data Science"
  },
  {
    "title": "Portfolio Website Using HTML, CSS & JS",
    "url": "https://www.youtube.com/embed/gYzHS-n2gqU",
    "desc": "Create a responsive portfolio website.",
    "category": "Web Development"
  },

   {
    "title": "Operating System Full Course",
    "url": "https://www.youtube.com/embed/Gggu2MiJ--g",
    "desc": "Complete OS tutorial for beginners and advanced students.",
    "category": "Operating System"
  },
  {
    "title": "Computer Networks Full Course",
    "url": "https://www.youtube.com/embed/IPvYjXCsTg8",
    "desc": "Computer networks full course with easy explanations.",
    "category": "Computer Networks"
  },
  {
    "title": "DBMS Full Course",
    "url": "https://www.youtube.com/embed/TYo_CUnIWP8",
    "desc": "Database Management System complete lecture series.",
    "category": "DBMS"
  }
];

const Dashboard = () => {
  const [search, setSearch] = useState("");
   const [videosWatched, setVideosWatched] = useState(10); // Example
  const [quizzesPassed, setQuizzesPassed] = useState(10); // Example
  const [username, setUsername] = useState("Indrasen Singh");

  const showCertificate = videosWatched >= 10 && quizzesPassed >= 10;

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Your Learning Dashboard</h1>
      <input
        type="text"
        placeholder="Search videos..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="video-grid">
        {filteredVideos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
              frameBorder="0"
            ></iframe>
            <h3>{video.title}</h3>
            <p>{video.desc}</p>
          </div>
        ))}
      </div>

      <Quiz />

      {showCertificate && (
        <div className="certificate-section">
          <Certificate username={username} />
        </div>
      )}
    </div>

   
  );

  
};

export default Dashboard;

