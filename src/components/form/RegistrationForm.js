import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import "./loginForm.scss"

const RegistrationForm = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
  
    const handleClick = () => {
      navigate('/dashboard', { replace: true });
    };
  
  return (
        <>
      <Stack spacing={3}>
        <TextField name="text" label="telphone" />
        <TextField name="email" label="Email address" />
        <TextField
          name="password"
          label="Password"
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
      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} className="btnsubmit">
        Enter
      </LoadingButton>
    </>
  )
}

export default RegistrationForm