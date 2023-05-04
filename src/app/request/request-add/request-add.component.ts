import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent {

  request: Request= new Request();
  users!: User[];
  pageTitle= "Add New Request"

  constructor(
    private reqSvc: RequestService,
    private userSvc: UserService,
    private router: Router
  ) {}

  save(): void {
    this.reqSvc.add(this.request).subscribe({
      next: (res)=> {
        console.debug("Request added!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.userSvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
