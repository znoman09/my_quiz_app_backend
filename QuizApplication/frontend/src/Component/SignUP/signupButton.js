import React from 'react'
import Button from '@mui/material/Button';
import Home from '../HomeCompnent/homeComponent';

function SignUpButton({auth}) {
  return (
    <Button
        component = 'a'
        href = '/signup'
        sx={{ my: 2, color: 'white', display: 'block' }}
    >
        Sign Up
    </Button>
  )
}

export default SignUpButton