import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';
import noop from 'lodash/noop';

import { actions } from 'modules/toast';

import theme from 'styles/theme';

const DEFAULT_TIMEOUT = 4000;

const Toast = styled.div`
  position: relative;
  width: 400px;
  border-radius: 0;
  background: ${theme.B400};
  color: ${theme.font_primary};
  border-top: 10px solid ${theme.A500};
  padding: 20px 20px 35px;
  margin: 0 0 10px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: transform 300ms;

  ${props => props.type === 'alert' && `border-top: 10px solid ${theme.red}`};

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    content: 'click to close';
    text-align: center;
    padding: 8px;
    font-size: 10px;
    font-style: italic;
    color: ${theme.font_secondary};
  }

  &:hover {
    transform: translateY(-10px);
  }

  &:last-child {
    margin: 0;
  }

  &.toast-enter {
    transform: translateY(100%);
  }

  &.toast-enter.toast-enter-active {
    transform: translateY(0);
    transition: transform ${props => props.transitionEnter}, opacity ${props => props.transitionEnter};
  }

  &.toast-leave {
    transform: translateY(0);
  }

  &.toast-leave.toast-leave-active {
    transform: translateY(100%);
    transition: transform ${props => props.transitionLeave}, opacity ${props => props.transitionLeave};
  }

  .Toast__header {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    margin: 0 0 10px;
  }

  .Toast__content {
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    line-height: 1.5;

    p {
      margin: 0 0 15px;

      &:last-child {
        margin: 0;
      }
    }
  }
`;

class ToastWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.string]).isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
    timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

    // Methods
    close: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: '',
    type: 'info',
    timeout: DEFAULT_TIMEOUT,

    // Methods
    close: noop,
    onClose: noop,
  };

  startTimer = () => {
    const { onClose, timeout } = this.props;

    if (timeout !== false) {
      const parseTimeout = parseInt(timeout, 10);
      const computedTimeout = !isNaN(parseTimeout) ? parseTimeout : DEFAULT_TIMEOUT;
      this.timer = setTimeout(this.withClose(onClose), computedTimeout);
    }
  };

  stopTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  withClose = (action = noop) => () => {
    const { id, close } = this.props;

    action();
    close(id);
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const { children, theme, title, type, onClose, transitionEnter, transitionLeave } = this.props;

    return (
      <Toast
        type={type}
        theme={theme}
        onClick={this.withClose(onClose)}
        onMouseEnter={this.stopTimer}
        onMouseLeave={this.startTimer}
        transitionEnter={transitionEnter}
        transitionLeave={transitionLeave}
      >
        <div className="Toast__header">{title}</div>
        <div className="Toast__content">{children}</div>
      </Toast>
    );
  }
}

export default connect(null, { close: actions.closeToast })(ToastWrapper);
