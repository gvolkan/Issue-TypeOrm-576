import "reflect-metadata";
import { createConnection, ConnectionOptions, Connection, getConnection } from "typeorm";
import { Person } from "./entities/Person";


const options: ConnectionOptions = {
  type: 'mssql', // or "pg" or "sqlite3"
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
  entities: [Person]
};

export class OrmDatabase {
  getConnection(): Promise<Connection> {
    return new Promise<Connection>((resolve, reject) => {
      try {
        return resolve(getConnection());
      } catch (e) {
        createConnection(options).then(connection => {
          return resolve(connection);
        }, (error) => {
          console.log('error' + error);
          return reject
        })
      }
    })
  }
}
