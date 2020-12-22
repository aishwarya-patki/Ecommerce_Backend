import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  selected_file :File;

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.helloworld();

  }

  selectedFile(event){
    this.selected_file = event.target.files[0];
    console.log(this.selected_file)
  }
  AddPosts(formvalue)
  {
      const addPost:Product={
        _id:null,
        main_category:formvalue.main_category,
        sub_category:formvalue.sub_category,
        product_name:formvalue.product_name,
        product_descriptions:formvalue.product_descriptions,
        image_paths:formvalue.image_paths,
        price:formvalue.price

      }
     this.adminService.addProduct(addPost,this.selected_file);
  }

}
