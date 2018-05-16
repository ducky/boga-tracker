import React from 'react';
import styled from 'styled-components';

const StyledStat = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  margin-right: 15px;
  border-radius: 3px;
  text-align: center;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:last-child {
    margin: 0;
  }

  .Stat__content {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 4px;
  }

  .Stat__title {
    font-size: 10px;
  }
`;

const Stat = ({ title, children }) => (
  <StyledStat>
    <div className="Stat__content">{children}</div>
    <div className="Stat__title">{title}</div>
  </StyledStat>
);

export default Stat;
