import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from './login/Login';
import Register from './register/Register';
import './style.css';
import { Box } from '@mui/material';

const AuthRootComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="root b-color" onSubmit={handSubmit}>
      <form className="form">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding="30px 30px"
          borderRadius={3}
          border="1px solid rgba(169, 167, 167, 0.414)"
          sx={{
            backgroundColor: '#ffffff',
          }}
        >
          {location.pathname === '/login' ? (
            <Login setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/registration' ? (
            <Register />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
