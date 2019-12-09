import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemsDetailComponent} from './items-detail/items-detail.component';
import {CommunitiesComponent} from './communities/communities.component';
import {CollectionsComponent} from './collections/collections.component';
import {ItemSearchComponent} from './item-search/item-search.component';
import {BackofficeHomeComponent} from './backoffice/home/home.component';
import {LoginComponent} from './backoffice/login/login.component';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items-list/:uuid', component: ItemsListComponent},
  {path: 'items-list', component: ItemsListComponent},
  {path: 'itemsdetail/:uuid', component: ItemsDetailComponent},
  {path: 'communities', component: CommunitiesComponent},
  {path: 'collections/:uuid', component: CollectionsComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'searchitem', component: ItemSearchComponent},
  {path: 'admin', component: BackofficeHomeComponent},
  {path: 'adminlogin', component: LoginComponent},
  {path: 'noticias', component: NewsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
