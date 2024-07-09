import React from 'react'

function Question({ question, options, currentQuestionIndex, handleAnswer, totalQuestions }) {
    return (
        <div className="question-container">
            <h2>Question {currentQuestionIndex + 1}/{totalQuestions}</h2>
            <h3>{question}</h3>
            <div className="options">
                {options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question
