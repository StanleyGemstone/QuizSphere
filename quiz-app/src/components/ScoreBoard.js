import React from 'react';

const ScoreBoard = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Score: {score}/{totalQuestions}</h2>
    </div>
  );
};

export default ScoreBoard;