import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';

const StyledEntry = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-width: 225px;
  min-height: 250px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  color: ${theme.font_primary};
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 300ms;

  &:hover {
    opacity: 1;
  }

  .Entry__emoji {
    font-size: 48px;
    margin: 0 0 10px;
  }

  .Entry__text {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 0 3px;

    &:last-child {
      margin: 0;
    }
  }
`;

const Entry = ({ onClick }) => (
  <StyledEntry onClick={onClick}>
    <div className="Entry__emoji">
      <span role="img" aria-label="Basic">
        🤷‍
      </span>
    </div>
    <div className="Entry__text">
      <em>Click</em>
    </div>
    <div className="Entry__text">For More Scam</div>
  </StyledEntry>
);

export default Entry;
