import { PersonServiceSingleton } from "../factories/Person/PersonServiceSingleton";
import { Person } from "../database/entities/Person";
import { PersonSingleton } from "../factories/Person/PersonSingleton";

module.exports = (app) => {
  let personService = PersonServiceSingleton.Instance;

  app.route('/person').post((req, res, next) => {

    let personReq = req.body.Person;
    let person = PersonSingleton.Instance;

    person.firstName = personReq.firstName;
    person.lastName = personReq.lastName;

    console.log('person =>'+ JSON.stringify(person));
    personService.save(person).then((sucess: Person) => {
      console.log('sucess =>'+ JSON.stringify(sucess));
      res.status(200).json({
        sucess
      });
    }).catch((errors) => {
      res.status(400).json({
        errors
      });
    });
  });
}