import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})

export class VendorEditComponent {

  vendor!: Vendor;
  pageTitle= "Edit Vendor Information";

  constructor(
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.vendSvc.edit(this.vendor).subscribe({
      next: (res)=> {
        console.debug("Vendor edited.");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id= this.route.snapshot.params["id"];
    this.vendSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("Vendor:", res)
        this.vendor= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }

}
