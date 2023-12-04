import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import fetchApi from ('../../../server/Server')
import './login.css'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username,setUsername]=useState("");

    const [password,setPassword]=useState("");
    const Navigate=useNavigate();

    const handleLogin = async () => {
        try {
          const body = JSON.stringify({ username, password });

          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body,
          });
    
          if (response.ok) {
            const { token } = await response.json();
    
            localStorage.setItem('jwtToken', token);
            Navigate('./analytics')
           
          } else {
            console.error('Authentication failed');
          }
        } catch (error) {
          console.error('Error during authentication', error);
        }
      
      };
      return (
        <Card className='login-card'>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Login
            </Typography>
            <form style={{ width: '60%' }}>
              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                style={{ marginTop: 16 }}
              >
                Login
              </Button>
              <Typography variant="body2" style={{ marginTop: 16 }} onClick={()=>{Navigate('/signup')}}>
                New Registration?
              </Typography>
            </form>
          </CardContent>
        </Card>
      );
    };

export default Login