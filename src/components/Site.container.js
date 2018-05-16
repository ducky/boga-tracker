import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class SiteContainer extends PureComponent {
  render() {
    return this.props.children;
  }
}

export default withRouter(SiteContainer);
