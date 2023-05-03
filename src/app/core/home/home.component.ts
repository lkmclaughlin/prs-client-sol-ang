import { Component } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pageTitle= "Home Sweet Home!";

  constructor(
    private coreSvs: CoreService
  ){}

  ngOnInit(): void {
    console.debug("Reached Home");
  }

}
