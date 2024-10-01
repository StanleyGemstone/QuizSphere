import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../api';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    fetchQuestions().then((data) => setQuestions(data));
  }, []);

  return (
    <div>
      {questions.length > 0 && (
        <h2>{questions[currentQuestion].question}</h2>
      )}
    </div>
  );
};