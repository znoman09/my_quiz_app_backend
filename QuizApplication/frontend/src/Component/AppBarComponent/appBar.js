//This App Bar is directly imported from MUI.
//Functionality is manipulated according to this project's need.

import {React, useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School'; 
import LoginButton from '../LoginComponent/loginButton'
//import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutComponent/LogoutButton';
import ActionButton from '../QuizCrudOperations/actionButton';
import SignUpButton from '../SignUP/signupButton';
import Alert from '../SignUP/alert';

const pages = ['Home', 'Quizzes', 'About Us'];

const MyAppBar = ({auth}) => {
  
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const deleteToken = ()=>{
    window.localStorage.setItem('token', null)
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                component='a'
                href = '/'
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                Home
            </Button>
            <Button
                component='a'
                href = '/quiz'
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                Quiz
            </Button>
            <Button
                component='a'
                href = '/about'
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                About Us
            </Button>
          </Box>
          <ActionButton/>
          {
            auth === "null"?<LoginButton/>:<LogoutButton deleteToken = {deleteToken}/>
          }
          {
            auth  === 'null'? <SignUpButton auth={auth}/>: <SignUpButton auth={auth}/>
          }
          {/* <LoginButton authHandler = {authHandler}/> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyAppBar;
