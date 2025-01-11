import React, { useState } from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';  
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  
  const navigate = useNavigate()
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const GoToProducts = async () => {
    
    try {
      const responseLogin = await axios.post('https://plain-toinette-mtkconsultant-b465e3eb.koyeb.app/api/v1/login' , {
        email , password
      } , {withCredentials: true})

      console.log(resLogin.data.accessToken)
      if (responseLogin.data.message === 'user logged in successfully') {
        localStorage.setItem('accessToken' , )
        navigate('products')
      }
    } catch (error) {
      console.log (error)
    }
    
    // setEmail('')
    // setPassword('')
  }

  const GoToRegister = ()=>{
    navigate ('register')
  }
  
  return (
    <Box className='d-flex flex-column justify-content-center align-items-center gap-3' sx={{minHeight: '100vh'}}>
      <Typography variant='h3'>Login User</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: '500px'}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width: '500px'}} type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button variant="contained" sx={{width:'150px'}} onClick={GoToProducts}>SIGN IN</Button>
      <Typography sx={{color: '#000000'}}>Don't have an account ? Please Signup</Typography>
      <Button variant="contained" sx={{width:'150px'}} onClick={GoToRegister}>SIGN UP</Button>
    </Box>
  )
}

export default Login