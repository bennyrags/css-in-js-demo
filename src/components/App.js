/**@jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core'
import { ThemeProvider, withTheme } from 'emotion-theming';
import ReactDOM from 'react-dom'

import Header from './Header/Header'
import styled from '@emotion/styled'
import FormAll from './Form/Form'


const theme = {
backgroundImage: 'linear-gradient(blue,green)',
color:'black',
height:'100vh',
display:'flex'
}

console.log('this is the theme', theme);

class App extends React.Component {

 render() {
  return (
<ThemeProvider theme={theme}>
  hey all, this is the theme:
<Header/>
   <FormAll />

</ThemeProvider>
  )
}
}

export default withTheme(App);
