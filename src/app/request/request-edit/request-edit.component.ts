import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from "../request.class";
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent {
  pageTitle = "Edit Request";
  request!: Request;
  users!: User[];


  constructor(
    private reqSvc: RequestService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.request.userId = +this.request.userId;
    console.debug("B4:", this.request);
    this.reqSvc.edit(this.request).subscribe({
      next: (res) => {
        console.debug("Request edited!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
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
    let id = this.route.snapshot.params["id"];
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res)
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
