import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import "../css/Quiz.css";

const questions = [
  {
    id: 1,
    text: 'How often do you experience intense feelings of sadness or hopelessness?',
    answers: [
      { text: 'I experience these feelings frequently, and they are intense enough to disrupt my daily life.', points: 1 },
      { text: 'I experience these feelings occasionally, and they are bothersome but not disruptive to my daily life.', points: 2 },
      { text: 'I rarely experience these feelings, and when I do, they are not severe enough to impact my daily life', points: 3 }
    ]
  },
  {
    id: 2,
    text: 'How frequently do you feel worried or anxious?',
    answers: [
      { text: 'I feel worried or anxious most of the time, and it interferes with my daily life.', points: 1 },
      { text: 'I feel worried or anxious sometimes, and it can be distressing but not always disruptive to my daily life.', points: 2 },
      { text: 'I rarely feel worried or anxious, and when I do, it is not severe enough to impact my daily life.', points: 3 }
    ]
  },
  {
    id: 3,
    text: 'Do you have difficulty sleeping or experience changes in your sleep pattern?',
    answers: [
      { text: 'I have significant trouble sleeping most nights, and it impacts my daily functioning.', points: 1 },
      { text: 'I sometimes have difficulty sleeping, and it can be disruptive to my daily life.', points: 2 },
      { text: ' I rarely have trouble sleeping, and it does not impact my daily life.', points: 3 }
    ]
  },
  {
    id: 4,
    text: 'Do you struggle to concentrate or focus on tasks?',
    answers: [
      { text: 'I have significant difficulty concentrating or focusing most of the time, and it impacts my daily life.', points: 1 },
      { text: 'I sometimes have difficulty concentrating or focusing, and it can be disruptive to my daily life.', points: 2 },
      { text: 'I rarely have difficulty concentrating or focusing, and it does not impact my daily life.', points: 3 }
    ]
  },
  {
    id: 5,
    text: 'How often do you experience irritability or mood swings?',
    answers: [
      { text: 'I experience irritability or mood swings frequently, and it disrupts my daily life.', points: 1 },
      { text: 'I experience irritability or mood swings occasionally, and it can be bothersome but not always disruptive to my daily life.', points: 2 },
      { text: 'I rarely experience irritability or mood swings, and when I do, it is not severe enough to impact my daily life.', points: 3 }
    ]
  },

  // more questions here
];

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizResult, setQuizResult] = useState('');

  const handleAnswerOptionClick = (points) => {
    setScore(score + points);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      let description = '';
      if (score <= 5) {
        description = "We suggest you John Smith.";
      } else if (score > 5 && score <= 10) {
        description = "We suggest you Jessica Allison.";
      } else if (score > 10) {
        description = "We suggest you Arbenita Mani.";
      }
      const resultMessage = `Quiz finished. ${description}`;
      setQuizResult(resultMessage);
    }
  };

  return (
    <div className="quiz-container">
      {quizResult ? (
        <div className="quiz">
          <p>{quizResult}</p>
        </div>
      ) : (
        <div className="quiz">
          <h1>{questions[currentQuestion].text}</h1>
          <div className="answer-options">
            {questions[currentQuestion].answers.map((answerOption) => (
              <button key={answerOption.text} onClick={() => handleAnswerOptionClick(answerOption.points)}>
                {answerOption.text}
              </button>
            ))}
          </div>
          <ProgressBar currentQuestion={currentQuestion} totalQuestions={questions.length} />
        </div>
      )}
    </div>
  );
};

export default Quiz;
