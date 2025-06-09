"use client"
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const router=useRouter();
  const fetchQuizData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.inochieducation.com/api/catagories/vocabulary/"
      );
      setQuizData(response.data.map(item => ({ ...item, selectedOption: null })));
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  }, []);

  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]);

  useEffect(() => {
        localStorage.removeItem('correctAnswersCount');

    if (quizData.length > 0) {
      // Generate shuffled options once when quiz data is loaded
      const newShuffledOptions = quizData.map(item => shuffleOptions([item.first, item.second, item.third, item.answer]));
      setShuffledOptions(newShuffledOptions);
    }
  }, [quizData]);

  const shuffleOptions = (options) => {
    // Shuffle options randomly
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  };

  const handleCheckboxChange = (questionIndex, optionIndex) => {
    setSelectedOptions(prevSelectedOptions => {
      const updatedOptions = [...prevSelectedOptions];
      updatedOptions[questionIndex] = optionIndex;
      return updatedOptions;
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quizData.forEach((item, index) => {
      if (selectedOptions[index] === item.answerIndex) {
        correctAnswers++;
      }
    });
    console.log('Correct answers:', correctAnswers);
        localStorage.setItem('correctAnswersCount', correctAnswers.toString());
        router.push("/dashbord/result")
  };

  return (
    <div>
      <h1>Quiz</h1>
      {quizData.map((item, questionIndex) => (
        <div key={item._id}>
          <p>{item.questionName}</p>
          <ul style={{listStyleType: "none"}}>
            {shuffledOptions.length > 0 && shuffledOptions[questionIndex].map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question_${questionIndex}`}
                    checked={index === selectedOptions[questionIndex]}
                    onChange={() => handleCheckboxChange(questionIndex, index)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className='btn btn-success' type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizPage;
