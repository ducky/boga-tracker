import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  padding: 100px;
  flex-flow: column;
  align-items: center;

  .Loader__loader {
    display: grid;
    align-items: flex-end;
    grid-gap: 4px;
    grid-template-columns: repeat(3, 1fr);
    width: 32px;
    height: 46px;
    margin: 0 0 5px;
  }

  .Loader__bar {
    height: 26px;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.7);
    transform-origin: bottom center;
    animation: load1 1s infinite ease-in-out;
  }

  .Loader__bar:nth-child(1) {
    background: #981046;
    animation-delay: -0.32s;
  }

  .Loader__bar:nth-child(2) {
    background: #238b3b;
    animation-delay: -0.16s;
  }

  .Loader__bar:nth-child(3) {
    background: #23658b;
  }

  .Loader__text {
    text-transform: uppercase;
    font-size: 12px;
  }
`;

const Loader = ({ loadingText = 'Loading' }) => (
  <StyledLoader>
    <div className="Loader__loader">
      <div className="Loader__bar" />
      <div className="Loader__bar" />
      <div className="Loader__bar" />
    </div>
    <div className="Loader__text">{loadingText}</div>
  </StyledLoader>
);

export default Loader;
