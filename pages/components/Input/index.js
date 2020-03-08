import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 2px solid #222;
  margin-bottom: 20px;
  font-size: 18px;

  &::placeholder {
    font-size: 18px;
  }
`

const Input = ({ onChange, placeholder, name }) => (
  <StyledInput 
    type='text'
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;