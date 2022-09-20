import {React, useState, useEffect} from 'react'

function Quiz() {
  
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
  }, [])

  return (
    <div className="quiz">
      <div className="quizrep">
        {
          quiz && quiz.map((singleQuiz)=>{
            console.log("This is a ",singleQuiz);
            return <h3 key={singleQuiz._id}><a href='/quiz/1'>{singleQuiz.testNumber}. {singleQuiz.questionHeading}</a></h3>
          })
        }
      </div>
    </div>
  )
}

export default Quiz