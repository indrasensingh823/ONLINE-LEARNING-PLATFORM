import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AuthForm from "./components/AuthForm"; 
import ResourceLibrary from "./pages/ResourceLibrary";
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';

import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<ResourceLibrary />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      <Footer />

      {/* ✅ Toast container to show popup messages */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} pauseOnHover={true} theme="colored" />
    </Router>
  );
}

export default App;
