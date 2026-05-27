const { faker } = require('@faker-js/faker');

export class PostalCodeFactory {
  private faker: any;

  constructor() {
    this.faker = faker.newInstance({    seed: 123    });
  }

  createPostalCode(): string {
    return this.faker.location.zipCode({format: '#####-###'});
  }
}