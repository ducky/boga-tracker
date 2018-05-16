const arrayToMap = arr => {
  return arr.reduce((obj, item) => {
    return { ...obj, [item.value]: item.label };
  }, {});
};

export default arrayToMap;
