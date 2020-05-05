import { sortArray } from './tasks/1/sortingFunction.js';
import { Person } from './tasks/5/Person.js';

const person1 = new Person('John Doe', [4, 8, 15, 16, 23, 42], 'random comment');
person1.send();

const array = [1, 65, 3, 5, 400, 2200, -5, 0, 0, 500];
console.log(sortArray(array, 'asc'));
console.log(sortArray(array, 'desc'));
