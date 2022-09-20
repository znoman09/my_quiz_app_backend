import React from 'react'
import Button from '@mui/material/Button';

function Logout({deleteToken}) {
  return (
    <Button
        component = 'a'
        href = '/logout'
        sx={{ my: 2, color: 'white', display: 'block' }}
        onClick = {deleteToken}
    >
        Logout
    </Button>
  )
}

export default Logout