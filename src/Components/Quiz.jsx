import React, {useState} from 'react';
import Question from './Question';
import Results from './Results';

function Quiz() {
    const [questionIndex, SetQuestionIndex] = useState (0);
    const questions = [
        {
          question: "what is the capital of Algeria?",
          options: ["Algiers","tamenghaset","madrid" ,"adrar"],
          answer: 0,
        },
        {
          question1: "how much calories does olive oil has per 100grams?",
          options1: [200 , 800 , 300 , 500], 
          answer1: 1,
        },
        {
          question2: "how much days in the week?",
          options2: [5 ,6 ,7 ,2], 
          answer2: 2,
        }
      ]

    return (
        <div className='quiz-container'>
           <Question 
                question={questions[questionIndex].question}
                options={questions[questionIndex].options}
                answer={questions[questionIndex].answer}
           />
        </div>
    );
}

export default Quiz;