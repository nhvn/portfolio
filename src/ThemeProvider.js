import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi'; 


export const theme = {
  light: {
    background: '#f0f0f0',
    background2: 'rgba(233, 233, 233)',
    color: 'rgba(51,51,51,.8)',
    linkColor: '#333',
    icon: <FiSun/>,
    imageFilter: 'none', 
  },
  dark: {
    background: '#333',
    background2: 'rgb(59, 59, 59)',
    color: '#f0f0f0',
    linkColor: '#f0f0f0',
    icon: <FiMoon/>,
    imageFilter: 'brightness(0.8)',
    shadow: '0 0 10px rgba(0, 0, 0, 1);',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    color: ${(props) => props.theme.linkColor};
  }

  img {
    filter: ${(props) => props.theme.imageFilter};
  }
  
  img.no-filter {
    filter: none !important;
  }

  .intro-text h1 {
    text-shadow: ${(props) => props.theme.shadow}
  }

  .contri {
    background-color: ${(props) => props.theme.background2}
  }

`;

export const ThemeProvider = ({ children, isDarkMode }) => (
  <StyledThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);
