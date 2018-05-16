import noop from 'lodash/noop';

/*
 Usage:
 <CustomComponent onChange={changeMethod(onSomeUpdate, 'someInput')} />
 <input name="someInput" onChange={changeMethod(onSomeUpdate)} />
 */
const changeMethod = (onChangeFn = noop, fieldName, ...ops) => evtOrValue => {
  // Simple Update
  
  if (fieldName) return onChangeFn(fieldName, evtOrValue, ...ops);

  // Invalid Input
  if (!evtOrValue.target) return console.error('You used changeMethod without a field name or input event!');

  // Input Update
  const target = evtOrValue.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  return onChangeFn(name, value, ...ops);
};

export default changeMethod;
