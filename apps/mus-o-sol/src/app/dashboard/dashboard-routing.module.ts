import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateExhibitComponent } from './create-exhibit/create-exhibit.component';
import { EditExhibitComponent } from './edit-exhibit/edit-exhibit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'exhibit/create', component: CreateExhibitComponent },
  { path: 'exhibit/edit/:id', component: EditExhibitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
