import React from 'react'
import "./registration.scss"
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import {Link,Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from "../../hooks/useResponsive"

import RegistrationForm from '../../components/form/RegistrationForm';
import IMAGES from "../../Assets/images";
// import { Link } from 'react-router-dom';
// import Registration from '../registration/Registration';

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }));
  
  const StyledSection = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
  }));
  
  const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
  }));
  
const Registration = () => {
  const mdUp = useResponsive('up', 'md');
  return (
    <div>
    <Helmet>
    <title> Login</title>
  </Helmet>
  <StyledRoot>
  {mdUp && (
    <StyledSection className='sectionform'>
    <img src={IMAGES.logo} alt="" className='avantare'/>
      <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
        Hi, Welcome Back
      </Typography>
      <img src="/assets/illustrations/illustration_login.png" alt="login" />
    </StyledSection>
  )}

  <Container maxWidth="sm">
    <StyledContent>
      <Typography variant="h4" gutterBottom>
       Sign up 
      </Typography>
      <Typography variant="body2" sx={{ mb: 5 }}>
      By creating account you will be able to commit more with us.
 </Typography>
 <Typography variant="body2" sx={{ mb: 5 }}>
       Already have an account? {''}
  <Link href='login' variant="subtitle2">Sign In</Link>
  </Typography>
<RegistrationForm/>

    </StyledContent>
  </Container>
</StyledRoot>

    </div>
  )
}

export default Registration