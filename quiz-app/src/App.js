// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import SubjectSelection from './components/SubjectSelection';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subjects" element={<SubjectSelection />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route exact path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
