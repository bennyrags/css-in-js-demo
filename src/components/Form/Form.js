/** @jsx jsx */

import React from 'react';
import {css, jsx} from '@emotion/core';
import FormHeader from './FormHeader';
import FormSubmit from './FormSubmit';

const formStyles = css`
border: 4px solid white;
width:max-content;

margin:auto;
padding: 1rem 2rem;

label, input {
    display:block;
    color: white;
    margin:auto;
    align-self:center;
}

label {
    text-align:center;
    font-size:1.25rem;
}

input {
    margin-top:.5rem;
    padding:.5rem;
    width:90%;

&:first-of-type {
    margin-bottom:.5rem;
}
}

`

const Form = (props) => {

return(
<form css={formStyles}>
<FormHeader />
<label htmlFor="name"> Name
<input name="name" type="text"/>
</label>

<label htmlFor="age">Age
<input name="age" type="age"/>
</label>
<FormSubmit />
</form>

)

}

export default Form;