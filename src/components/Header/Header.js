import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
border: 2px solid white;
width: 35vw;
margin: 1rem 0;
padding-right:.5rem;
`

const H1 = styled.h1`
padding-left:.25rem;
font-size: 4rem;
white-space:nowrap;
color: ${props=>props.theme.color};
`

const Header = () => {
   return(
       <StyledHeader>
      <H1>CSS IN JS DEMO</H1>
       </StyledHeader>
   )
}

export default Header;