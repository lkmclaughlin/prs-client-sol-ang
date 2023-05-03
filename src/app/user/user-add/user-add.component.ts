import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent {

  user: User= new User();
  pageTitle= "Add New User";

  constructor(
    private userSvc: UserService,
    private router: Router
  ) {}

  save(): void {
    this.userSvc.add(this.user).subscribe({
      next: (res)=> {
        console.debug("User added!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }
}
