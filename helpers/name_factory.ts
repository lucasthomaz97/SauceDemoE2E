const { faker } = require('@faker-js/faker');

export class NameFactory {
  constructor() {
    if (faker.seedValue === undefined) {
        faker.seed(123);
    }
  }

  static createFirstName(): string {
    return faker.person.firstName();
  }

  static createLastName(): string {
    return faker.person.lastName();
  }
}