import arrayToMap from './arrayToMap';

export const PERSONAS = [
  { label: '', value: '' },
  { label: 'Brochacho', value: 'brochacho' },
  { label: 'Chad', value: 'chad' },
  { label: 'Dixie', value: 'dixie' },
  { label: 'Granny Edna', value: 'edna' },
  { label: 'Jebidiah', value: 'jebidiah' },
  { label: 'Kitboga', value: 'kitboga' },
  { label: 'Nevaeh', value: 'nevaeh' },
  { label: 'Victor', value: 'victor' },
];

export const PERSONA_MAP = arrayToMap(PERSONAS);

export default PERSONAS;
