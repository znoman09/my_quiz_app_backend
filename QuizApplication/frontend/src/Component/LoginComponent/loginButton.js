import React from 'react'
import Button from '@mui/material/Button';
import Home from '../HomeCompnent/homeComponent';

function LoginButton() {
  return (
    <Button
        component = 'a'
        href = '/login'
        sx={{ my: 2, color: 'white', display: 'block' }}
    >
        Login
    </Button>
  )
}

export default LoginButton