// ThemeProvider.js
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi'; // Import sun and moon icons

export const theme = {
  light: {
    background: '#f0f0f0',
    color: '#333',
    linkColor: '#333', // Add this line
    icon: <FiSun/>, 
  },
  dark: {
    background: '#333',
    color: '#f0f0f0',
    linkColor: '#f0f0f0', // Add this line
    icon: <FiMoon/>,
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    color: ${(props) => props.theme.linkColor}; // Add this line
  }
`;

export const ThemeProvider = ({ children, isDarkMode }) => (
  <StyledThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);
