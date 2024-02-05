// ThemeProvider.js
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi'; // Import sun and moon icons


export const theme = {
  light: {
    background: '#f0f0f0',
    color: '#333',
    linkColor: '#333',
    icon: <FiSun/>,
    imageFilter: 'none', // No filter for light mode
  },
  dark: {
    background: '#333',
    color: '#f0f0f0',
    linkColor: '#f0f0f0',
    icon: <FiMoon/>,
    imageFilter: 'brightness(0.8)', // Apply a dark filter for dark mode
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
`;

export const ThemeProvider = ({ children, isDarkMode }) => (
  <StyledThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);
