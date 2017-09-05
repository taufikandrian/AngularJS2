import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  name: 'Data 1 from api', email: 'data1@email.com' },
      { id: 11,  name: 'Data 2 from api', email: 'data2@email.com' },
      { id: 12,  name: 'Data 3 from api', email: 'data3@email.com' },
      { id: 13,  name: 'Data 4 from api', email: 'data4@email.com' },
      { id: 14,  name: 'Data 5 from api', email: 'data5@email.com' },
      { id: 15,  name: 'Data 6 from api', email: 'data6@email.com' },
      { id: 16,  name: 'Data 7 from api', email: 'data7@email.com' },
      { id: 17,  name: 'Data 8 from api', email: 'data8@email.com' },
      { id: 18,  name: 'Data 9 from api', email: 'data9email.com' },
      { id: 19,  name: 'Data 10 from api', email: 'data10@email.com' },
      { id: 20,  name: 'wimbaagra', email:'wimbaagra'}
    ];
    return {users};
  }
}