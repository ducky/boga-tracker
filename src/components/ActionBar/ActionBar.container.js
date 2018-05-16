import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ActionBar from './ActionBar';

class ActionBarContainer extends PureComponent {
  render() {
    return <ActionBar {...this.props} />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ActionBarContainer);
