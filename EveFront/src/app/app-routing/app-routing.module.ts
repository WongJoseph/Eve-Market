import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from '../search/search.component';
import {CartComponent} from '../cart/cart.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
