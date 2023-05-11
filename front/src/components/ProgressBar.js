import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const percentComplete = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${percentComplete}%` }}></div>
    </div>
  );
};

export default ProgressBar;