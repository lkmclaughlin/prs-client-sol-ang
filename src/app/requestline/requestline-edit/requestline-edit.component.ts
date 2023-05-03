import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})

export class RequestlineEditComponent {

  requestline!: Requestline;
  pageTitle= "Edit Request Lines";

  constructor(
    private reqlSvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.reqlSvc.edit(this.requestline).subscribe({
      next: (res)=> {
        console.debug("Request Line edited.");
        this.router.navigateByUrl("/requestline/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id= this.route.snapshot.params["id"];
    this.reqlSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("Requestline:", res)
        this.requestline= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

}
