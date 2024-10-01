// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase.js";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import SubjectSelection from './components/SubjectSelection';
import Quiz from './components/Quiz';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navigation user={user} />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subjects" element={<SubjectSelection />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

