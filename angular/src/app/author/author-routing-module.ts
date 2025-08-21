import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Author } from './author';

const routes: Routes = [{ path: '', component: Author }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
