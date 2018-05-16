import React from 'react';
import styled from 'styled-components';

import theme from 'styles/theme';

import Button from 'components/Button';
import Columns from 'components/Columns';
import Input from 'components/Input';

const StyledScamReps = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 0 15px;

  &:last-child {
    margin: 0;
  }

  .ScamReps__content {
    flex: 1 1 auto;
  }

  .ScamReps__empty {
    text-align: center;
    font-style: italic;
    opacity: 0.5;
    margin: 0 0 10px;
  }

  .ScamReps__representative {
    display: flex;
    align-items: center;
    margin: 0 0 20px;

    &-left {
      flex: 1 1 auto;
      margin-right: 10px;
    }

    &-right {
      flex: 0 0 auto;
    }

    &:last-child {
      margin: 0;
    }
  }

  .ScamReps__actions {
    text-align: center;
  }
`;

const IconButton = styled(Button)`
  color: ${props => (props.color ? props.color : `inherit`)};
  transition: color 300ms;

  &:hover {
    color: ${props => (props.hover ? props.hover : `inherit`)};
  }
`;

const ScamReps = ({ scamReps, onAdd, onChange, onRemove }) => {
  const onRepChange = rep => ({ target }) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    onChange({ ...rep, [name]: value });
  };

  return (
    <StyledScamReps>
      <div className="ScamReps__content">
        {scamReps.map(rep => (
          <div className="ScamReps__representative" key={rep.id}>
            <div className="ScamReps__representative-left">
              <Columns span="3">
                <Input label="Scammer Name" name="name" onChange={onRepChange(rep)} value={rep.name} />
                <Input label="Employee ID" name="employeeId" onChange={onRepChange(rep)} value={rep.employeeId} />
                <Input label="Customer ID" name="customerId" onChange={onRepChange(rep)} value={rep.customerId} />
              </Columns>
            </div>
            <div className="ScamReps__representative-right">
              <IconButton icon="trash-alt" hover={theme.red} iconOnly transparent onClick={() => onRemove(rep)} />
            </div>
          </div>
        ))}
        <div className="ScamReps__actions">
          <Button default onClick={onAdd}>
            Add Scammer
          </Button>
        </div>
      </div>
    </StyledScamReps>
  );
};

export default ScamReps;
