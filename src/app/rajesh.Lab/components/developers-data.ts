import { InMemoryDbService } from 'angular-in-memory-web-api';
export class DevelopersData implements InMemoryDbService {
    createDb() {
        let developers = [
            { id: 1, name: 'Vicky Gupta', age: 27, profession: 'SSD Engineer' },
            { id: 2, name: 'Rajesh Kumar', age: 25, profession: 'Software Engineer' },
            { id: 3, name: 'Tezendra Dahal', age: 24, profession: 'Trainer' },
        ];
        return { developers };
    }
}