import {React, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function NewQuestion({auth}) {
  let bearer = 'Bearer ' + auth 

  let test = 0;
  let questionNum = 0;
  let questionHeading = ""
  let choice1 = ""
  let choice2 = ""
  let choice3 = ""
  let choice4 = ""
  let answer = ""
  let[testNumber, setTestNumber] = useState(0);

  // useEffect(()=>{
  //   setTestNumber(0)
  //   setQuestionNumber(0)
  // },[])

  const addNewQuiz = async()=>{
    const quizData = {
      "testNumber": testNumber, 
      "questionNumber":questionNum, 
      "quizQuestion":questionHeading,
      "choice1": choice1,
      "choice2": choice2,
      "choice3": choice3,
      "choice4": choice4,
      "answer": answer
    }
    console.log("Stringify =>", JSON.stringify(quizData));
    const response = await fetch('/api/quiz/', {
      method:'POST',
      body:JSON.stringify(quizData),
      headers:{
        'authorization' : bearer,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    const json = await response.json()
    console.log(json);
  }

  const handleRequest = (event)=>{
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if(event.target.id == "tnum"){
      if (event.target.value === '' || re.test(event.target.value)) {
        console.log("Target Value:",event.target.value);
        testNumber = event.target.value
        setTestNumber(test)
        console.log("Test Number: ", testNumber);
      }
    }

    else if(event.target.id == "qnum"){
      const re = /^([0-9]{1,})?(\.)?([0-9]{1,})?$/;
      // if value is not blank, then test the regex
      if (event.target.value === '' || re.test(event.target.value)) {
        console.log("Target Value:",event.target.value);
        questionNum = event.target.value
        console.log("QuestionNum: ", questionNum);
      }
    }

    else if(event.target.id == "qque"){
      questionHeading = event.target.value
      console.log(questionHeading);
    }

    else if(event.target.id == "ch1"){
      choice1 = event.target.value
      console.log(choice1);
    }

    else if(event.target.id == "ch2"){
      choice2 = event.target.value
      console.log(choice2);
    }

    else if(event.target.id == "ch3"){
      choice3 = event.target.value
      console.log(choice3);
    }

    else if(event.target.id == "ch4"){
      choice4 = event.target.value
      console.log(choice4);
    }

    else if(event.target.id == "answer"){
      answer = event.target.value
      console.log(answer);
    }

  }
  

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="tnum" label="1 is Defined Value Not Changeable" variant="outlined" value={1}/>
        <TextField id="qnum" label="Enter Question Number" variant="outlined" onChange={event=>handleRequest(event)}/>
        <TextField id="qque" label="Enter Question" variant="outlined" onChange={event=>handleRequest(event)}/>
        <TextField id="ch1" label="Enter Choice 1" variant="outlined" onChange={event=>handleRequest(event)}/>
        <TextField id="ch2" label="Enter Choice 2" variant="outlined" onChange={event=>handleRequest(event)}/>
        <TextField id="ch3" label="Enter Choice 3" variant="outlined" onChange={event=>handleRequest(event)}/>
        <TextField id="ch4" label="Enter Choice 4" variant="outlined" onChange={event=>handleRequest(event)}/>
        <TextField id="answer" label="Enter Answer" variant="outlined" onChange={event=>handleRequest(event)}/>
        <div className='center'>
          <Button
            onClick={addNewQuiz}
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default NewQuestion