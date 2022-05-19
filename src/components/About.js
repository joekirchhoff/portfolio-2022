import styled from "styled-components";

const StyledSection = styled.section`
  background: #fff;
  padding-bottom: 2rem;
  color: #595959;
`

const StyledHeader = styled.header`
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: .3rem;
  text-align: center;
  border-bottom: solid 2px #ddd;
`

const Description = styled.div`
  padding: 2rem;
  max-width: 50rem;
  font-size: 1rem;
  margin: auto;
  p {
    padding: 1rem 0;
    line-height: 1.75rem;
    a {
      text-decoration: none;
      color: #3cb496;
    }
  }
`

const About = () => {

  return (
    <StyledSection id="about">
      <StyledHeader>
        <h1>ABOUT</h1>
      </StyledHeader>
      <Description>
        <p>
          Joe (he / him) is a full-stack web developer based in Los Angeles. He is currently seeking opportunities to contribute to a thoughtful, like-minded team.
        </p>
        <p>
          In addition to coding, Joe is a working screenwriter. His supernatural thriller was featured in the&nbsp;
          <a href='https://deadline.com/2020/09/the-black-ist-wif-women-in-film-los-angeles-episodic-feature-labs-1234576135/'>
            2020 Black List Feature Lab
          </a>
          , and is currently in development.
        </p>
        <p>
          Joe draws from an eclectic background of experience, ranging from his education in Behavioral Neuroscience, to working
          as a 3D modeler for urban planning, to volunteering as a crisis counselor for the&nbsp;
          <a href='https://suicidepreventionlifeline.org/'>NSPL</a>
          . He also spent a brief fever dream as a bartender in Hollywood.
        </p>
        <p>
          He still makes a mean&nbsp;
          <a href='https://punchdrink.com/recipes/corpse-reviver-2/'>Corpse Reviver No. 2</a>.
        </p>
      </Description>
    </StyledSection>
  )
}

export default About