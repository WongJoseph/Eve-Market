import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService} from '../service/alert.service';
import {UserService} from '../service/user.service';


@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit{
  model: any = {};
  loading = false;

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.model.username = '';
    this.model.email = '';
    this.model.password = '';
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error.error);
          this.loading = false;
        });
  }
}
