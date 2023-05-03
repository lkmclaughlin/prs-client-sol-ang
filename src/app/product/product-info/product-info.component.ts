import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})

export class ProductInfoComponent {

  product!: Product;
  pageTitle= "Product Details";
  showVerifyRemove: boolean= false;

  constructor(
    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.showVerifyRemove= !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.prodSvc.remove(this.product.id).subscribe({
      next: (res)=> {
        console.debug("Product Removed!", res);
        this.router.navigateByUrl("/product/list");
      },
      error: (err)=> {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id= +this.route.snapshot.params["id"];
    this.prodSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("Product:", res);
        this.product= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

}
