import {Component, OnInit} from '@angular/core';
import {User} from '../domain/user';
import {AlertService} from '../service/alert.service';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  model: any = {};

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    let usr: User;
    this.userService.finduseremail()
      .subscribe(data => {
        usr = data;
        this.model.email = usr.email;
      });

    this.model.password = '';
    this.model.newpassword = '';
  }

  updateInfo() {
    const user: User = this.model;
    user.email = user.email.toLowerCase();
    this.userService.update(user)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Update successful', true);
          this.router.navigate(['/search']);
        },
        error => {
          this.alertService.error(error.error);
        });
  }

}
