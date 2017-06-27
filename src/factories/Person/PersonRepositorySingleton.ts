
import { PersonRepository } from "../../database/repositories/PersonRepository";

export class PersonRepositorySingleton {
  private static instance: PersonRepository;

  constructor() { }

  static get Instance(): PersonRepository {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new PersonRepository();
    }
    return this.instance;
  }
}