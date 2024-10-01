// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.js';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();
    navigate('/signin');
  };

  return (
    <div>
      <h1>Welcome to the QuizSphere</h1>
      <button onClick={() => navigate('/subjects')}>Select Subject</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;