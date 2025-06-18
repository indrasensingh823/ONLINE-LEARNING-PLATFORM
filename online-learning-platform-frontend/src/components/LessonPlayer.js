import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './App.css';
const LessonPlayer = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/lessons`)
      .then(res => {
        const found = res.data.find(l => l._id === id);
        setLesson(found);
      });
  }, [id]);

  if (!lesson) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{lesson.title}</h2>
      <video
        width="800"
        height="450"
        controls
        src={`http://localhost:5000${lesson.videoUrl}`}
      />
      <p>{lesson.description}</p>
      <Link to={`/quiz/${lesson._id}`} style={{ display: 'inline-block', marginTop: 20 }}>
        Take Quiz
      </Link>
    </div>
  );
};

export default LessonPlayer;
