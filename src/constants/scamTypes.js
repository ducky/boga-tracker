import arrayToMap from './arrayToMap';

export const SCAM_TYPES = [
  { label: '', value: '' },
  { label: 'IRS Scam', value: 'irs' },
  { label: 'Grant Scam', value: 'grant' },
  { label: 'Tech Support Scam', value: 'techSupport' },
];

export const SCAM_MAP = arrayToMap(SCAM_TYPES);

export default SCAM_TYPES;
