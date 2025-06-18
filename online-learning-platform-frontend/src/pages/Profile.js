import React, { useState } from "react";
import "./Profile.css";
import { FaEdit, FaUpload } from "react-icons/fa";

const Profile = () => {
  const [name, setName] = useState("Indrasen Singh");
  const [email, setEmail] = useState("indrasen@example.com");
  const [profilePic, setProfilePic] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const enrolledCourses = [
    "Web Development",
    "Machine Learning",
    "Cybersecurity",
    "UI/UX Design",
  ];

  const achievements = ["🏅 1st Rank - ML Quiz", "💯 Full Stack Completion", "⭐ Star Student - April"];

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div className="profile-container">
      <h2>🎓 Student Profile</h2>

      <div className="profile-card">
        <div className="profile-pic">
          <img
            src={
              profilePic ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
          />
          <label className="upload-btn">
            <FaUpload /> Upload
            <input type="file" accept="image/*" onChange={handleProfilePicUpload} hidden />
          </label>
        </div>

        <div className="profile-info">
          <p>
            <strong>Name:</strong>{" "}
            {editMode ? (
              <input value={name} onChange={(e) => setName(e.target.value)} />
            ) : (
              name
            )}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {editMode ? (
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              email
            )}
          </p>
          <button onClick={() => setEditMode(!editMode)} className="edit-btn">
            <FaEdit /> {editMode ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="profile-section">
        <h3>📚 Enrolled Courses</h3>
        <ul>
          {enrolledCourses.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h3>🏆 Achievements</h3>
        <ul>
          {achievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
