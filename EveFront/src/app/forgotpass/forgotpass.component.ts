import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {AlertService} from "../service/alert.service";
import {User} from "../domain/user";

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  model: any = {};

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  forgotPass() {
    const user: User = this.model
    user.username = user.username.toLowerCase();
    this.userService.forgotPass(user)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Your password has been reset', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error.error);
        });
  }
}
