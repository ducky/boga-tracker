const STORAGE_KEY_ENTRIES = 'BOGA_ENTRIES';

// Local Stuffs
export const fetchLocalEntries = async defaultEntries => {
  const entriesGet = localStorage.getItem(STORAGE_KEY_ENTRIES);
  return entriesGet ? JSON.parse(entriesGet) : defaultEntries;
};

export const saveLocalEntries = async entries => {
  const entriesSave = JSON.stringify(entries);
  localStorage.setItem(STORAGE_KEY_ENTRIES, entriesSave);
  return entries;
};
