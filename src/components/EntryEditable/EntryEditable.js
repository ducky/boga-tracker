import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { PERSONA_MAP } from 'constants/personas';
import { SCAM_MAP } from 'constants/scamTypes';
import formatPhone from 'utils/formatPhone';

import theme from 'styles/theme';

import Button from 'components/Button';
import Currency from 'components/Currency';
import Label from 'components/Label';

const StyledEntry = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  border: 1px solid ${theme.B600};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);

  .Entry__emoji {
    display: inline-flex;
    margin-right: 8px;
    font-size: 20px;
  }

  .Entry__title {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background: ${theme.B400};
    border-bottom: 1px solid ${theme.B600};
    border-radius: 5px 5px 0 0;

    &-main {
      font-weight: 700;
      font-size: 18px;
      margin: 0 0 5px;
    }

    &-attrs {
      display: flex;
      flex-flow: row wrap;
      font-size: 12px;
    }

    &-attr {
      margin-right: 8px;

      &:last-child {
        margin: 0;
      }
    }

    &-left {
      margin-right: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-right {
      margin-left: auto;
      white-space: nowrap;
    }
  }

  .Entry__content {
    flex: 1 1 auto;
    padding: 15px;
    background: ${theme.B500};
    border-radius: 0 0 5px 5px;
  }

  .Entry__pre {
    white-space: pre-line;
  }

  .Entry__field {
    margin: 0 0 15px;

    &-empty {
      opacity: 0.5;
      font-size: 80%;
      font-style: italic;
    }

    &:last-child {
      margin: 0;
    }
  }

  .Entry__scrollable {
    max-height: 150px;
    overflow: auto;
  }

  .Entry__representative {
    border-bottom: 1px solid ${theme.B600};
    padding: 0 0 8px;
    margin: 0 0 8px;

    &-name {
      font-size: 14px;
      margin: 0 0 3px;
    }

    &-attr {
      font-size: 70%;
      margin: 0 0 2px;
    }

    &:last-child {
      border: none;
      margin: 0;
    }
  }
`;

const IconButton = styled(Button)`
  color: ${props => (props.color ? props.color : `inherit`)};
  transition: color 300ms;

  &:hover {
    color: ${props => (props.hover ? props.hover : `inherit`)};
  }
`;

const Entry = ({ details, editing, onBalanceAction, onChange, onCancel, onEdit, onRemove, onSave }) => {
  const {
    scamType,
    scamDate,
    phoneNumberScam,
    phoneNumberLocal,
    scamReps,
    scamAmount,
    scamReference,
    creditCard,
    notes,
    persona,
    duration,
  } = details;

  const momentDate = moment(scamDate, 'X');
  const hasScamReps = scamReps.filter(rep => rep.name.length > 0).length > 0;
  const personaFormatted = PERSONA_MAP[persona];
  const scamTypeFormatted = SCAM_MAP[scamType];

  return (
    <StyledEntry>
      <div className="Entry__title">
        <div className="Entry__title-left">
          <div className="Entry__title-main">
            {`${momentDate.format('MMMM Do, h:m A')}`} - {personaFormatted || 'N/A'}
          </div>
          <div className="Entry__title-attrs">
            <div className="Entry__title-attr">
              <strong>Type:</strong> {scamTypeFormatted || 'N/A'}
            </div>
            <div className="Entry__title-attr">
              <strong>Duration:</strong> {moment.duration(duration, 'milliseconds').format('hh:mm:ss', { trim: false })}
            </div>
          </div>
        </div>
        <div className="Entry__title-right">
          <IconButton icon="pencil-alt" hover="#bcbcbc" iconOnly transparent onClick={() => onEdit()} />
          <IconButton icon="trash-alt" hover={theme.red} iconOnly transparent onClick={() => onRemove(details)} />
        </div>
      </div>
      <div className="Entry__content">
        <div className="Entry__field">
          <Label>Scam Phone Number</Label>
          {phoneNumberScam ? formatPhone(phoneNumberScam) : <div className="Entry__field-empty">Not Specified</div>}
        </div>
        <div className="Entry__field">
          <Label>Boga Phone Number</Label>
          {phoneNumberLocal ? formatPhone(phoneNumberLocal) : <div className="Entry__field-empty">Not Specified</div>}
        </div>
        <div className="Entry__field">
          <Label>Scam Reference Number</Label>
          {scamReference || <div className="Entry__field-empty">Not Specified</div>}
        </div>
        <div className="Entry__field">
          <Label>Scammer(s)</Label>
          {!hasScamReps && <div className="Entry__field-empty">Not Specified</div>}
          {hasScamReps && (
            <div className="Entry__representatives Entry__scrollable">
              {scamReps.map(scamRep => (
                <div className="Entry__representative" key={scamRep.id}>
                  <div className="Entry__representative-name">
                    <strong>{scamRep.name}</strong>
                  </div>
                  {scamRep.employeeId && (
                    <div className="Entry__representative-attr">
                      <strong>Employee ID:</strong> {scamRep.employeeId}
                    </div>
                  )}
                  {scamRep.customerId && (
                    <div className="Entry__representative-attr">
                      <strong>Customer ID:</strong> {scamRep.customerId}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="Entry__field">
          <Label>Scam Amount Owed</Label>
          {!scamAmount && <div className="Entry__field-empty">Not Specified</div>}
          {scamAmount && <Currency quantity={parseFloat(scamAmount)} />}
        </div>
        <div className="Entry__field">
          <Label>Credit Card (Last 4)</Label>
          {creditCard || <div className="Entry__field-empty">Not Specified</div>}
        </div>
        <div className="Entry__field">
          <Label>Notes</Label>
          <div className="Entry__scrollable Entry__pre">
            {notes || <div className="Entry__field-empty">Not Specified</div>}
          </div>
        </div>
      </div>
    </StyledEntry>
  );
};

export default Entry;
