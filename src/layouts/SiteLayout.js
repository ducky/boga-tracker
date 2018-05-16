import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '@fortawesome/react-fontawesome';

import Header from 'components/Header';
import ModalContainer from 'components/Modal.container';
import ToastContainer from 'components/Toast.container';

const SiteContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    'Header'
    'Action'
    'Content'
    'Footer';

  .Layout__actions {
    grid-area: Action;
  }

  .Layout__content {
    grid-area: Content;
    overflow: auto;
  }

  .Layout__footer {
    grid-area: Footer;
    /* background: #21222c; */
    text-align: center;
    padding: 8px;
  }
`;

const FootNote = styled.div`
  font-size: 12px;

  .emoji {
    display: inline-block;
    font-size: 10px;
    margin: 0 5px;
    color: #c34968;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SiteLayout = ({ children }) => (
  <SiteContainer>
    <Header>
      <Link to="/" style={{ padding: '0 20px' }}>
        BogaSoft Enterprises
      </Link>
      <Link to="/">Home</Link>
    </Header>
    {children}
    <div className="Layout__footer">
      <FootNote>
        Made with
        <Icon className="emoji" icon="heart" />
        by{' '}
        <a href="https://christieman.com" target="_blank" rel="noopener noreferrer">
          DutDucky
        </a>
      </FootNote>
    </div>
    <ModalContainer />
    <ToastContainer />
  </SiteContainer>
);

export default SiteLayout;
