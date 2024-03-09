import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {
@Input() public characterList: Character[] = [];
@Output() public onDeleteId: EventEmitter<string> = new EventEmitter();

onDeleteCharacter(id?: string):void {

  if(!id) return;//Si no viene id no se llama al onDeleteId.emit

  this.onDeleteId.emit(id);
}

}
