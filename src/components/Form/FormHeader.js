// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from 'react';
import {css, jsx} from '@emotion/core'

const FormHeader = () => {

    return (
        <h2 css={{
            textAlign:'center',
            margin: '1rem 0',
            color: 'green'
        }}>
            Fill out this form!
        </h2>
    )

}

export default FormHeader;