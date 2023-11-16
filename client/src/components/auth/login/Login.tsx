import React, { Fragment } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Login = (props: any) => {
  const { setEmail, setPassword } = props;
  return (
    // prettier-ignore
    <>
      <Typography variant="h2" fontFamily="Raleway" textAlign="center">Авторизация</Typography>

      <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" 
      placeholder="Введите ваш email" onChange={(e) => setEmail(e.target.value)}/>

      <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" 
      placeholder="Введите ваш password" onChange={(e) => setPassword(e.target.value)}/>

      <Button
        type='submit'
        sx={{ fontFamily: 'Raleway', marginTop: 1.5, width: '100%', textTransform: 'none', fontSize: '20px' }} variant="contained"
      >
        Войти
      </Button>
      <Button
        sx={{
          fontFamily: 'Raleway',
          marginTop: 1.5,
          width: '100%',
          textTransform: 'none',
          fontSize: '20px',
          backgroundColor: ' rgba(3, 156, 3, 0.644)',
          '&:hover': {
            backgroundColor: 'rgba(1, 121, 1, 0.798)',
          },
        }}
        variant="contained"
      >
        Зарегистрироваться
      </Button>
    </>
  );
};

export default Login;
