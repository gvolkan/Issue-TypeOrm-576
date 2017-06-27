
import { Person } from "../../database/entities/Person";

export class PersonSingleton {
  private static instance: Person;

  constructor() { }

  static get Instance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new Person();
    }
    else {
      this.instance = new Person();
    }
    return this.instance;
  }
}