import React from 'react';
import './Sign-In-And-Sign-Up.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/Sign-in/sign-in.component';

const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
