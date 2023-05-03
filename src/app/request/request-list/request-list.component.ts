import { Component } from '@angular/core';
import { Request } from "../request.class";
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent {
  
  pageTitle = "List of Requests";
  requests:Request[]=[];

  sortColumn: string= "id";
  sortAsc: any;

  constructor(
    private reqSvc:RequestService
  ) {}

  selectColumn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc= !this.sortAsc;
      return;
    }
    this.sortAsc= true;
    this.sortColumn= col;
  }

  review(request: Request): void {
    if(request.total <= 75) {
      request.status= "APPROVED";
    } else {
      request.status= "REVIEW";
    }
    this.reqSvc.edit(request).subscribe({
      next: (res)=> {
        console.debug("Request Reviewed");
        this.refresh();
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  refresh():void {
    this.reqSvc.list().subscribe({
      next:(res)=> {
        console.debug("request:", res);
        this.requests= res;
        for(let r of this.requests) {
          r.userName= r.user !== null ? r.userName : "No User";
        }
      },
      error:(err)=> {
        console.error(err);
      }
    });
  }

  ngOnInit():void {
    this.refresh();
  }
}