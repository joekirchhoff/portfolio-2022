import styled from "styled-components";
import monomythPreview from "../images/monomyth-preview.jpg";
import portfolioPreview from "../images/portfolio-preview.jpg";

const StyledSection = styled.section`
  background: white;
  color: #595959;
  min-height: 50vh;
  padding-bottom: 2rem;
`

const StyledHeader = styled.header`
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: .3rem;
  text-align: center;
  border-bottom: solid 2px #ddd;
`

const ProjectSection = styled.section`
  max-width: 50rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "left right"
    "description description";
  @media (max-width: 799px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "preview"
      "header"
      "description";
  }
`

const ProjectPreviewLink = styled.a`
  width: 20rem;
  height: 12.5rem;
  margin: 2rem auto;
  grid-area: ${props => props.reverse ? "right" : "left"};
  @media (max-width: 799px) {
    grid-area: preview;
  }
`

const ProjectPreviewImg = styled.img`
  border-radius: 5px;
  border: #ddd solid 2px;
`

const ProjectHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  line-height: 2rem;
  grid-area: ${props => props.reverse ? "left" : "right"};
  text-align: ${props => props.reverse ? "right" : "left"};
  h2 {
    font-size: 1.5rem;
    letter-spacing: .2rem;
    padding-bottom: .5rem;
  }
  a {
    letter-spacing: .2rem;
    text-decoration: none;
    color: #3cb496;
    display: block;
  }
  @media (max-width: 799px) {
    text-align: center;
    grid-area: header;
  }
`

const ProjectDescription = styled.div`
  max-width: 50rem;
  width: 100%;
  padding: 0 2rem;
  grid-area: description;
  p {
    padding: 1rem 0;
    line-height: 1.75rem;
  }
  @media (max-width: 799px) {
    padding: 1rem 2rem;
  }
`

const SectionDivider = styled.div`
  border-top: solid 2px #ddd;
`

const Work = () => {

  return (
    <StyledSection id="code-examples">
      <StyledHeader>
        <h1>CODE</h1>
      </StyledHeader>

      <ProjectSection>
        <ProjectPreviewLink href="https://monomyth.netlify.app/">
          <ProjectPreviewImg src={monomythPreview} alt="Monomyth homepage preview"/>
        </ProjectPreviewLink>
        <ProjectHeader>
          <h2>MONOMYTH</h2>
          {/* <a href="https://monomyth.netlify.app/">LIVE PREVIEW</a> */}
          <a href="https://github.com/joekirchhoff/monomyth">GITHUB REPO</a>
        </ProjectHeader>
        <ProjectDescription>
          <p>Full-stack short fiction platform.</p>
          <p>Online fiction outlets can be enormously beneficial to writers, especially those still developing their voice and identifying their audience. However, many platforms suffer from having evolved out of more general, feature-bloated content aggregation sites. This project seeks a happy middle ground, free from distracting clutter while also providing essential features specific to fiction, such as genre sorting.</p>
          <p>Built using React, Node.js, Express, and MongoDB. Users can read, submit, and "like" stories and comments. Authentication powered by Passport.js. Custom rich text editor developed using the Draft.js framework. Fuzzy search of story text powered by MongoDB Atlas Search.</p>
        </ProjectDescription>
      </ProjectSection>

      <SectionDivider />

      <ProjectSection>
        <ProjectPreviewLink href="#top" reverse>
          <ProjectPreviewImg src={portfolioPreview} alt="Joe Kirchhoff portfolio preview"/>
        </ProjectPreviewLink>
        <ProjectHeader reverse>
          <h2>PORTFOLIO</h2>
          {/* <a href="#top">LIVE PREVIEW</a> */}
          <a href="https://github.com/joekirchhoff/portfolio-2022">GITHUB REPO</a>
        </ProjectHeader>
        <ProjectDescription>
          <p>Designed and developed from scratch.</p>
          <p>This portfolio is built using React and Styled Components. Though this site could readily be built using "vanilla" HTML and CSS, CSS-in-JS was chosen for greater modularity and maintainability. Fully responsive design incorporating Flexbox and Grid.</p>
        </ProjectDescription>
      </ProjectSection>
    </StyledSection>
  )
}

export default Work