import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

// import '../Login/login.css'
function SignUp() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate(); // Initialize the useNavigate hook


    const handleSignUp = async () => {
        try {
          const response = await fetch('http://localhost:5001/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
        console.log('Signed up successfully!');
        navigate('/');

    
          } else {
          const data=await response.json();
            console.error('error reg user',data.error);
          }
        } catch (error) {
          console.error('Error registering user', error);
        }
      };
  return (
    <Card className='SignUp'>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
             SignUp
            </Typography>
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
                onClick={handleSignUp}
                style={{ marginTop: 16 }}
                
              >
               Submit
              </Button>
            
            </form>
          </CardContent>
        </Card>
      );
    };
export default SignUp