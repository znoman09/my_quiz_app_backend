import React from 'react'
import { Button } from '@mui/material'

function ActionButton() {
    return (
        <Button
            component = 'a'
            href = '/action'
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
            Quiz Actions
        </Button>
      )
}

export default ActionButton