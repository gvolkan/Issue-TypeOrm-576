"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("../../database/entities/Person");
class PersonSingleton {
    constructor() { }
    static get Instance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new Person_1.Person();
        }
        else {
            this.instance = new Person_1.Person();
        }
        return this.instance;
    }
}
exports.PersonSingleton = PersonSingleton;
