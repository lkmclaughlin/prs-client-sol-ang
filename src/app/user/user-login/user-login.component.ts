import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {

  user!: User;
  username: string= "";
  password: string= "";
  message: string= "";

  constructor(
    private sys: SystemService,
    private userSvc:UserService,
    private router:Router
  ) {}
  
  login(): void {
    this.userSvc.login(this.username, this.password).subscribe({
      next: (res)=> {
        console.debug("Welcome",`${res.firstName}!`); 
        this.sys.loggedInUser= res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err)=> {
        if(err.status === 404) {
          this.message= "Username/Password NOT FOUND"
        } else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
    this.sys.loggedInUser= null;
  }

}
