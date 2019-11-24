import * as React from 'react'
import styled from 'styled-components'
import Logo from 'components/Common/Logo'
import LoginForm from 'components/Login/LoginForm'
import LoginMenu from 'components/Login/LoginMenu'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #0062ff;
}
`
const LoginSection = styled.section`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const logoProps = {
  title: {
    size: 26,
    color: 'white',
    text: 'Square'
  },
  image: {
    size: 50,
    color: 'white'
  }
}

const Login = () => {
  return (
    <>
      <GlobalStyle />
      <LoginSection>
        <Logo {...logoProps} />
        <LoginForm />
        <LoginMenu />
      </LoginSection>
    </>
  )
}

export default Login
