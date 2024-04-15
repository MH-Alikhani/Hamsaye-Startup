import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    
    /* brown */

    --color-brown-50: #F7F4F2;
    --color-brown-100: #E8DFD9;
    --color-brown-200: #D0C0B3;
    --color-brown-300: #B9A08D;
    --color-brown-400: #A3836A;
    --color-brown-500: #8B6D55;
    --color-brown-600: #654F3E;
    --color-brown-700: #4C3B2F;
    --color-brown-800: #261E17;
    --color-brown-900: #33271F;

    /* red */

    --color-red-50: #FFEBEE;
    --color-red-100: #FFD6DC;
    --color-red-200: #FF99AA;
    --color-red-300: #FF3355;
    --color-red-400: #FF0A33;
    --color-red-500: #CC0022;
    --color-red-600: #A3001B;
    --color-red-700: #7A0014;
    --color-red-800: #52000E;
    --color-red-900: #290007;
  

    /* green */

    --color-green-50: #F2F8F7;
    --color-green-100: #D7EAE7;
    --color-green-200: #BCDCD7;
    --color-green-300: #A1CEC7;
    --color-green-400: #79B9AF;
    --color-green-500: #4D9389;
    --color-green-600: #386B64;
    --color-green-700: #2A504B;
    --color-green-800: #152826;
    --color-green-900: #070D0C;
    
    
    /* Colors */
    --color-white:#FFF;
    --color-CodGray:#1A1A1A;
    --color-LividBrown:#4A212C;
    --color-Tangaroa:#031D44;
    --color-Pohutukawa:#96031A;
    --color-Plantation:#254441;
    --color-Sandal:#A3836A;
  
    --backdrop-color: rgba(255, 255, 255, 0.1);
  
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  
    /* For dark mode */
    --image-grayscale: 0;
    --image-opacity: 100%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    direction: rtl;
    font-size: 62.5%;
  }
  
  body {
    font-family: "vazir", sans-serif; 
    transition: color 0.3s, background-color 0.3s;
    line-height: 1.5;
    font-size: 1.6rem;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }
  
  select:disabled,
  input:disabled {
    background-color: var(--color-brown-200);
    color: var(--color-brown-500);
  }
  
  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brown-600);
    outline-offset: -1px;
  }
  
  /* Parent selector, finally  */
  button:has(svg) {
    line-height: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: 100%;
  
  }
  
`;
export default GlobalStyles;
