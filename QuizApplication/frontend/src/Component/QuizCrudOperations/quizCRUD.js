import React from 'react'
import Button from '@mui/material/Button';

function QuizCRUD() {
    return (
      <div>
        <ul>
          <li>
          <Button
            component = 'a'
            href='/action/newquestion'
          >
            Create a New Quiz Question
          </Button>
          </li>
          {/* <li>
          <Button
            component = 'a'
            href='/action/updatequestion'
          >
            Update a Quiz Question
          </Button>
          </li> */}
          {/* <li>
          <Button
            component = 'a'
            href='/action/deletequizquestion'
          >
            Delete a Quiz Question
          </Button>
          </li> */}
          <li>
            <Button
              component = 'a'
              href='/action/deletequiz'
            >
              Delete a Quiz
            </Button>
          </li>
        </ul>
      </div>
      )
}

export default QuizCRUD