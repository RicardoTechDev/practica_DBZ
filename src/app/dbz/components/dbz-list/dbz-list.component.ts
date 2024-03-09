import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {
@Input() public characterList: Character[] = [];
@Output() public onDeleteId: EventEmitter<number> = new EventEmitter();

onDeleteCharacter(index: number):void {
  this.onDeleteId.emit(index);
}

}
