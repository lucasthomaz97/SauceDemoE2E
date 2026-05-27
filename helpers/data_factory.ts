const { faker } = require('@faker-js/faker');

export class DataFactory {
  constructor() {
    faker.seed(123);
  }

  createFirstName(): string {
    return faker.person.firstName();
  }

  createLastName(): string {
    return faker.person.lastName();
  }

  createPostalCode(): string {
    return faker.location.zipCode('#####-###');
  }
}