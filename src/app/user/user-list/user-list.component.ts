import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  
  pageTitle= "List of Users";
  users: User[]= [];

  constructor(
    private sys: SystemService,
    private userSvc: UserService
  ) {}
  
  ngOnInit(): void{
    if(this.sys.loggedInUser !== null) {
      console.log("A user is logged in!");
    } else {
      console.log("No users are logged in.")
    }
    this.userSvc.list().subscribe({
      next: (res)=> {
        console.debug("Users:", res);
        this.users= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }
}
