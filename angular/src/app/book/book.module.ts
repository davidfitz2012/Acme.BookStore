import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    BookRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BookComponent,
  ]
})
export class BookModule { }
