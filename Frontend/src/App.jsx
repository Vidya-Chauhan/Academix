import React, { useState, useEffect, useMemo } from 'react';
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./Libcomponents/Signup";
import StudentDashboard from './Libcomponents/StudentDashboard'; 
import Login from "./Libcomponents/Login";
import Home from "./pages/Home";
import About from "./pages/About";  
import Contact from "./pages/Contacts";
import Help from "./pages/Help";
import AdminDashboard from "./Libcomponents/AdminDashboard";
import SearchBooks from "./Libcomponents/SearchBooks";
import StudentProfile from "./Libcomponents/StudentProfile";
import CheckDues from './Libcomponents/CheckDues';
import Books from './Libcomponents/Books';

import BookMarket from './Sections/BookMarket';
import Library from './Sections/Library';
import Notes from './Sections/Notes';
import Calendar from './Sections/Calendar';
import LostAndFound from './Sections/LostAndFound';
import StudentBlog from './Sections/StudentBlog';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  // On initial load, read from localStorage once
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");

    if (token && storedEmail) {
      setIsAuthenticated(true);
      setEmail(storedEmail);
    }

    setLoading(false);
  }, []);

  // Use useMemo to avoid recalculating isAdmin every render
  const isAdmin = useMemo(() => email.startsWith("librarian"), [email]);

  const handleLogin = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setIsAuthenticated(true);
    setEmail(email);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setEmail("");
    window.location.href = "/login";
  };

  // Prevent routing until auth status is loaded
  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/help" element={<Help />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/BookMarket" element={<BookMarket />} />
        <Route path="/library" element={<Library />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/lostfound" element={<LostAndFound />} />
        <Route path="/student-blog" element={<StudentBlog />} />

      {/* Protected Routes */}
      {!isAuthenticated ? (
        <>
          <Route path="/student-dashboard/*" element={<Navigate to="/login" />} />
          <Route path="/admin-dashboard/*" element={<Navigate to="/login" />} />
        </>
      ) : isAdmin ? (
        <Route path="/admin-dashboard/*" element={<AdminDashboard onLogout={handleLogout} />}>
          <Route path="books" element={<Books />} />
          <Route path="*" element={<Navigate to="books" />} />
        </Route>
      ) : (
        <>
          <Route path="/student-dashboard/*" element={<StudentDashboard onLogout={handleLogout} />}>
            <Route path="search-books" element={<SearchBooks />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="dues" element={<CheckDues />} />
            <Route path="books" element={<Books />} />
            <Route path="*" element={<Navigate to="search-books" />} />
          </Route>
          <Route path="*" element={<Navigate to="/student-dashboard" />} />
        
      </>
    )}
  </Routes>
);
}

export default App;
