import styled from "styled-components";
import BGTile from '../images/dark-wave-bg.jpg';

const StyledSection = styled.section`
  background: url(${BGTile});
`

const StyledHeader = styled.header`
  color: white;
  padding: 4rem 0 2rem 0;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: .3rem;
  text-align: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 4rem;
`

const SkillsCard = styled.div`
  border: white solid 2px;
  width: 20rem;
  height: 22rem;
  border-radius: 5px;
  margin: 2rem;
`

const CardHeader = styled.header`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: .15rem;
  font-weight: 700;
  text-align: center;
  padding: 2rem;
  border-bottom: white solid 2px;
`

const SkillsList = styled.ul`
  list-style: none;
  color: white;
  padding: 2rem;
  text-align: center;
  li {
    padding-bottom: 2rem;
    font-size: 1.25rem;
  }
`


const Skills = () => {

  return (
    <StyledSection id='skills'>
      <StyledHeader>
        <h1>SKILLS</h1>
      </StyledHeader>
      <CardContainer>

        <SkillsCard>
          <CardHeader>
            <h2>FRONT END</h2>
          </CardHeader>
          <SkillsList>
            <li>
              HTML5
            </li>
            <li>
              CSS / SCSS
            </li>
            <li>
              JAVASCRIPT
            </li>
            <li>
              REACT
            </li>
          </SkillsList>
        </SkillsCard>

        <SkillsCard>
          <CardHeader>
            <h2>BACK END</h2>
          </CardHeader>
          <SkillsList>
            <li>
              NODE.JS
            </li>
            <li>
              EXPRESS
            </li>
            <li>
              MONGODB
            </li>
            <li>
              FIREBASE
            </li>
          </SkillsList>
        </SkillsCard>

        <SkillsCard>
          <CardHeader>
            <h2>TOOLS</h2>
          </CardHeader>
          <SkillsList>
            <li>
              GIT
            </li>
            <li>
              GITHUB
            </li>
            <li>
              JEST
            </li>
            <li>
              AGILE TOOLS
            </li>
          </SkillsList>
        </SkillsCard>

      </CardContainer>
    </StyledSection>
  )
}

export default Skills