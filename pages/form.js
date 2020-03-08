import { useState } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

import Button from './components/Button';
import Radio from './components/Radio';
import Input from './components/Input';

const StyledFormSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledFormSectionImage = styled.img`
  max-width: 400px;
  margin-bottom: 100px;
`;

const StyledFormSectionForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Form = () => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
  
    setFormState({
      ...formState,
      [`${name}`]: value,
    })
  };

  console.log(formState);
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('https://docs.google.com/forms/d/1gyLKYJgqGJgjqpMpKz8wot0ETHvxIg614zCgnFRnWOs/formResponse', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formState),
    })

    const data = await res.json();
    console.log(data);
  }

  return (
    <StyledFormSection>
      <StyledFormSectionImage src='/caseybobby.svg' alt='casey and bobby are getting married!' />
      <h1>RSVP</h1>
      <StyledFormSectionForm onSubmit={handleSubmit}>
        <Input
          type='text'
          name='entry.1915340210'
          placeholder='Enter your names'
          onChange={(e) => handleChange(e)}
        />
        <Radio
          label='Yes'
          name='entry.1326234195'
          value='yes'
          onChange={(e) => handleChange(e)} 
        />
        <Radio
          label='No'
          name='entry.1326234195'
          value='no'
          onChange={(e) => handleChange(e)}
        />
        <Button type='submit'>Submit</Button>
      </StyledFormSectionForm>
    </StyledFormSection>
  );
}

export default Form;