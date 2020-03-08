import Link from 'next/link';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledSectionImage = styled.img`
  width: 100%;
  margin-bottom: 60px;
`;

const StyledSectionButton = styled.button`
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

const Home = () => (
  <StyledSection>
    <StyledSectionImage src='/caseybobby.svg' alt='casey and bobby are getting married!' />
    <Link href='/form'>
      <StyledSectionButton>Enter</StyledSectionButton>
    </Link>
  </StyledSection>
)

export default Home
