import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from 'modules/entries';
import { actions as modalActions } from 'modules/modal';

import EntryEditor from './EntryEditor';
import Loader from 'components/Loader';

class EntryEditorContainer extends PureComponent {
  onAdd = () => {
    const { showModal } = this.props;
    showModal('scamEntry', {
      closeText: `Create Scam Entry`,
      onClose: entry => this.props.onSave(entry),
    });
  };

  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    const { entries, loading, onRemove, onSave, onUpdate } = this.props;

    if (loading) return <Loader />;

    return <EntryEditor entries={entries} onAdd={this.onAdd} onRemove={onRemove} onSave={onSave} onChange={onUpdate} />;
  }
}

const mapStateToProps = state => ({
  entries: selectors.entries(state),
  loading: selectors.loading(state),
});

export default connect(mapStateToProps, {
  fetchEntries: actions.fetchEntries,
  onRemove: actions.removeEntry,
  onSave: actions.saveEntry,
  onUpdate: actions.updateEntry,
  showModal: modalActions.showModal,
})(EntryEditorContainer);
