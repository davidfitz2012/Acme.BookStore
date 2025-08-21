import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BookRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    BookComponent,
  ]
})
export class BookModule { }
