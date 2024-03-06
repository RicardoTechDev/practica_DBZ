import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page-component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
