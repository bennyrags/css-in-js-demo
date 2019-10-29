/**@jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core'
import { ThemeProvider} from 'emotion-theming';
import Header from './Header/Header'
import Form from './Form/Form'
import theme from './theme';


class App extends React.Component {

 render() {
  return (
<ThemeProvider theme={theme}>
<main css={theme}>
<Header/>
<Form />
</main>
</ThemeProvider>
  )
}
}

export default App;
