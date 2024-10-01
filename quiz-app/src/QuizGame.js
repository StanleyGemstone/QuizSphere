import React, { useState, useEffect } from 'react';
import QuestionDisplay from './components/Questiondisplay';
import ScoreBoard from './components/ScoreBoard';
import Timer from './components/Timer';
import Leaderboard from './components/LeaderBoard';
import AnswerOptions from './components/AnswerOptions';
import { fetchQuestions } from './api';

function QuizGame() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [leaders, setLeaders] = useState([]);
    const [time, setTime] = useState(60);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchQuestions().then((data) => {
        setQuestions(data);
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!questions || !questions.length || currentQuestion >= questions.length) {
      return <div>No questions available</div>;
    }
  
    const handleAnswerClick = (answer) => {
      // Check if answer is correct
      // Update score
    };
  
    return (
      <div>
        <QuestionDisplay
          question={questions[currentQuestion].question}
          answers={questions[currentQuestion].answers}
        />
        <ScoreBoard score={score} totalQuestions={questions.length} />
        <Timer timeLimit={time} />
        <AnswerOptions
          answers={questions[currentQuestion].answers}
          handleAnswerClick={handleAnswerClick}
        />
        <Leaderboard leaders={leaders} />
      </div>
    );
  }
  
  export default QuizGame;  