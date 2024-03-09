import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; //Para crear ids aleatorios unicos, https://www.npmjs.com/package/uuid

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  constructor() { }

  addCharacter(character: Character):void {
    //con ...character  recuperamos todas las otras propiedades de character sin tener que nombrarlas una a una
    let NewCharacter = {id: uuid(), ...character };
    this.characters.push(NewCharacter);
  }

  deleteCharacterById(id:string):void {
    this.characters = this.characters.filter( character => character.id !== id);
  }
}
