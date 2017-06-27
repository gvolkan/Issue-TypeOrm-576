"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonServiceSingleton_1 = require("../factories/Person/PersonServiceSingleton");
const PersonSingleton_1 = require("../factories/Person/PersonSingleton");
module.exports = (app) => {
    let personService = PersonServiceSingleton_1.PersonServiceSingleton.Instance;
    app.route('/person').post((req, res, next) => {
        let personReq = req.body.Person;
        let person = PersonSingleton_1.PersonSingleton.Instance;
        person.firstName = personReq.firstName;
        person.lastName = personReq.lastName;
        console.log('person =>' + JSON.stringify(person));
        personService.save(person).then((sucess) => {
            console.log('sucess =>' + JSON.stringify(sucess));
            res.status(200).json({
                sucess
            });
        }).catch((errors) => {
            res.status(400).json({
                errors
            });
        });
    });
};
