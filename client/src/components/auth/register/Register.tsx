import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Register = () => {
  return (
    // prettier-ignore
    <>
      <Typography variant="h2" fontFamily="Raleway" textAlign="center">Регистрация</Typography>
      <TextField fullWidth={true} margin="normal" label="Имя" variant="outlined" placeholder="Введите ваше имя"/>
      <TextField fullWidth={true} margin="normal" label="Username" variant="outlined" placeholder="Введите ваш username"/>
      <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите ваш email"/>
      <TextField type="password"fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите ваш password"/>
      <TextField type="password" fullWidth={true}margin="normal"label="Password" variant="outlined"placeholder="Повторите ваш password"/>
      <Button 
        sx={{ fontFamily: 'Raleway', marginTop: 1.5,width: '100%', textTransform: 'none', fontSize: "20px" }} 
        variant="contained"
      >
        Зарегистрироваться
      </Button>
    </>
  );
};

export default Register;
