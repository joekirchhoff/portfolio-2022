import styled from "styled-components";
import BGTile from '../images/dark-wave-bg.jpg';

const StyledSection = styled.section`
  background: url(${BGTile});
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-apart;
  align-items: center;
`

const StyledHeader = styled.header`
  color: white;
  padding: 4rem 0 2rem 0;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: .3rem;
  text-align: center;
`

const ContactList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  margin: auto;
`

const ContactLink = styled.a`
  width: fit-content;
  margin: 1rem auto;
  font-size: 1.5rem;
  text-decoration: none;
  color: #3cb496;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  letter-spacing: .2rem;
  span {
    padding-left: 1rem;
  }
  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`

const ScrollBtn = styled.a`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 2rem 0;
`

const StyledFooter = styled.footer`
  padding: 2rem;
  letter-spacing: .2rem;
  text-align: center;
  color: white;
  font-size: .9rem;
`

const Contact = () => {

  return (
    <StyledSection id="contact">
      <StyledHeader>
        <h1>CONTACT</h1>
      </StyledHeader>
      <ContactList>
        <li>
          <ContactLink href="mailto:joe.elik@gmail.com">
            {/* Email Icon SVG */}
            <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 22C14.6804 22 13.51 22.639 12.7815 23.6244C13.0832 23.7236 13.3709 23.8822 13.6271 24.1017L36.4207 43.6392C38.4804 45.4046 41.5197 45.4046 43.5794 43.6392L66.3731 24.1017C66.6292 23.8822 66.9169 23.7236 67.2185 23.6245C66.49 22.639 65.3196 22 64 22H16Z"
                fill="#ffffff"
              />
              <path
                d="M68 29.2926L46.8334 47.4354C42.9012 50.8059 37.0989 50.8059 33.1668 47.4354L12 29.2925V54C12 56.2091 13.7909 58 16 58H64C66.2091 58 68 56.2091 68 54V29.2926Z"
                fill="#ffffff"
              />
            </svg>
            <span>joe.elik@gmail.com</span>
          </ContactLink>
        </li>
        <li>
          <ContactLink href="https://github.com/joekirchhoff">
            {/* GitHub Icon SVG */}
            <svg width="40" height="40" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
                fill="#ffffff"
              />
            </svg>
            <span>GitHub</span>
          </ContactLink>
        </li>
      </ContactList>
      <ScrollBtn href="#top" aria-label="scroll to top">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <StyledFooter>
        <span>© 2022 JOE KIRCHHOFF</span>
      </StyledFooter>
    </StyledSection>
  )
}

export default Contact