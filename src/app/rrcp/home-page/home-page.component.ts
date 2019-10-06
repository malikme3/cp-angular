import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rrcp-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy {
  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  fullStackInfo = [
    {
      title: 'Front Teir',
      details: `Starting from html/css/javascript biggners ,
         to advance javascript and Angular as primary framework`,
      keys: ['HTML5', 'SASS', 'TypeScript', 'Angular 8', 'ECMAScript 6'],
      expanded: true,
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
  name;
  test() {
    alert(this.name);
  }
}
