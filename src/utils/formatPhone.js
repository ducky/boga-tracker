const formatPhone = phoneString => {
  const safeString = phoneString.replace(/[^0-9]/g, '');
  const [country, areaCode, three, four] = [
    safeString.slice(-11, -10),
    safeString.slice(-10, -7),
    safeString.slice(-7, -4),
    safeString.slice(-4),
  ];

  let phoneNumber = '';

  if (country) phoneNumber += `${country}-`;
  if (areaCode) phoneNumber += `${areaCode}-`;
  phoneNumber += `${three}-${four}`;

  return phoneNumber;
};

export default formatPhone;
