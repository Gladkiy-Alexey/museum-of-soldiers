import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuseumRoutingModule } from './museum-routing.module';
import { MuseumComponent } from './museum/museum.component';
import { MuseumMapComponent } from './museum-map/museum-map.component';
import { ExpositionComponent } from './exposition/exposition.component';
import { ExhibitComponent } from './exhibit/exhibit.component';

@NgModule({
  declarations: [
    MuseumComponent,
    MuseumMapComponent,
    ExpositionComponent,
    ExhibitComponent,
  ],
  imports: [CommonModule, MuseumRoutingModule],
})
export class MuseumModule {}
