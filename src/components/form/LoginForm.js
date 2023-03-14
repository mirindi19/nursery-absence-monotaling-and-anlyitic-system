import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Collapse, Alert, CircularProgress, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { loginAction } from '../../redux/actions/loginAction';
import { useDispatch,useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
// components
import "./loginForm.scss"

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const login=useSelector((state)=>state.login);

    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passworrdError,setPasswordError]=useState("")
    const [errorMessage,setErrorMessage]=useState("")
   const [openErrorMessage,setOpenErrorMessage]=useState(true)
  
   const handleClose=()=>{

setOpenErrorMessage(false)
   }
    const handleClick = async() => {
      
      if(email=="" && password==""){
        setEmailError("Email is required")
        setPasswordError("Password is required")
      }
      else if(email=="" ){
        setEmailError("Email is required")
      }
      else if(password==""){
        setPasswordError("Password is required")
      }else{
        setEmailError("")
        setPasswordError("")
        await dispatch(loginAction({email,password},navigate))
      }
      if(login.error){
        setOpenErrorMessage(true);
      }
    
    
    };

    
  
  return (
        <>
      <Stack spacing={3}>

      {   !login.error ? null : (
                <Collapse in={openErrorMessage}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleClose}>
                        <CloseIcon
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {login.error}  
                        </Alert>
                </Collapse>
            )
                  }


        <TextField name={email} label="Email address" 
        value={email}
         onChange={(e)=>setEmail(e.target.value)}
         helperText={emailError ? emailError : ""}
         error={emailError}
        />
        <TextField
          name={password}
          label="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          helperText={passworrdError ? passworrdError: ""}
          error={passworrdError}
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

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
{
  !login.loading?
  <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} className="btnsubmit">
  Login
</LoadingButton>
  :<Box sx={{ display: 'flex',justifyContent:"center" }}>
  <CircularProgress  />
   </Box>
}
     
    </>
  )
}

export default LoginForm