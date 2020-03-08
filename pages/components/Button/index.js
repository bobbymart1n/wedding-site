import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  color: #222;
  outline: none;
  border: 2px solid #222;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #222;
    color: #FFF;
  }
`;

const Button = ({ children, onClick, type }) => (
  <StyledButton 
    type={type}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;