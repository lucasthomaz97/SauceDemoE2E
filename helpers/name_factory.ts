const { faker } = require('@faker-js/faker');

export class NameFactory {
  private faker: any;

  constructor() {
    this.faker = faker.newInstance({    seed: 123    });
  }

  createFirstName(): string {
    return this.faker.person.firstName();
  }

  createLastName(): string {
    return this.faker.person.lastName();
  }
}