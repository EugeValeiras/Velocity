//Person Vocation
export enum Seniority {
    Jr,
    SSr,
    Sr,
    Guru,
    Crack
}

type Person = [string, Seniority];
const juan: Person = ['Juan', Seniority.Crack];
const pedro: Person = ['Pedro', Seniority['Jr']];

// console.log(juan);
// console.log(pedro);
// console.log('Seniority.Jr === 0 => ', Seniority.Jr === 0);
