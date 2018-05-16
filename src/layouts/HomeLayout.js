import React, { Fragment } from 'react';

import EntryEditor, { EntryActions } from 'components/EntryEditor';

const HomeLayout = () => (
  <Fragment>
    <div className="Layout__actions">
      <EntryActions />
    </div>
    <div className="Layout__content">
      <EntryEditor />
    </div>
  </Fragment>
);

export default HomeLayout;
