import { Connection } from 'typeorm';
import * as moment from 'moment';
import { User } from 'core/model/entities/user.entity';
import { values } from 'lodash';

const users = {  
  '180e9349-641f-4471-905b-7dc031c4e817': {
    id: '180e9349-641f-4471-905b-7dc031c4e817',
    insertId: 1,
    username: 'alice',
    firstName: 'Alice',
    lastName: 'Paquette',
    gender: 'FEMALE',
    password: '$2a$10$zcs2xITpoIU4t/wN.HpSROosdG1bdhA47u1J5knoEM1B3u4.7i15G', //alice    
    profilePhotoUrl: 'assets/images/3rdKid.jpg',
    dateOfBirth: moment()
      .subtract(9, 'years')
      .toDate(),
  }
};

export default async (connection: Connection): Promise<any> => {  
  const userRepository = connection.getRepository(User);  
  
  for (const userData of values(users)) {    
    const user = userRepository.create(userData);           

    await userRepository.save(user);
  }
};
