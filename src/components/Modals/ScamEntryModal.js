import React, { PureComponent } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import uuid from 'uuid/v4';

import PERSONAS from 'constants/personas';
import SCAM_TYPES from 'constants/scamTypes';
import changeMethod from 'utils/changeMethod';
// import theme from 'styles/theme';

import Columns from 'components/Columns';
import Input from 'components/Input';
import ScamReps from 'components/ScamReps';
import Select from 'components/Select';
import Textarea from 'components/Textarea';
import Timer from 'components/Timer';
import ModalWrapper from './ModalWrapper';

const Header = styled.div`
  display: flex;
  align-items: center;

  .Header__left {
    margin-right: 20px;
  }

  .Header__right {
    margin-left: auto;
  }
`;

const Details = styled.div`
  margin: 0 0 20px;

  .Details__title {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 8px;
  }

  .Details__field {
    margin: 0 0 20px;

    &:last-child {
      margin: 0;
    }
  }
`;

class ScamEntryModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: uuid(),
      duration: 0,
      scamType: '',
      scamDate: moment().format('X'),
      scamReference: '',
      scamReps: [{ id: uuid(), name: '', employeeId: '', customerId: '' }],
      scamAmount: '',
      phoneNumberScam: '',
      phoneNumberLocal: '',
      persona: '',
      creditCard: '',
      notes: '',
      ...props.details,
    };
  }

  onClose = () => {
    this.props.onClose(this.state);
  };

  onChange = (name, value) => {
    this.setState(state => ({
      [name]: value,
    }));
  };

  render() {
    const { scamType, details, ...props } = this.props;
    const momentDate = moment(this.state.scamDate, 'X');

    return (
      <ModalWrapper
        {...props}
        width={750}
        locked={true}
        valid={true}
        title={
          <Header>
            <div className="Header__left">{`Call on ${momentDate.format('MMMM Do [at] h:m A')}`}</div>
            <div className="Header__right">
              <Timer onChange={changeMethod(this.onChange, 'duration')} value={this.state.duration} />
            </div>
          </Header>
        }
        onClose={this.onClose}
      >
        <Details>
          <div className="Details__field">
            <Columns span="2">
              <Select
                label="Scam Type"
                name="scamType"
                options={SCAM_TYPES}
                onChange={changeMethod(this.onChange)}
                value={this.state.scamType}
              />
              <Select
                label="Persona Used"
                name="persona"
                options={PERSONAS}
                onChange={changeMethod(this.onChange)}
                value={this.state.persona}
              />
            </Columns>
          </div>
          <div className="Details__field">
            <Columns span="2">
              <Input
                label="Scam Phone Number"
                name="phoneNumberScam"
                onChange={changeMethod(this.onChange)}
                value={this.state.phoneNumberScam}
              />
              <Input
                label="Boga Phone Number"
                name="phoneNumberLocal"
                onChange={changeMethod(this.onChange)}
                value={this.state.phoneNumberLocal}
              />
            </Columns>
          </div>
          <div className="Details__field">
            <Input
              label="Scam Reference Number"
              name="scamReference"
              onChange={changeMethod(this.onChange)}
              value={this.state.scamReference}
            />
          </div>
          <div className="Details__field">
            <Columns span="2">
              <Input
                label="Scam Amount Owed"
                name="scamAmount"
                onChange={changeMethod(this.onChange)}
                value={this.state.scamAmount}
              />
              <Input
                label="Credit Card (Last 4)"
                name="creditCard"
                onChange={changeMethod(this.onChange)}
                value={this.state.creditCard}
              />
            </Columns>
          </div>
          <div className="Details__field">
            <ScamReps onChange={changeMethod(this.onChange, 'scamReps')} value={this.state.scamReps} />
          </div>
          <div className="Details__field">
            <Textarea label="Notes" name="notes" onChange={changeMethod(this.onChange)} value={this.state.notes} />
          </div>
        </Details>
      </ModalWrapper>
    );
  }
}

export default ScamEntryModal;
