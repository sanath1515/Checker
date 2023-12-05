import React from 'react'
import SignInTemplate from '../../components/template/SignInTemplate';
import SignUpCard from '../../components/organisms/Signupcard';

const SignUpPage = () => {
  return (
    <SignInTemplate rightComponent={<SignUpCard handleSignUp={() => {}} />} />
  )
}

export default SignUpPage;