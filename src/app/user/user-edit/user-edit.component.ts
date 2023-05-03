import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent {

  user!: User;
  pageTitle= "Edit User Info";

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.userSvc.edit(this.user).subscribe({
      next: (res)=> {
        console.debug("User edited.");
        this.router.navigateByUrl("/user/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id= this.route.snapshot.params["id"];
    this.userSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("User:", res)
        this.user= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

}
