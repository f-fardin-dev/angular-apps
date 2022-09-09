import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  { path: 'todo-page', component: TodoPageComponent },
  { path: '', redirectTo: 'todo-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
