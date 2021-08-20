import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  cntNoSales:string;
  email:string;
  address:string;
  constructor() {
    this.cntNoSales = environment.contactNumberSales;
    this.email = environment.email;
    this.address = environment.address;
  }

  ngOnInit(): void {
  }

}
