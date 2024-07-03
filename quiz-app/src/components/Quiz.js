// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${subject}`);
        setQuestions(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [subject]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <button onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex + 1)}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;