import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
border: 2px solid grey;
width: 35vw;
margin: 1rem;
color: darkgreen;
padding-right:.5rem;
`

const H1 = styled.h1`
padding-left:.25rem;
font-size: 4rem;
white-space:nowrap;
color:${StyledHeader.color};

`

const Header = (props) => {
   return(
       <StyledHeader>
      <H1>CSS IN JS DEMO</H1>
       </StyledHeader>
   )
}

export default Header;