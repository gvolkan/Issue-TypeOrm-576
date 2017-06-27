import { EntityRepository } from "typeorm";
import { AbstractRepository } from "typeorm/repository/AbstractRepository";
import { Person } from "../entities/Person";
import { SaveOptions } from "typeorm/repository/SaveOptions";


/**
 * First type of custom repository - extends abstract repository.
 */
@EntityRepository(Person)
export class PersonRepository extends AbstractRepository<Person> {

    save(person) {
        return this.manager.save(person);
    }
}