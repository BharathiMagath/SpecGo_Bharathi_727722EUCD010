import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const Otp = () => {
  const [phone, setPhone] = useState('+91'); // Default to Indian country code
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState('');

  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
        'size': 'invisible',
        'callback': (response) => {
          console.log('reCAPTCHA solved');
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
        }
      }, auth);
    }
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        console.log('SMS sent');
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log('Error during signInWithPhoneNumber:', error);
      });
  };

  const verifyOtp = (event) => {
    const enteredOtp = event.target.value;
    setOtp(enteredOtp);

    if (enteredOtp.length === 6) {
      const confirmationResult = window.confirmationResult;
      confirmationResult.confirm(enteredOtp)
        .then((result) => {
          const user = result.user;
          console.log('User signed in successfully:', user);
          alert('User signed in successfully');
        })
        .catch((error) => {
          console.log('Error during OTP verification:', error);
          alert('Invalid OTP. Please try again.');
        });
    }
  };

  return (
    <div className='app__container'>
      <Card sx={{ width: '300px'}}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          {!hasFilled ? (
            <>
              <Typography sx={{ padding: '20px'}} variant='h5' component='div'>
                Enter your phone number
              </Typography>
              <form onSubmit={handleSend}>
                <TextField
                  sx={{ width: '240px'}}
                  variant='outlined'
                  autoComplete='off'
                  label='Phone Number'
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <Button type='submit' variant='contained' sx={{ width: '240px', marginTop: '20px'}}>
                  Send Code
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography sx={{ padding: '20px'}} variant='h5' component='div'>
                Enter the OTP
              </Typography>
              <TextField
                sx={{ width: '240px'}}
                variant='outlined'
                label='OTP'
                value={otp}
                onChange={verifyOtp}
              />
            </>
          )}
        </CardContent>
      </Card>
      <div id="recaptcha"></div>
    </div>
  );
};

export default Otp;
