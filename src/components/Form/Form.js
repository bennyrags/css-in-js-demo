/** @jsx jsx */

import React from 'react';
import {css, jsx} from '@emotion/core';
import FormHeader from './FormHeader';
import FormSubmit from './FormSubmit';

const formStyles = css`
border: 1px solid green;
width:max-content;
margin:auto;
padding: 1rem 2rem;

label, input {
    text-align:center;
    display:block;
    color:purple;
    margin:auto;
    align-self:center;
}
`

const Form = () => {

return(
<form css={formStyles}>
    <FormHeader />
<label> Name
<input name="name" type="text"/>
</label>

<label>Age
<input name="age" type="age"/>
</label>
<FormSubmit />
</form>

)

}

export default Form;