import React from 'react'
import SignInTemplate from '../../components/template/SignInTemplate'
import ForgotCard from '../../components/organisms/ForgotCard'

const ForgotPasswordPage= () => {
  return (
   <>
   <SignInTemplate rightComponent={<ForgotCard/> }/>
   </>
  )
}

export default ForgotPasswordPage