import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})

export class VendorInfoComponent {
  
  vendor!: Vendor;
  pageTitle= "Vendor Info";
  showVerifyRemove: boolean= false;

  constructor(
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  remove(): void {
    this.showVerifyRemove= !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.vendSvc.remove(this.vendor.id).subscribe({
      next: (res)=> {
        console.debug("Vendor Removed!", res);
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err)=> {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id= +this.route.snapshot.params["id"]; //or use: let id= Number(this.route.snapshot.params["id"]); 
    this.vendSvc.get(id).subscribe({
      next: (res)=> {
        console.debug("Vendor:", res);
        this.vendor= res;
      },
      error: (err)=> {
        console.error(err);
      }
    })
  }
}
