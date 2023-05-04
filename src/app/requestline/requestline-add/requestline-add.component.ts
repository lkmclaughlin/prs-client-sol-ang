import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-add',
  templateUrl: './requestline-add.component.html',
  styleUrls: ['./requestline-add.component.css']
})
export class RequestlineAddComponent {

  requestline: Requestline= new Requestline();
  products!: Product[];
  pageTitle= "Add New Request Line";

  constructor(
    private reqlSvc: RequestlineService,
    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.reqlSvc.add(this.requestline).subscribe({
      next: (res)=> {
        console.debug("Line added!");
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      error: (err)=> {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.requestline.requestId= +this.route.snapshot.params["id"];
    this.prodSvc.list().subscribe({
      next: (res)=> {
        console.debug("Products", res);
        this.products= res;
      },
      error: (err)=> {
        console.error(err);
      }
    });
  }
}
