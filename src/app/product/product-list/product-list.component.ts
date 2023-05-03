import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
// import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  pageTitle= "Products Offered";
  products: Product[]= [];
  // vendors: Vendor[]= [];

  constructor(
    private prodSvc: ProductService
  ) {}

  ngOnInit(): void{
    this.prodSvc.list().subscribe({
     next: (res)=> {
      console.debug("Products:", res);
      this.products= res as Product[];
     },
     error: (err)=> {
      console.error(err);
     }
    });
  }

}
