import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?: string;
  public heroNames: string[] = [
    'Spiderman',
    'Iron Man',
    'Captain America',
    'Thor',
    'Wanda Maximoff',
    'The Hulk',
    'Black Widow',
    'Nick Fury',
    'Doctor Strange',
    'Vision',
    'War Machine',
    'Jarvis',
    'Rocket Raccoon',
    'Gamora'
  ];

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
