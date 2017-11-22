import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {SearchItemService} from './search-item.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD:src/app/app.module.ts
import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
=======
import { DropdownDirective } from './dropdown.directive';
>>>>>>> 682fa51153b11d4246c7e364ff56b6920cc95651:EveFront/src/app/app.module.ts

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
<<<<<<< HEAD:src/app/app.module.ts
    CartComponent
=======
    DropdownDirective
>>>>>>> 682fa51153b11d4246c7e364ff56b6920cc95651:EveFront/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CollapseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      routes
    ),
  ],
  providers: [SearchItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
