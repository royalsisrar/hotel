import React from 'react'
import Button from '../component/button/Button'
import Header from '../component/header/Header'
import Login from '../component/login/Login'

const Loginpage = () => {
  return (
    <>
    <Header />
    <div className='logindiv'>
      <div className='form'>
    <Login />
    <Button 
        name="SUBMIT"
        color="#fff"
        backgroundColor="#000"
        padding="12px 18px"
        textTransform="uppercase"
        borderRadius="3px"
    />
    </div>
    </div>
    </>
  )
}

export default Loginpage