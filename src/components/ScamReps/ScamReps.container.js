import React, { PureComponent } from 'react';
import uuid from 'uuid/v4';

import { replaceItem, removeItem } from 'utils/array';

import ScamReps from './ScamReps';

class ScamRepsContainer extends PureComponent {
  state = {
    data: this.props.value || [],
  };

  createRep = () => ({
    id: uuid(),
    name: '',
    employeeId: '',
    customerId: '',
  });

  onAdd = () => {
    this.setState(
      state => ({
        data: replaceItem(state.data, this.createRep()),
      }),
      () => this.props.onChange(this.state.data)
    );
  };

  onChange = item => {
    this.setState(
      state => ({
        data: replaceItem(state.data, item),
      }),
      () => this.props.onChange(this.state.data)
    );
  };

  onRemove = item => {
    this.setState(
      state => ({
        data: removeItem(state.data, item),
      }),
      () => this.props.onChange(this.state.data)
    );
  };

  componentWillReceiveProps(nextProps) {
    this.setState(state => ({
      data: nextProps.value || [],
    }));
  }

  render() {
    const { data } = this.state;
    return <ScamReps scamReps={data} onAdd={this.onAdd} onChange={this.onChange} onRemove={this.onRemove} />;
  }
}

export default ScamRepsContainer;
