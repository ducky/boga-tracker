import React from 'react';
import styled from 'styled-components';
import sortBy from 'lodash/sortBy';

import { sortByDate } from 'utils/sorts';

import Entry from 'components/EntryEditable';
import EntryNew from './EntryNew';

const EntryGrid = styled.div`
  display: grid;
  flex: 1 1 auto;
  width: 100%;
  overflow: auto;
  padding: 10px;
  grid-area: Content;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const EntryEditor = ({ entries, disabled, onAdd, onRemove, onChange }) => {
  const currentEntrys = sortBy(entries.filter(d => !d.isNew), [sortByDate]);
  const newEntrys = entries.filter(d => d.isNew);

  return (
    <EntryGrid>
      {[...currentEntrys, ...newEntrys].map((entry, i) => <Entry key={entry.id} details={entry} />)}
      <EntryNew onClick={() => onAdd()} />
    </EntryGrid>
  );
};

export default EntryEditor;
