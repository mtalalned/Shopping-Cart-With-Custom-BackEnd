import React, { useState } from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()

  const registerUser = async (event) => {
    
    try {
      const registerRequest = await axios.post ('https://plain-toinette-mtkconsultant-b465e3eb.koyeb.app/api/v1/register' , {
        email , password
      })
      if (registerRequest.data.message === 'registration successfull') {
        navigate ('/')
      }
    } catch (error) {
      console.log (error)
    }

    setEmail('')
    setPassword('')
  }
  
  
  return (
    <>
      <Box className='d-flex flex-column justify-content-center align-items-center gap-3' sx={{minHeight: '100vh'}}>
        <Typography variant='h3'>Register User</Typography>
        <TextField id="outlined-basic-1" label="Email" variant="outlined" sx={{width: '500px'}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField id="outlined-basic-2" label="Password" variant="outlined" type='password' sx={{width: '500px'}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" sx={{width:'150px'}} onClick={registerUser}>Register</Button>
      </Box>
    </>
  )
}

export default Register
