import { Person } from "../database/entities/Person";
import { PersonRepositorySingleton } from "../factories/Person/PersonRepositorySingleton";
import { PersonSingleton } from "../factories/Person/PersonSingleton";
import { PersonRepository } from "../database/repositories/PersonRepository";
import { OrmSingleton } from "../factories/Orm/OrmSingleton";
import { PersonServiceSingleton } from "../factories/Person/PersonServiceSingleton";


export class PersonService {
  save(person) {
    return new Promise((resolve, reject) => {
      OrmSingleton.Instance.getConnection().then((connection) => {
        connection.getCustomRepository(PersonRepository).save(person).then((sucess) => {
          return resolve(sucess);
        }).catch((error) => {
          return reject(error);
        })
      }).catch((error) => {
        console.log(error);
      })
    });
  }
}