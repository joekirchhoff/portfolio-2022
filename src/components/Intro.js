import styled from 'styled-components';
import BGTile from '../images/dark-wave-bg.jpg';

const StyledSection = styled.section`
  min-height: 100vh;
  background: url(${BGTile});
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: white;
  
`

const FlexWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`

const NameHeading = styled.h1`
  font-size: 3rem;
  letter-spacing: .5rem;
  padding: 2rem 0;
  span:first-of-type {
    font-weight: 900;
    margin-right: 1rem;
  }
  span:last-of-type {
    font-weight: 200;
  }
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 580px) {
    flex-flow: column nowrap;
    align-items: center;
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

const SubheadingWrapper = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 200;
  letter-spacing: .2rem;
  border-top: white solid 2px;
  border-bottom: white solid 2px;
  text-align: center;
  line-height: 1.5rem;
  h2:first-child {
    padding-bottom: 1.5rem;
  }
  @media (max-width: 580px) {
    font-size: 1.2rem;
  }
`

const StyledNav = styled.nav`
  padding: 2rem;
`

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 580px) {
    flex-flow: column nowrap;
  }
`

const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  color: white;
  letter-spacing: .2rem;
  background: transparent;
  border: white solid 1px;
  border-radius: 5px;
  width: 7rem;
  height: 3rem;
  line-height: 3rem;
  font-size: .8rem;
  margin: 0 .25rem;
  :hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  transition: background-color ease .3s;
  @media (max-width: 580px) {
    margin: 1rem 0;
  }
  cursor: pointer;
`

const ScrollBtn = styled.a`
  background: transparent;
  border: none;
  cursor: pointer;
  padding-bottom: 2rem;
`

const Intro = () => {

  return (
    <StyledSection>
      <FlexWrapper>
        <NameHeading>
          <span>JOE</span>
          <span>KIRCHHOFF</span>
        </NameHeading>
        <SubheadingWrapper>
          <h2>FULL-STACK WEB DEVELOPER</h2>
          <h2>WRITER</h2>
        </SubheadingWrapper>
        <StyledNav>
          <NavList>
            <li>
              <NavLink href='#about'>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink href='#skills'>
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink href='#work'>
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink href='#contact'>
                CONTACT
              </NavLink>
            </li>
          </NavList>
        </StyledNav>
      </FlexWrapper>
      <ScrollBtn href='#about' aria-label="scroll to about section">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" transform='rotate(180)' xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.9629 44.1831L37.8416 22.3045C39.0131 21.1329 40.9126 21.1329 42.0842 22.3045L63.9629 44.1831"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.9629 60.1831L37.8416 38.3045C39.0131 37.1329 40.9126 37.1329 42.0842 38.3045L63.9629 60.1831"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ScrollBtn>
    </StyledSection>
  )
}

export default Intro