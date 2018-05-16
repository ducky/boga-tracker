import moment from 'moment';

export default [
  {
    id: 0,
    duration: 10482938,
    scamType: 'grant',
    scamDate: moment()
      .subtract(4, 'd')
      .format('X'),
    scamReference: '80085',
    scamReps: [{ id: 0, name: 'Felicia', employeeId: '69', customerId: '420' }],
    scamAmount: '699.99',
    phoneNumberScam: '1-888-FOR-SCAM',
    phoneNumberLocal: '867-5309',
    persona: 'edna',
    creditCard: '1337',
    notes: `She's out for my pecan sandies. Do not allow this.`,
  },
  {
    id: 1,
    duration: 9832938,
    scamType: 'techSupport',
    scamDate: moment()
      .subtract(6, 'd')
      .format('X'),
    scamReference: '80085',
    scamReps: [{ id: 0, name: 'Titus', employeeId: '69', customerId: '420' }],
    scamAmount: '299.99',
    phoneNumberScam: '1-888-GET-MEME',
    phoneNumberLocal: '867-5309',
    persona: 'nevaeh',
    creditCard: '1337',
    notes: `This man is downright rude.
    
    Looked at my nudes folder. Wouldn't follow me on instagram.
    
    Call back on Friday.`,
  },
];
