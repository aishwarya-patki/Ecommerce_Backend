import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-fetch-products',
  templateUrl: './fetch-products.component.html',
  styleUrls: ['./fetch-products.component.css']
})
export class FetchProductsComponent implements OnInit {
 product:Product;
  constructor(private admin:AdminServiceService) { }

  ngOnInit(): void {
    this.admin.fetchProduct().subscribe(
        data =>{
            this.product=data['post'];
            console.log("data",data);
            console.log("product",this.product);
        }
    )
  }

}
