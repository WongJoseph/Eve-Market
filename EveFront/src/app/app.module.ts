import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';


import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {SearchItemService} from './service/search-item.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DropdownDirective} from './dropdown.directive';
import {CartComponent} from './cart/cart.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {UpdateCartService} from './service/update-cart.service';
import {RegisterComponent} from './register/register.component';
import {AlertComponent} from './alert/alert.component';
import {LoginComponent} from './login/login.component';
import {UserService} from './service/user.service';
import {AuthenticationService} from './service/authentication.service';
import {AlertService} from './service/alert.service';
import {AuthGuard} from './auth.guard';
import {EftComponent} from './eft/eft.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import {BuildService} from './service/build.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    DropdownDirective,
    CartComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    EftComponent,
    UpdateuserComponent,
    ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CollapseModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    SearchItemService,
    UpdateCartService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    BuildService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
