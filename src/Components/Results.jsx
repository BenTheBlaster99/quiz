import React from 'react';

function Results( {question , option}) {
    return (
        <div className='question-container'>
            <h2>{question}</h2>
            <div className='options'>
                {option.map((option, index) => (
                    <button key={index} className='option-button'>{option}</button>
                ))}
            </div>
        </div>
    );
}

export default Results;