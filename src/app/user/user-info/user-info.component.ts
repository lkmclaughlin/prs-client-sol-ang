import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent {
  
  user!: User;
  pageTitle= "User Information";
  showVerifyRemove: boolean= false;

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  remove(): void {
    this.showVerifyRemove= !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.userSvc.remove(this.user.id).subscribe({
      next: (res)=> {
        console.debug("User Removed!", res);
        this.router.navigateByUrl("/user/list");
      },
      error: (err)=> {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id= +this.route.snapshot.params["id"]; //or use: let id= Number(this.route.snapshot.params["id"]); 
    this.userSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("User:", res);
        this.user= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

}
