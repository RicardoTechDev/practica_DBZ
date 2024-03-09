import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent implements OnInit {

  //Se dejo como public el service para tener accesp em el html
  constructor(public dbzService:DbzService) { }

  ngOnInit() { }

}
