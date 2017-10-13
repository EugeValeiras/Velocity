import {Seniority} from './4.enum';

class PersonClass {

    constructor(
        public name: string,
        public seniority: Seniority) { }

}

const pedro = new PersonClass('Pedro', Seniority.Crack);

console.log(pedro);