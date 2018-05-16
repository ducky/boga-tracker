import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { selectors } from 'modules/modal';

import { stripTransition, TRANSITION_LIGHTNING, TRANSITION_FAST } from 'styles/theme';

import AlertModal from 'components/Modals/AlertModal';
import ScamEntryModal from 'components/Modals/ScamEntryModal';
import ConfirmModal from 'components/Modals/ConfirmModal';

const types = {
  alert: <AlertModal />,
  confirm: <ConfirmModal />,
  scamEntry: <ScamEntryModal />,
};

const ModalConductor = ({ modals = [] }) => {
  const getModalComponent = type => types[type] || null;

  return (
    <Fragment>
      <ReactCSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={stripTransition(TRANSITION_FAST)}
        transitionLeaveTimeout={stripTransition(TRANSITION_LIGHTNING)}
      >
        {modals.map(modal => {
          const Modal = getModalComponent(modal.type);

          return Modal
            ? React.cloneElement(Modal, {
                key: modal.id,
                id: modal.id,
                transitionEnter: TRANSITION_FAST,
                transitionLeave: TRANSITION_LIGHTNING,
                ...modal.options,
              })
            : null;
        })}
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

const stateToProps = state => ({
  modals: selectors.modals(state),
});

export default connect(stateToProps)(ModalConductor);
