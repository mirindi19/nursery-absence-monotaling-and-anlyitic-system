import React from "react"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Collapse, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import "./loginForm.scss"
import { useDispatch, useSelector } from 'react-redux';
import { signupAction } from '../../redux/actions/signupAction';
import CloseIcon from '@mui/icons-material/Close';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const signup=useSelector((state)=>state.signup);
    const [telephone,setTelephone]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [emailError,setEmailError]=useState("");
  const [telephoneError,setTelophoneError]=useState("")
  const [passwordError,setPasswordError]=useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [openError, setOpenError] = React.useState(true);
  const [openSuccess, setOpenSuccess] = React.useState(true);
  const [errorMessage,setErrorMessage]=React.useState("")
  const [successMessage,setSuccessMessage]=React.useState("")
  const handleCloseMessage=()=>{
    setOpenError(false)
    setOpenSuccess(false)
  }
    const handleClick = () => {
   if(telephone==""){
    setTelophoneError("Phone is required")
   }
   else if(email==""){
    setEmailError("Email is required")
   }
   else if(password==""){
    setPasswordError("Password is required")
   }
   else{
    setTelophoneError("")
    setEmailError("")
    setPasswordError("")
   dispatch(signupAction(telephone,email,password))
   }
    };
    React.useEffect(()=>{
      async function fetchData(){
    if(!signup.loading){
      if(signup.details.length!==0){
          setSuccessMessage(signup.details.message)
          setOpenSuccess(true)
          setEmail("")
          setPassword("")
          setTelephone("")
      }
    }
      }
      fetchData()
     },[signup.details])
  return (
        <>
          {
            !signup.error ? null : (
                <Collapse in={openError}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <CloseIcon
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {/* {errorMessage==="Provided NID is not registered to the head of the household"?`${t("cbhi:providedNIDisnotregisteredtotheheadofthehousehold")}`:errorMessage} */}
                        {signup.error}
                         </Alert>
                </Collapse>
            )
        }
    {
            !successMessage ? null : (
                <Collapse in={openSuccess}>
                    <Alert severity="success"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <CloseIcon
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                       
                        {successMessage}
                         </Alert>
                </Collapse>
            )
        }
      <Stack spacing={3}>
    
        <TextField name="text" label="telphone"
        value={telephone}
        onChange={(e)=>setTelephone(e.target.value)}
        helperText={telephoneError? telephoneError : ""}
        error={telephoneError}
        />
        <TextField name="email" label="Email address"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         helperText={emailError? emailError : ""}
         error={emailError}
        />
        <TextField
          name="password"
          label="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          helperText={passwordError? passwordError : ""}
          error={emailError}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

    <br></br>
    {
      signup.loading?"Loading":
      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} className="btnsubmit">
      Sign Up
       </LoadingButton>
    }
     
    </>
  )
}

export default RegistrationForm