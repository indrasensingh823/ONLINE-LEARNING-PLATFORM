import React from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "../App.css"; // already included styles

const Home = () => {

  const handleEnroll = (courseName) => {
  toast.success(`🎉 You have successfully enrolled in ${courseName}!`);
}; 

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Learnify</h1>
          <p>Empowering you with quality education, anytime, anywhere.</p>
          <Link to="/register">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Video Lessons</h3>
            <p>High-quality tutorials curated by experts in every subject.</p>
          </div>
          <div className="card">
            <h3>Interactive Quizzes</h3>
            <p>Practice what you learn with fun and engaging quizzes.</p>
          </div>
          <div className="card">
            <h3>Progress Dashboard</h3>
            <p>Track your learning journey and stay motivated.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about container">
        <h2>Why Choose Us?</h2>
        <p>
          Our platform is designed for students, by educators. Learnify ensures you get the best content,
          with an intuitive design, easy access, and results-driven outcomes.
        </p>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h3>10K+</h3>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-card">
          <h3>500+</h3>
          <p>Courses</p>
        </div>
        <div className="stat-card">
          <h3>200+</h3>
          <p>Quizzes Completed</p>
        </div>
      </section>

      {/* Trending Courses Section */}
      <section className="trending-courses">
  <h2>🔥 Trending Courses</h2>
  <div className="course-cards">

    <div className="course-card">
      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg" alt="Full Stack Development" />
      <h3>Full Stack Development</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("Full Stack Development")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://ipcisco.com/wp-content/uploads/2021/03/python-programming-course-ipcisco.jpg" alt="Python Programming" />
      <h3>Python Programming</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("Python Programming")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://miro.medium.com/v2/resize:fit:1200/1*zT6FhDi6hB0uH6fO8ipmIw.png" alt="UI/UX Design" />
      <h3>UI/UX Design</h3>
      <p>⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("UI/UX Design")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=531" alt="Machine Learning" />
      <h3>Machine Learning</h3>
      <p>⭐⭐⭐⭐⭐</p>
       <button onClick={() => handleEnroll("Machine Learning")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://www.tonynguyen.me/assets/javascript-course.webp" alt="JavaScript Mastery" />
      <h3>JavaScript Mastery</h3>
      <p>⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("JavaScript Mastery")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://ehuwt7zd2je.exactdn.com/wp-content/uploads/2023/12/data-science-course-benefits.jpg" alt="Data Science" />
      <h3>Data Science</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("Data Science")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://wptavern.com/wp-content/uploads/2016/09/reactjs.png" alt="React JS" />
      <h3>React JS</h3>
      <p>⭐⭐⭐⭐</p>
     <button onClick={() => handleEnroll("React JS")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://i.ytimg.com/vi/A74TOX803D0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAc9IisEOHGpIEg4ElaExywPtc1pw" alt="Java Programming" />
      <h3>Java Programming</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("Java Programming")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/18195/course_18195_image.jpg" alt="SQL Database" />
      <h3>SQL Database</h3>
      <p>⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("SQL Database")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://thecyberexpress.com/wp-content/uploads/2023/10/MicrosoftTeams-image-75.png" alt="Cybersecurity" />
      <h3>Cybersecurity</h3>
      <p>⭐⭐⭐⭐⭐</p>
     <button onClick={() => handleEnroll("Cybersecurity")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://courses.iid.org.in/public//uploads/media_manager/619.jpg" alt="Cloud Computing" />
      <h3>Cloud Computing</h3>
      <p>⭐⭐⭐⭐</p>
      <button onClick={() => handleEnroll("Cloud Computing")}>Enroll Now</button>
    </div>

    <div className="course-card">
      <img src="https://i.ytimg.com/vi/j5Zsa_eOXeY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrxUQTP5D_SAckco8ocODKViuiRw" alt="DevOps Engineering" />
      <h3>DevOps Engineering</h3>
      <p>⭐⭐⭐⭐⭐</p>
     <button onClick={() => handleEnroll("DevOps Engineering")}>Enroll Now</button>
    </div>


  </div>
</section>


      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <p>1️⃣ Sign Up</p>
          </div>
          <div className="step">
            <p>2️⃣ Choose Course</p>
          </div>
          <div className="step">
            <p>3️⃣ Start Learning</p>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="webinars">
        <h2>Upcoming Webinars</h2>
        <div className="webinar-card">
          <h3>AI in Education</h3>
          <p>Date: June 25, 2025 | Time: 4:00 PM</p>
          <button>Join Now</button>
        </div>
      </section>

      <section className="testimonial-section">
         <h2>What Our Students Say</h2>
       <div className="testimonials">
         <div className="testimonial-card">
           <p>"This platform helped me land my first job in web development!"</p>
           <h4>👨‍💻 Rajeev Kumar</h4>
           <span>Full Stack Developer</span>
         </div>
         <div className="testimonial-card">
           <p>"Courses are very structured and easy to follow. Highly recommended!"</p>
           <h4>👩‍🎓 Aditi Verma</h4>
            <span>Data Scientist</span>
          </div>
          <div className="testimonial-card">
              <p>"I loved the interactive quizzes and smooth UI. Great learning experience."</p>
              <h4>🧑‍💼 Arjun Singh</h4>
              <span>UI/UX Designer</span>
          </div>
          <div className="testimonial-card">
              <p>"Amazing resources and friendly support team. Loved the experience!"</p>
              <h4>👩‍💼 Nisha Pandey</h4>
              <span>Cybersecurity Analyst</span>
          </div>

       </div>
     </section>

     {/* 🔸 Blog/Articles Section */}
<section className="home-blog-section">
  <h2 className="section-title">📰 Latest Articles & Learning Blogs</h2>
  <div className="blogs-container">
    {[
      {
        title: "Why Learn Web Development in 2025?",
        author: "Indrasen Singh",
        date: "June 1, 2025",
        content: "Web development continues to be a top skill in 2025 with the rise of Web3, AI-driven frontends, and more.",
      },
      {
        title: "Top 10 Python Tricks Every Developer Should Know",
        author: "Sana Rizvi",
        date: "May 28, 2025",
        content: "These lesser-known Python features can boost your productivity and make your code more elegant.",
      },
      {
        title: "Mastering React in Just 30 Days",
        author: "Akash Verma",
        date: "May 15, 2025",
        content: "Here’s a full roadmap with resources to learn React fast and efficiently.",
      },
    ].map((blog, index) => (
      <div className="blog-card" key={index}>
        <h3>{blog.title}</h3>
        <p className="meta">By {blog.author} | {blog.date}</p>
        <p className="content-preview">{blog.content}</p>
        <div className="blog-actions">
          <button onClick={() => alert("Liked! ❤️")}>👍 Like</button>
          <button onClick={() => alert("Shared! 🔗")}>🔗 Share</button>
          <button onClick={() => alert("Comment feature coming soon!")}>💬 Comment</button>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Daily Quote Section */}
      <section className="daily-quote">
        <div className="quote">
          <p>“Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela</p>
        </div>
      </section>

    </>
  );
};

export default Home;
