import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';

const StyledHeader = styled.header`
  display: flex;
  position: relative;
  align-items: stretch;
  background: ${theme.B300};
  color: ${theme.font_primary};
  grid-area: Header;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  z-index: 2;

  .Header__left {
    display: flex;
    align-items: stretch;
    margin-right: 15px;
  }

  .Header__right {
    display: flex;
    align-items: stretch;
    margin-left: auto;
  }

  a,
  .Header__item {
    display: inline-flex;
    align-items: center;
    padding: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    color: ${theme.font_primary};
    cursor: pointer;
    text-decoration: none;
    transition: background 300ms;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .Header__item {
    cursor: default;

    &:hover {
      background: transparent;
    }
  }

  .Header__icon {
    font-size: 18px;
  }
`;

const Header = ({ children }) => (
  <StyledHeader>
    <div className="Header__left">{children}</div>
    <div className="Header__right" />
  </StyledHeader>
);

export default Header;
