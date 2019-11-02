/**@jsx jsx **/

import React from 'react';
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';


const Button = styled.button(
    
    {
    display: 'block',
    margin: '1rem auto',
    padding: '.35rem 1rem',
    background: 'initial',
    color:'white',
    border:'2px solid white',
    fontSize: '1rem',
    '&: hover' : {
        borderColor: 'green',
        cursor: 'pointer'
        
    }
}
)

const FormSubmit = (props) => {
    return (
        <Button>
            Submit 
        </Button>
    )
}

export default FormSubmit;