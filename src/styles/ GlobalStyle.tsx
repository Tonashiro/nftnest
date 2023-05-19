import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: #0f0e13;
  background-image: radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%),
    radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%);
  background-repeat: repeat-y;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const FileInput = styled.input.attrs({
  type: "file",
})`
  // Hide the default file input
  display: none;
`;

export const FileInputLabel = styled.label`
  padding: 1%;
  margin-bottom: 15px;
  border-radius: 16px;
  width: fit-content;
  cursor: pointer;
  background-color: #a1375c;

  color: white;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 600;

  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
