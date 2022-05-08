import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MuseumComponent } from './museum/museum.component';
import { MuseumMapComponent } from './museum-map/museum-map.component';
import { ExpositionComponent } from './exposition/exposition.component';
import { ExhibitComponent } from './exhibit/exhibit.component';

const routes: Routes = [
  { path: '', component: MuseumComponent },
  { path: 'map/:slug', component: MuseumMapComponent },
  { path: 'exposition/:slug', component: ExpositionComponent },
  { path: 'exhibit/:slug', component: ExhibitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumRoutingModule {}
