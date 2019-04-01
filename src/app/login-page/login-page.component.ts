import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectManagerService } from 'src/app/services/project-manager.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public model: any = {
    email: "",
    password: ""
  };
  public users: any = [];

  constructor(
    private router: Router,
    private projectManagerSrvc: ProjectManagerService
  ) { }

  redirect() {
    console.log('inside redirect');
    if (this.checkIsUserExist()) {
      this.router.navigate(['list']);
    }
  }

  private checkIsUserExist(): boolean {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == this.model.email && this.users[i].password == this.model.password) {
        this.projectManagerSrvc.setCurrentUserId(this.users[i].id);
        this.projectManagerSrvc.logIn();
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.projectManagerSrvc.getUsers().subscribe(value => {
      console.log(value);
      this.users = value;
    });
  }

}
