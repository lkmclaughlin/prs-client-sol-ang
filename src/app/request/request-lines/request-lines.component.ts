import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from "../request.class";
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Requestline } from 'src/app/requestline/requestline.class';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {

  pageTitle= "Request Lines";
  request!: Request;
  requestlines!: Requestline;
  user!: User;
  sortColumn: string|undefined;
  sortAsc: boolean|undefined;

  constructor(
    private sys: SystemService,
    private reqSvc: RequestService,
    private route: ActivatedRoute
  ) {}

  review(): void {}

  remove(requestline: Requestline) {
  }

  ngOnInit(): void {
    let id= this.route.snapshot.params["id"];
    this.reqSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("Request:", res);
        this.request= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }
}