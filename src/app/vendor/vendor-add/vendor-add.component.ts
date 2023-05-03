import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})

export class VendorAddComponent {

  vendor: Vendor= new Vendor();
  pageTitle= "Add New Vendor";

  constructor(
    private vendSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  save(): void {
    this.vendSvc.add(this.vendor).subscribe({
      next: (res)=> {
        console.debug("Vendor added!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }  
}
