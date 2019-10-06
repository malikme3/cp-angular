import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
})
export class AccordionComponent {
  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }
  fullStackInfo = [
    {
      title: 'Fron Teir',
      details: `Starting from html/css/javascript biggners ,
         to advance javascript and Angular as primary framework`,
      keys: `HTML5, CSS, SASS, TypeScript, Angular 8,
        JavaScript ECMAScript 6 `,
      expanded: true,
    },
    {
      title: 'Middler Teir',
      details: `Starting from html/css/javascript biggners ,
         to advance javascript and Angular as primary framework`,
      keys: `Node.Js, express, postman, lodash, git
        aws-lambda, aws-cloudWatch, aws-apigateWay `,
      expanded: false,
    },
    {
      title: 'BackEnd Teir',
      details: `starting from html/css/javascript biggners ,
         to advance javascript and Angular as primary framework`,
      keys: `MongoDb, DynamoDb, MySQL`,
      expanded: true,
    },
  ];
}
