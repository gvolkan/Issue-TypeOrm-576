import { PersonService } from "../../services/PersonService";

export class PersonServiceSingleton {
  private static instance: PersonService;

  constructor() { }

  static get Instance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new PersonService();
    }
    return this.instance;
  }
}