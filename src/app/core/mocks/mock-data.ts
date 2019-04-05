import { County } from '../models/county';
import { Agency } from '../models/agency';
import { Program } from '../models/program';
import { Client } from '../models/client';
import { Survey } from '../models/survey';
import { Trauma } from '../models/trauma';

export const COUNTIES: County[] = [
  { id: 1, name: 'County 1' },
  { id: 2, name: 'County 2' },
  { id: 3, name: 'County 3' },
  { id: 4, name: 'County 4' },
];

export const AGENCIES: Agency[] = [
  { id: 1, name: 'Agency 1' },
  { id: 2, name: 'Agency 2' },
  { id: 3, name: 'Agency 3' },
  { id: 4, name: 'Agency 4' },
];

export const PROGRAMS: Program[] = [
  {
    id: 1,
    name: 'Family Reunification',
    state: 'Program 1 State',
    address: 'Program 1 Address',
    busAccessible: false,
    metroAccessible: false,
    description: 'Program 1 descripton'
  },
  {
    id: 2,
    name: 'Substance Abuse & Preventation',
    state: 'Program 2 State',
    address: 'Program 2 Address',
    busAccessible: false,
    metroAccessible: false,
    description: 'Program 2 descripton'
  },
  {
    id: 3,
    name: 'Foster Care',
    state: 'Program 3 State',
    address: 'Program 3 Address',
    busAccessible: false,
    metroAccessible: false,
    description: 'Program 3 descripton'
  },
  {
    id: 4,
    name: 'Intensive Outpatient Counseling',
    state: 'Program 4 State',
    address: 'Program 4 Address',
    busAccessible: false,
    metroAccessible: false,
    description: 'Program 4 descripton'
  },
];

export const CLIENTS: Client[] = [
  {
    id: 1,
    caseId: 1,
    firstName: 'Julienne',
    lastName: 'Forbes',
    middleName: '',
    address: '38514 Brickson Park Hill',
    city: 'Spokane',
    zipCode: '99260',
    state: 'Washington',
    dateOfBirth: '11/15/2002',
    picture: 'assets/clients-pictures/client1.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },
  {
    id: 2,
    caseId: 2,
    firstName: 'Levon',
    lastName: 'Course',
    middleName: '',
    address: '86 Clarendon Way',
    city: 'Lansing',
    zipCode: '48901',
    state: 'Michigan',
    dateOfBirth: '12/30/1994',
    picture: 'assets/clients-pictures/client2.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 3,
    caseId: 3,
    firstName: 'Pincas',
    lastName: 'Seeking',
    middleName: '',
    address: '1082 Chive Center',
    city: 'Cleveland',
    zipCode: '44105',
    state: 'Ohio',
    dateOfBirth: '12/16/1990',
    picture: 'assets/clients-pictures/client3.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 4,
    caseId: 4,
    firstName: 'Valentin',
    lastName: 'Landrieu',
    middleName: '',
    address: '429 Mcbride Court',
    city: 'Southfield',
    zipCode: '48076',
    state: 'Michigan',
    dateOfBirth: '1/1/2001',
    picture: 'assets/clients-pictures/client4.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 5,
    caseId: 5,
    firstName: 'Gregorio',
    lastName: 'Enrich',
    middleName: '',
    address: '3 Dahle Avenue',
    city: 'Sioux Falls',
    zipCode: '57105',
    state: 'South Dakota',
    dateOfBirth: '3/21/1996',
    picture: 'assets/clients-pictures/client5.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 6,
    caseId: 6,
    firstName: 'Dulci',
    lastName: 'McPhelimey',
    middleName: '',
    address: '9741 Mccormick Way',
    city: 'Huntington',
    zipCode: '25711',
    state: 'West Virginia',
    dateOfBirth: '9/21/2006',
    picture: 'assets/clients-pictures/client6.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 7,
    caseId: 7,
    firstName: 'Rutledge',
    lastName: 'Grishenkov',
    middleName: '',
    address: '170 Sage Pass',
    city: 'San Antonio',
    zipCode: '78230',
    state: 'Texas',
    dateOfBirth: '10/5/2004',
    picture: 'assets/clients-pictures/client7.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 8,
    caseId: 8,
    firstName: 'Lauretta',
    lastName: 'Place',
    middleName: '',
    address: '7087 Jay Center',
    city: 'Memphis',
    zipCode: '38168',
    state: 'Tennessee',
    dateOfBirth: '2/28/1991',
    picture: 'assets/clients-pictures/client8.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 9,
    caseId: 9,
    firstName: 'Thacher',
    lastName: 'Stonnell',
    middleName: '',
    address: '7056 Tomscot Avenue',
    city: 'Trenton',
    zipCode: '8650',
    state: 'New Jersey',
    dateOfBirth: '1/22/1991',
    picture: 'assets/clients-pictures/client9.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 10,
    caseId: 10,
    firstName: 'Florie',
    lastName: 'Feldhammer',
    middleName: '',
    address: '5 Steensland Terrace',
    city: 'San Antonio',
    zipCode: '78220',
    state: 'Texas',
    dateOfBirth: '4/30/1995',
    picture: 'assets/clients-pictures/client10.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 11,
    caseId: 11,
    firstName: 'Cal',
    lastName: 'Lages',
    middleName: '',
    address: '9255 Sauthoff Pass',
    city: 'Fort Wayne',
    zipCode: '46825',
    state: 'Indiana',
    dateOfBirth: '11/15/1993',
    picture: 'assets/clients-pictures/client11.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

  {
    id: 12,
    caseId: 12,
    firstName: 'Claudia',
    lastName: 'Siggins',
    middleName: '',
    address: '969 7th Way',
    city: 'Baltimore',
    zipCode: '21282',
    state: 'Maryland',
    dateOfBirth: '3/26/2008',
    picture: 'assets/clients-pictures/client12.jpg',
    traumas: [
      { name: 'Domestic Violence' },
      { name: 'Sexual Violence' },
      { name: 'Drug Abuse' },
      { name: 'Childhood Toxic Stress' },
    ],
    recommended_programs: [
      {
        category: 'Bus Accessible',
        options: [
          { name: 'First-time Homebuyers', min: 5, average_fair: '3.43' },
          { name: 'Credit Counseling', min: 10, average_fair: '7.43' }
        ]
      },
      {
        category: 'Non-public transportation',
        options: [
          { name: 'Chabad Movement Recovery', min: 30, average_fair: '40.50 ' },
        ]
      },
    ],
    programs_history: [
      {
        year: '2019',
        programs: [
          {
            enrollment_date: 'IN-PROGRESS',
            name: 'Family Reunification',
            percentage_positive: 10,
            percentage_negative: 70,
            percentage_neutral: 20,
          }
        ]
      },
      {
        year: '2018',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Substance Abuse & Preventation',
            percentage_positive: 90,
            percentage_negative: 5,
            percentage_neutral: 5,
          },
          {
            enrollment_date: '05/13/18 - 8/16/18',
            name: 'Foster Care',
            percentage_positive: 82,
            percentage_negative: 8,
            percentage_neutral: 10,
          },
          {
            enrollment_date: '03/15/18 - 09/15/18',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 75,
            percentage_negative: 23,
            percentage_neutral: 2,
          },
        ]
      },
      {
        year: '2017',
        programs: [
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 60,
            percentage_negative: 45,
            percentage_neutral: 5,
          },
          {
            enrollment_date: 'INCOMPLETED',
            name: 'Intensive Outpatient Counseling',
            percentage_positive: 30,
            percentage_negative: 63,
            percentage_neutral: 7,
          }
        ]
      },
    ]
  },

];

export const SURVEYS: Survey[] = [
  {
    id: 1,
    name: 'Survey 1',
    description: 'Survey 1 descripton',
    link: 'https://bit.ly/2Eq3RnB'
  },
  {
    id: 2,
    name: 'Survey 2',
    description: 'Survey 2 descripton',
    link: 'https://bit.ly/2Eq3RnA'
  },
];

export const STATES = [
  { id: 1, name: 'State 1' },
  { id: 2, name: 'State 2' },
  { id: 3, name: 'State 3' },
  { id: 4, name: 'State 4' },
];

export const COMMENTS = [
  { id: 1, date: '1/9/2019', autor: 'Erica Bledsoe (Case Worker)', subtitle1: 'Question 1', content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', subtitle2: 'Question 2', content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isExpanded: false },
  { id: 2, date: '1/9/2019', autor: 'Erica Bledsoe (Case Worker)', subtitle1: 'Question 1', content1: 'This is a short comment', subtitle2: 'Question 2', content2: 'This is a short comment', isExpanded: false },
  { id: 3, date: '1/9/2019', autor: 'Erica Bledsoe (Case Worker)', subtitle1: 'Question 1', content1: 'This is a short comment', subtitle2: 'Question 2', content2: 'This is a short comment', isExpanded: false },
  { id: 4, date: '1/9/2019', autor: 'Erica Bledsoe (Case Worker)', subtitle1: 'Question 1', content1: 'This is a short comment', subtitle2: 'Question 2', content2: 'This is a short comment', isExpanded: false },
];

export const PERMISSIONS = [
  // tslint:disable-next-line:max-line-length
  { id: 1, Name: 'Larry Lindsey', Designation: 'Director', Telephone: '(000) 123456', Extension: '1234', Email: 'LarryLindsay@email.com', isEdited: false },
  // tslint:disable-next-line:max-line-length
  { id: 1, Name: 'Larry Lindsey', Designation: 'Director', Telephone: '(000) 123456', Extension: '1234', Email: 'LarryLindsay@email.com', isEdited: false }
  // tslint:disable-next-line:max-line-length
  // { id: 1, Name: 'Larry Lindsey', Designation: 'Director', Telephone: '(000) 123456', Extension: '1234', Email: 'LarryLindsay@email.com', isEdited: false },
  // tslint:disable-next-line:max-line-length
  // { id: 1, Name: 'Larry Lindsey', Designation: 'Director', Telephone: '(000) 123456', Extension: '1234', Email: 'LarryLindsay@email.com', isEdited: false }
];
