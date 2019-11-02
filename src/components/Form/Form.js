/** @jsx jsx */

import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import FormHeader from "./FormHeader";
import FormSubmit from "./FormSubmit";
import styled from "@emotion/styled";

const funColor = (props) => (props.empty === true ? `#fff` : `rgba(211,106,194)`);


const Form = styled.form`
  border-width: 4px;
  border-style: dotted;
  border-color: ${funColor};
  width: max-content;
  margin: auto;
  padding: 1rem 2rem;

  label,
  input {
    display: block;
    margin: auto;
    align-self: center;
  }

  label {
    text-align: center;
    font-size: 1.25rem;
    color: ${funColor}
  }

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: 90%;

    &:first-of-type {
      margin-bottom: 0.5rem;
    }
  }
`;


class FormAll extends Component {
  state = {
    name: "",
    age: 0,
    empty: true
  };

  handleChange = propertyName => ev => {
    console.log(ev.target.value);
    this.setState({
      [propertyName]: ev.target.value
    });
    return;
  };

  handleSubmit = ev => {
    ev.preventDefault();

    if (this.state.name.length > 1 && this.state.age.length > 0) {
      this.setState({
        empty: false
      });
    }
    return;
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        empty={this.state.empty}
      >
        <FormHeader         
        empty={this.state.empty}
         />
        <label htmlFor="name">
          {" "}
          Name
          <input
            onChange={this.handleChange("name")}
            name="name"
            type="text"
            value={this.state.name}
          />
        </label>

        <label htmlFor="age">
          Age
          <input
            onChange={this.handleChange("age")}
            name="age"
            type="number"
            value={this.state.age}
          />
        </label>
        <FormSubmit color={funColor}/>
      </Form>
    );
  }
}

export default FormAll;
