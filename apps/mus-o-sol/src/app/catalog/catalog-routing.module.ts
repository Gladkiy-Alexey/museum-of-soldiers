import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { CategoryComponent } from './category/category.component';
import { ExhibitComponent } from './exhibit/exhibit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'search', component: SearchComponent },
  { path: 'category/:slug', component: CategoryComponent },
  { path: 'exhibit/:slug', component: ExhibitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
