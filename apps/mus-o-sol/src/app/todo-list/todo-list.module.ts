import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
];

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCheckboxModule,
  ]
})
export class TodoListModule { }
