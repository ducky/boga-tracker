import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import theme from 'styles/theme';

import Button from 'components/Button';
import Columns from 'components/Columns';
import Label from 'components/Label';

const StyledTimer = styled.div`
  display: flex;
  flex-flow: column;

  .Timer__content {
    display: flex;
    align-items: center;
  }

  .Timer__time {
    font-size: 32px;
    font-weight: 700;
    color: ${theme.font_secondary};
    flex: 1 1 auto;
    margin-right: 20px;

    ${props => props.isRunning && `color: ${theme.A200}`};
  }

  .Timer__actions {
    flex: 0 0 auto;
  }
`;

const Timer = ({ label, duration, isRunning, onStart, onStop, onReset }) => (
  <StyledTimer isRunning={isRunning}>
    <Label>{label}</Label>
    <div className="Timer__content">
      <div className="Timer__time">{moment.duration(duration, 'milliseconds').format('hh:mm:ss', { trim: false })}</div>
      <div className="Timer__actions">
        <Columns span="2" gap="5">
          {!isRunning && (
            <Button default onClick={onStart}>
              Start
            </Button>
          )}
          {isRunning && <Button onClick={onStop}>Stop</Button>}
          <Button transparent onClick={onReset}>
            Reset
          </Button>
        </Columns>
      </div>
    </div>
  </StyledTimer>
);

export default Timer;
