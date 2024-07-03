// src/components/SubjectSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  { name: 'Math', id: 19 },
  { name: 'Science', id: 17 },
  { name: 'History', id: 23 },
  // Add more subjects
];

const SubjectSelection = () => {
  const navigate = useNavigate();

  const handleSubjectSelect = (subject) => {
    navigate(`/quiz/${subject.id}`);
  };

  return (
    <div>
      <h2>Select a Subject</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id} onClick={() => handleSubjectSelect(subject)}>
            {subject.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectSelection;