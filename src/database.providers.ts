/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CreateCourseTable1666879106427 } from './migrations/1666879106427-CreateCourseTable';
import { CreateTagsTable1666880364309 } from './migrations/1666880364309-CreateTagsTable';
import { CreateCoursesTagsTable1666882042291 } from './migrations/1666882042291-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1666882439552 } from './migrations/1666882439552-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1666882966033 } from './migrations/1666882966033-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: 'devtraining',
        entities: [__dirname + '/../**/*.model.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'devtraining',
  entities: [__dirname + '/../**/*.model.js'],
  synchronize: false,
  migrations: [
    CreateCourseTable1666879106427,
    CreateTagsTable1666880364309,
    CreateCoursesTagsTable1666882042291,
    AddCoursesIdToCoursesTagsTable1666882439552,
    AddTagsIdToCoursesTagsTable1666882966033,
  ],
});
