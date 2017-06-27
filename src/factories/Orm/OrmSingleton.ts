import { OrmDatabase } from "../../database/connection";

export class OrmSingleton {
  private static instance: OrmDatabase;

  constructor() { }

  static get Instance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new OrmDatabase();
    }
    return this.instance;
  }
}