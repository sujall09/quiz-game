import React, { useState } from 'react'
import { Question, Result } from './index';

function Quiz() {
    const questions = [
        {
            question: 'What hook is used to manage state in functional components?',
            options: ['useEffect', 'useContext', 'useState', 'useRef'],
            answer: 'useState'
        },
        {
            question: 'Which utility class sets text color to red in Tailwind CSS?',
            options: ['bg-red-500', 'text-red-500', 'color-red', 'red-text'],
            answer: 'text-red-500'
        },
        {
            question: 'What does `M` stand for in MERN?',
            options: ['MySQL', 'MongoDB', 'Mongoose', 'MariaDB'],
            answer: 'MongoDB'
        },
        {
            question: 'What is used to create a context in React?',
            options: ['createState', 'createContext', 'createRef', 'createMemo'],
            answer: 'createContext'
        },
        {
            question: 'Which framework is used for building the backend in the MERN stack?',
            options: ['Laravel', 'Express', 'Flask', 'Spring'],
            answer: 'Express'
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return <Result score={score} totalQuestions={questions.length} />;
    }


    return (
        <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswer={handleAnswer}
            totalQuestions={questions.length}
        />
    )
}

export default Quiz
