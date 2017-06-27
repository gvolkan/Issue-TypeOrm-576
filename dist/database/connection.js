"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Person_1 = require("./entities/Person");
const options = {
    type: 'mssql',
    host: 'typeorm.database.windows.net',
    username: 'userAdmin',
    password: 'abcd1234!',
    database: 'typeorm',
    extra: { options: { encrypt: true } },
    logging: {
        logFailedQueryError: true,
        logQueries: true,
        logSchemaCreation: true,
        logOnlyFailedQueries: true
    },
    autoSchemaSync: false,
    entities: [Person_1.Person]
};
class OrmDatabase {
    getConnection() {
        return new Promise((resolve, reject) => {
            try {
                return resolve(typeorm_1.getConnection());
            }
            catch (e) {
                typeorm_1.createConnection(options).then(connection => {
                    return resolve(connection);
                }, (error) => {
                    console.log('error' + error);
                    return reject;
                });
            }
        });
    }
}
exports.OrmDatabase = OrmDatabase;
