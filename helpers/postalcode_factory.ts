const { faker } = require('@faker-js/faker');

export class PostalCodeFactory {
  constructor() {
    if (faker.seedValue === undefined) {
        faker.seed(123);
    }
  }

  static createPostalCode(): string {
    return faker.location.zipCode({format: '#####-###'});
  }
}