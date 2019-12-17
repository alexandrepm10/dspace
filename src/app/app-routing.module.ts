import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemsDetailComponent} from './items-detail/items-detail.component';
import {CommunitiesComponent} from './communities/communities.component';
import {CollectionsComponent} from './collections/collections.component';
import {NewsComponent} from './news/news.component';
import {NewsDetailsComponent} from './news-details/news-details.component';
import {ItemsSearchComponent} from './items-search/items-search.component';
import {BackofficeHomeComponent} from './backoffice/home/home.component';
import {LoginComponent} from './backoffice/login/login.component';
import {CreateNewsComponent} from './backoffice/create-news/create-news.component';
import {EditNewsComponent} from './backoffice/edit-news/edit-news.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items-list/:uuid', component: ItemsListComponent},
  {path: 'items-list', component: ItemsListComponent},
  {path: 'itemsdetail/:uuid', component: ItemsDetailComponent},
  {path: 'communities', component: CommunitiesComponent},
  {path: 'collections/:uuid', component: CollectionsComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'admin', component: BackofficeHomeComponent},
  {path: 'adminlogin', component: LoginComponent},
  {path: 'noticias', component: NewsComponent},
  {path: 'noticias/1', component: NewsDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'items-search/:queryVal', component: ItemsSearchComponent},
  {path: 'items-search/:queryVal/:queryField', component: ItemsSearchComponent},
  {path: 'create-news', component: CreateNewsComponent},
  {path: 'edit-news/:id', component: EditNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
