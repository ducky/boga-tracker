import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import isFunction from 'lodash/isFunction';
import noop from 'lodash/noop';

import { actions } from 'modules/modal';

import Button from 'components/Button';
import { propTypes, defaultProps } from './ModalWrapper.statics';
import StyledModal, { ModalActions, ModalBackdrop } from './ModalWrapper.styled';

class ModalWrapper extends PureComponent {
  static defaultProps = defaultProps;
  static propTypes = propTypes;

  // Wrap Action with close event
  withClose = (action, useReduxCloseAction = false) => () => {
    const { id, close } = this.props;
    const modalAction = isFunction(action) ? action : noop;

    if (useReduxCloseAction) {
      modalAction();
    } else {
      modalAction();
      close(id);
    }
  };

  getCloseEvent = () => {
    const { cancelButton, onClose, onCancel, useCloseAction, useCancelAction } = this.props;
    return cancelButton ? this.withClose(onCancel, useCloseAction) : this.withClose(onClose, useCancelAction);
  };

  handleBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      const closeEvent = this.getCloseEvent();
      closeEvent();
    }
  };

  handleKeyPress = ({ keyCode }) => {
    if (keyCode === 27) {
      const closeEvent = this.getCloseEvent();
      closeEvent();
    }
  };

  onSubmit = e => {
    const { closeButton, onClose, onCancel, useCloseAction, useCancelAction } = this.props;
    e.preventDefault();

    if (closeButton) {
      this.withClose(onClose, useCloseAction);
    } else {
      this.withClose(onCancel, useCancelAction);
    }
  };

  getButtonType = (type = '') => ({
    alert: type === 'alert',
    info: type === 'info',
    success: type === 'success',
    default: type === 'default',
  });

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const {
      id,
      buttons,
      children,
      collapse,
      cancelText,
      closeText,
      cancelButton,
      closeButton,
      footNote,
      useCloseAction,
      useCancelAction,
      locked,
      theme,
      title,
      type,
      width,
      valid,
      onCancel,
      onClose,
      transitionEnter,
      transitionLeave,
    } = this.props;

    const modalButtons = [];

    if (closeButton) {
      modalButtons.push({
        action: onClose,
        useReduxAction: useCloseAction,
        text: closeText,
        type: type || 'info',
        disabled: !valid,
      });
    }

    if (cancelButton) {
      modalButtons.push({
        action: onCancel,
        useReduxAction: useCancelAction,
        type: 'default',
        text: cancelText,
      });
    }

    const modalActions = [...buttons, ...modalButtons];

    return (
      <ModalBackdrop
        key={id}
        onClick={!locked ? this.handleBackgroundClick : noop}
        theme={theme}
        transitionEnter={transitionEnter}
        transitionLeave={transitionLeave}
      >
        <StyledModal
          className="Modal"
          style={{ width: width ? `${width}px` : '100%' }}
          type={type}
          collapse={collapse}
          theme={theme}
          transitionEnter={transitionEnter}
          transitionLeave={transitionLeave}
        >
          <form noValidate onSubmit={this.onSubmit}>
            {title && <div className="Modal__header">{title}</div>}
            <div className="Modal__content">{children}</div>
            {modalActions.length > 0 && (
              <div className="Modal__footer">
                <ModalActions className="Modal__actions" length={modalActions.length}>
                  {modalActions.map(({ action, type, text, useReduxAction, ...props }, i) => (
                    <Button
                      className="Modal__action"
                      key={i}
                      onClick={this.withClose(action, useReduxAction)}
                      {...this.getButtonType(type)}
                      {...props}
                    >
                      {text}
                    </Button>
                  ))}
                  <button disabled={!valid} style={{ display: 'none' }} type="submit" />
                </ModalActions>
              </div>
            )}
            {footNote && <div className="Modal__footNote">{footNote}</div>}
          </form>
        </StyledModal>
      </ModalBackdrop>
    );
  }
}

export default connect(null, { close: actions.closeModal })(ModalWrapper);
