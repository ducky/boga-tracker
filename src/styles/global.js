import { injectGlobal } from 'styled-components';

import 'typeface-roboto';
import theme from './theme';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: ${theme.B500};
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${theme.B500};
    color: ${theme.font_primary};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: rgba(0, 0, 0, 0.1);    
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    transition: background 300ms;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.B400};
    transition: background 300ms;
    border-radius: 0;
    opacity: 0.7;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.75;
    }
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      transform: scaleY(1);
    }
    
    40% {
      transform: scaleY(1.75);
    }
  }
`;
