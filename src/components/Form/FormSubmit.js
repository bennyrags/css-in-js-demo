
import React from 'react';

const styles = {
    display: 'block',
    margin: '1rem auto',
    padding: '.35rem 1rem',
    background: 'initial',
    border: `1px solid green`
}

const FormSubmit = (props) => {
    return (
        <button style={styles}>
            Submit
        </button>
    )
}

export default FormSubmit;