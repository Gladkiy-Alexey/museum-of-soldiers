import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateExhibitComponent } from './create-exhibit/create-exhibit.component';
import { EditExhibitComponent } from './edit-exhibit/edit-exhibit.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateExhibitComponent,
    EditExhibitComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
