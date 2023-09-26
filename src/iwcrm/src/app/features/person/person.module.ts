import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [PersonListComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatCardModule,
    MatTableModule
  ]
})
export class PersonModule { }
