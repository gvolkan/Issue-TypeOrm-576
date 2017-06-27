"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonRepository_1 = require("../../database/repositories/PersonRepository");
class PersonRepositorySingleton {
    constructor() { }
    static get Instance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new PersonRepository_1.PersonRepository();
        }
        return this.instance;
    }
}
exports.PersonRepositorySingleton = PersonRepositorySingleton;
