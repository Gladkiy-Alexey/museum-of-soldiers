import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuseumRoutingModule } from './museum-routing.module';
import { MuseumComponent } from './museum.component';

@NgModule({
  declarations: [MuseumComponent],
  imports: [CommonModule, MuseumRoutingModule],
})
export class MuseumModule {}
