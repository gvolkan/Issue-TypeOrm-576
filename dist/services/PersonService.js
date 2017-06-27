"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonRepository_1 = require("../database/repositories/PersonRepository");
const OrmSingleton_1 = require("../factories/Orm/OrmSingleton");
class PersonService {
    save(person) {
        return new Promise((resolve, reject) => {
            OrmSingleton_1.OrmSingleton.Instance.getConnection().then((connection) => {
                connection.getCustomRepository(PersonRepository_1.PersonRepository).save(person).then((sucess) => {
                    return resolve(sucess);
                }).catch((error) => {
                    return reject(error);
                });
            }).catch((error) => {
                console.log(error);
            });
        });
    }
}
exports.PersonService = PersonService;
