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
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
      const [errorMessage, setErrorMessage] = useState(""); // New state for error message
      const [isLoggedIn, setIsLoggedIn] = useState(false);

    const Navigate=useNavigate();

    const handleLogin = async () => {
        try {
          const body = JSON.stringify({ email, password });

          const response = await fetch('http://localhost:5001/login', {
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
           
          }
          else if (response.status === 401) {
            // Authentication failed
            setErrorMessage('User not signed up. Please create an account.'); // Set error message
            setIsLoggedIn(true);
          
          }
           else {
            console.error('Authentication failed');
            setIsLoggedIn(false);

          }
        } catch (error) {
          console.error('Error during authentication', error);
          setIsLoggedIn(false);

        }
      
      };
      return (
        <Card className='login-card'>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Login
            </Typography>
            {errorMessage && (
          <Typography color="error" style={{ marginBottom: isLoggedIn ? '16px' : '0' }}>
            {errorMessage}
          </Typography>
        )}
            <form style={{ width: '60%' }}>
              <TextField
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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