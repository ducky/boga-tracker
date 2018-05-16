import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { actions } from 'modules/entries';
import { actions as modalActions } from 'modules/modal';

import EntryEditable from './EntryEditable';

class EntryEditableContainer extends PureComponent {
  onEdit = () => {
    this.props.showModal('scamEntry', {
      details: this.props.details,
      closeText: `Update Scam Entry`,
      onClose: entry => this.props.onSave(entry),
    });
  };

  onRemove = item => {
    const momentDate = moment(item.scamDate, 'X');

    this.props.showModal('confirm', {
      type: 'alert',
      title: `Delete Call Entry`,
      message: `Are you sure you want to delete the call entry from ${momentDate.format('MMMM Do [at] h:m A')}?`,
      closeText: `Yes, Delete`,
      cancelText: `No, Nevermind`,
      onClose: () => this.props.onRemove(item),
    });
  };

  render() {
    return <EntryEditable details={this.props.details} onEdit={this.onEdit} onRemove={this.onRemove} />;
  }
}

export default connect(null, {
  onRemove: actions.deleteEntry,
  onSave: actions.saveEntry,
  showModal: modalActions.showModal,
})(EntryEditableContainer);
