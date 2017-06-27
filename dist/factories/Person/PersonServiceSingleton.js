"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonService_1 = require("../../services/PersonService");
class PersonServiceSingleton {
    constructor() { }
    static get Instance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new PersonService_1.PersonService();
        }
        return this.instance;
    }
}
exports.PersonServiceSingleton = PersonServiceSingleton;
