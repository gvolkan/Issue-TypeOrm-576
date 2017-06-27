"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AbstractRepository_1 = require("typeorm/repository/AbstractRepository");
const Person_1 = require("../entities/Person");
/**
 * First type of custom repository - extends abstract repository.
 */
let PersonRepository = class PersonRepository extends AbstractRepository_1.AbstractRepository {
    save(person) {
        return this.manager.save(person);
    }
};
PersonRepository = __decorate([
    typeorm_1.EntityRepository(Person_1.Person)
], PersonRepository);
exports.PersonRepository = PersonRepository;
