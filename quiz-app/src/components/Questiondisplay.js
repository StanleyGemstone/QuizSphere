import React from 'react';

const QuestionDisplay = ({ question, answers }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionDisplay;
