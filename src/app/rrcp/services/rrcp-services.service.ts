import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RrcpServicesService {
  constructor() {}

  fullStackContents: any[] = [
    {
      title: 'Front Teir',
      details: `Starting from html/css/javascript biggners ,
         to advance javascript and Angular as primary framework`,
      keys: ['HTML5', 'SASS', 'TypeScript', 'Angular 8', 'ECMAScript 6'],
      expanded: false,
    },
    {
      title: 'Middle Teir',
      details: `Starting from html/css/javascript biggners ,
         to advance javascript and Angular as primary framework`,
      keys: ['Node.Js', 'express', 'postman', 'lodash', 'git'],
      expanded: false,
    },
    {
      title: 'Back End Teir',
      details: `starting from html/css/javascript biggners ,
         to advance javascript and Angular as primary framework`,
      keys: ['MongoDb', 'DynamoDb', 'MySQL'],
      expanded: false,
    },
  ];
}
