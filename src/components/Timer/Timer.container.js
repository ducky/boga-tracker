import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import noop from 'lodash/noop';
import moment from 'moment';

import { actions as modalActions } from 'modules/modal';

import Timer from './Timer';

class TimerContainer extends PureComponent {
  static defaultProps = {
    onChange: noop,
  };

  state = {
    duration: this.props.value || 0,
    isRunning: false,
    startTime: null,
  };

  onTick = () => {
    this.setState(
      state => {
        const currentTime = moment();
        return {
          duration: state.duration + currentTime.diff(moment(state.startTime, 'x'), 'ms'),
          startTime: currentTime.format('x'),
        };
      },
      () => this.props.onChange(this.state.duration)
    );
  };

  onStart = () => {
    clearInterval(this.timer);
    this.setState(
      state => ({
        isRunning: true,
        startTime: moment().format('x'),
      }),
      () => {
        this.onTick();
        this.timer = setInterval(this.onTick, 100);
      }
    );
  };

  onStop = item => {
    const stopTimer = () => {
      clearInterval(this.timer);
      this.setState(
        state => ({
          isRunning: false,
        }),
        () => this.props.onChange(this.state.duration)
      );
    };

    stopTimer();
  };

  onReset = item => {
    const resetTimer = () => {
      this.setState(
        state => ({
          duration: 0,
          startTime: moment().format('x'),
        }),
        () => this.props.onChange(this.state.duration)
      );
    };

    this.props.showModal('confirm', {
      type: 'alert',
      title: `Reset Timer`,
      message: `Are you sure you want to reset the timer?`,
      closeText: `Yes, Reset`,
      cancelText: `No, Nevermind`,
      onClose: resetTimer,
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(state => ({
      duration: nextProps.value || 0,
    }));
  }

  render() {
    const { duration, isRunning } = this.state;
    return (
      <Timer
        duration={duration}
        isRunning={isRunning}
        onStart={this.onStart}
        onStop={this.onStop}
        onReset={this.onReset}
      />
    );
  }
}

export default connect(null, {
  showModal: modalActions.showModal,
})(TimerContainer);
