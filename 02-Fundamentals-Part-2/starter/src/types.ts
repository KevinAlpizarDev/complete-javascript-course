export type fruitArgs = {
  fruit: number;
};

export type FruitProcessorArgs = {
  apples: number;
  oranges: number;
};

export type birthYearArgs = {
  birthYear: number;
  currentYear: number;
};

export type RetirementArgs = {
  now: number;
  birtYear: number;
  firstName: string;
};

export interface Person {
  firstName: string;
  lastName: string;
  birthYear: number;
  job: string;
  friends: string[];
  hasDriverLicense: boolean;
  age?: number;
  calcAge: () => number;
}
