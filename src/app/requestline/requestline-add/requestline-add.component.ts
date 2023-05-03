import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-add',
  templateUrl: './requestline-add.component.html',
  styleUrls: ['./requestline-add.component.css']
})
export class RequestlineAddComponent {

  requestline!: Requestline;
  pageTitle= "Add New Request Line";

  constructor(
    private reqlSvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.reqlSvc.add(this.requestline).subscribe({
      next: (res)=> {
        console.debug("Request Line added!");
        this.router.navigateByUrl("/requestline/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }
}
