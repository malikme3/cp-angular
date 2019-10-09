import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RrcpServicesService {
  constructor() {}

  fullStackContents: any[] = [
    {
      title: 'Front-end',
      details: `User expectations of Web and Mobile Applications have significantly
      increased in the last 10 years, and the sophistication of front-end development has increased to match it.
      You will study HTML5 and advanced CSS, and go beyond with modern technologies like typescript, Angular.`,
      keys: ['HTML5', 'SASS', 'TypeScript', 'Angular 8', 'ECMAScript 6'],
      expanded: true,
    },
    {
      title: 'Back-end',
      details: `You will take your JavaScript skills to the back-end, with Node.js
      and the amazing ecosystem of libraries that have made JavaScript the leader in next-generation back-end web engineering.
      You will master the use of APIs to connect to vast amounts of user data.`,
      keys: ['Node.Js', 'express', 'postman', 'lodash', 'git'],
      expanded: false,
    },
    {
      title: 'Databases',
      details: `You will master data persistence by building your own SQL/NoSQl database engine,
      learning about popular  databases like Postgres, MongoDb, and how to integrate these into your applications.`,
      keys: ['MongoDb', 'DynamoDb', 'MySQL'],
      expanded: false,
    },
  ];
}
