import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { DetailComponent } from './users/detail/detail.component';

const routes: Routes = [
  {path: 'home', component: ListComponent},
  {path: 'user/:id', component: DetailComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
