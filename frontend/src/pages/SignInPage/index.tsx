import React from 'react'
import SignInTemplate from '../../components/template/SignInTemplate';
import SignInCard from '../../components/organisms/SignInCard';

const SignInPage = () => {
  return (
    <SignInTemplate rightComponent={<SignInCard handleSignIn={() => {}} />}/>
  )
}

export default SignInPage;