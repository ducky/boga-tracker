import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Header from './Header';

class HeaderContainer extends PureComponent {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(HeaderContainer);
