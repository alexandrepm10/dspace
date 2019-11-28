import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemsDetailComponent} from './items-detail/items-detail.component';
import {CommunitiesComponent} from './communities/communities.component';
import {Collections} from './core/collections.model';
import {CollectionsComponent} from './collections/collections.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items-list/:uuid', component: ItemsListComponent},
  {path: 'items-list', component: ItemsListComponent},
  {path: 'itemsdetail/:uuid', component: ItemsDetailComponent},
  {path: 'communities', component: CommunitiesComponent},
  {path: 'collections/:uuid', component: CollectionsComponent},
  {path: 'collections', component: CollectionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
