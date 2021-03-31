import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import{TrendingComponent} from './trending/trending.component';
import{NotFoundComponent} from './not-found/not-found.component'
const routes: Routes = [
  {path: '', redirectTo:'/trending', pathMatch:'full'},
  {path: 'search', component: SearchComponent},
  {path: 'trending', component: TrendingComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 