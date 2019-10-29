
import React from 'react';

const styles = {
    display: 'block',
    margin: '1rem auto',
    padding: '.35rem 1rem',
    background: 'initial',
    color:'white',
    border:'2px solid white',
    fontSize: '1rem'

}

const FormSubmit = (props) => {
    return (
        <button style={styles}>
            Submit 
        </button>
    )
}

export default FormSubmit;