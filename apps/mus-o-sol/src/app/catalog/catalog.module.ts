import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryComponent } from './category/category.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CategoryComponent,
    ExhibitComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule,
  ],
})
export class CatalogModule {}
