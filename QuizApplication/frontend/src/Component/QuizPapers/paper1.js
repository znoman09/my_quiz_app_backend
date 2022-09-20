import {React, useState, useEffect} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';

function Paper1() {

    let [number, setNumber] = useState(0)
    const calculateResult = (event, answer)=>{
        if(event.target.value == answer){
            setNumber(++number)
        }
        console.log("Answer is ", answer, "Number are", number);
    }

    const saveResultToMemory = ()=>{
        console.log("This function is fired");
        window.localStorage.setItem('finalResult', JSON.stringify(number));
    }

    const[quizPaper, setQuizPaper] = useState(null)
    useEffect(()=>{
            const fetchQuizzes = async()=>{
            const response = await fetch(`/api/quiz/1`)
            const json = await response.json()

            if(response.ok){
                setQuizPaper(json)
            }
        }

        fetchQuizzes()
    }, [])
    let index = 0
    return (
        <div className="paper">
            {   
                quizPaper && quizPaper.map((question)=>{
                    return (
                        <div className='choices' key={question._id}
                        >
                            <h2>{++index}. {question.quizQuestion}</h2>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel control={<Radio value={question.choice1} onClick={event=>calculateResult(event, question.answer)}/>} label={question.choice1} />
                                    <FormControlLabel control={<Radio value={question.choice2} onClick={event=>calculateResult(event, question.answer)} />} label={question.choice2} />
                                    <FormControlLabel control={<Radio value={question.choice3} onClick={event=>calculateResult(event, question.answer)} />} label={question.choice3} />
                                    <FormControlLabel control={<Radio value={question.choice4} onClick={event=>calculateResult(event, question.answer)} />} label={question.choice4} />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    )
                })
            }
            
            <Button
                component = 'a'
                href = '/result'
                onClick={saveResultToMemory}
            >
                Submit
            </Button>
        </div>
    )
}

export default Paper1