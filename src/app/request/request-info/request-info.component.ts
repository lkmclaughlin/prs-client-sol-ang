import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from "../request.class";


@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})

export class RequestInfoComponent {

  request!: Request;
  pageTitle= "Request Information";
  showVerifyRemove: boolean= false;

  constructor(
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.showVerifyRemove= !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.reqSvc.remove(this.request.id).subscribe({
      next: (res)=> {
        console.debug("Request Removed!", res);
        this.router.navigateByUrl("/request/list");
      },
      error: (err)=> {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id= +this.route.snapshot.params["id"]; //or use: let id= Number(this.route.snapshot.params["id"]); 
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

