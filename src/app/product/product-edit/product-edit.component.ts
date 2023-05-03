import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent {

  product: Product= new Product();
  vendors!: Vendor[];
  pageTitle= "Edit Product Details"

  constructor(
    private prodSvc: ProductService,
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.product.vendorId= +this.product.vendorId;
    this.prodSvc.edit(this.product).subscribe({
      next: (res)=> {
        console.debug("Product edit successful!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit() {
    this.vendSvc.list().subscribe({
      next: (res)=> {
        console.debug("Vendors:", res);
        this.vendors= res;
      },
      error: (err)=> {
        console.error(err);
      }
    });
    let id= this.route.snapshot.params["id"];
    this.prodSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("Product:", res)
        this.product= res;
      },
      error: (err)=> {
        console.error(err);
      }
   })
  }
}
