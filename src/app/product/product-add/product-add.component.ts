import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent {

  product: Product= new Product();
  vendors!: Vendor[];
  pageTitle= "Add New Product"

  constructor(
    private prodSvc: ProductService,
    private vendSvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.product.vendorId= Number(this.product.vendorId);
    this.prodSvc.add(this.product).subscribe({
      next: (res)=> {
        console.debug("Product added!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err)=> {
        console.error(err);
      }
    });
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
  }
}
