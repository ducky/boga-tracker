import isNumber from 'lodash/isNumber';
import { toNumber } from 'utils/number';

export const validEntry = entry => {
  return (
    [
      // entry.name.length > 0,
      // entry.type.length > 0,
      // isNumber(toNumber(entry.current)),
      // isNumber(toNumber(entry.starting))
    ].filter(v => !v).length === 0
  );
};
