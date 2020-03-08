import styled from 'styled-components';

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
`;

const StyledFormSectionInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 2px solid #222;
  margin-bottom: 20px;
  font-size: 18px;

  &::placeholder {
    font-size: 18px;
  }
`;

const StyledFormSectionSubmitButton = styled.button`
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

const handleSubmit = (event) => {
  event.preventDefault();
}

const Form = () => {
  return (
    <StyledFormSection>
      <StyledFormSectionImage src='/caseybobby.svg' alt='casey and bobby are getting married!' />
      <StyledFormSectionForm onSubmit={handleSubmit}>
        <StyledFormSectionInput 
          placeholder='Enter your names'
        />
        <StyledFormSectionSubmitButton>Submit</StyledFormSectionSubmitButton>
      </StyledFormSectionForm>
    </StyledFormSection>
  );
}

export default Form;