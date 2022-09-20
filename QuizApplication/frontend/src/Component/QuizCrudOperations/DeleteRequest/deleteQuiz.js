import {React, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function DeleteQuiz() {
    const[quiz, setQuiz] = useState(null)
  useEffect(()=>{
    const fetchQuizzes = async()=>{
      const response = await fetch(`/api/quiz/basic`)
      const json = await response.json()

      if(response.ok){
        setQuiz(json)
      }
    }

    fetchQuizzes()
    console.log("Quiz is=> ",quiz);
  }, [])

  return (
    <div className="quiz">
      <div className="quizrep">
        {
          quiz && quiz.map((singleQuiz)=>{
            console.log("This is a ",singleQuiz);
            return <h3 key={singleQuiz._id}><a href='/action/deletequiz/1'>{singleQuiz.testNumber}. {singleQuiz.questionHeading}</a></h3>
          })
        }
      </div>
    </div>
  )
}

export default DeleteQuiz