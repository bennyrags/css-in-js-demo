/**@jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming';
import Header from './Header/Header'
import Form from './Form/Form'

const theme = {
  background: 'linear-gradient(45deg,aquamarine,tomato)',
  color: 'white',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}

const Main = styled.main` 
  ${theme}
  padding:1rem;
  background: darkgrey;
`


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
        <Form />
      </Main>
    </ThemeProvider>
  )
}


export default App;
