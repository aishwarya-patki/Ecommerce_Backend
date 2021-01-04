import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  selected_file: File;
  param_id: String;
  addPost:Product;
  constructor(private adminService: AdminServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.adminService.helloworld();
    this.param_id = null;
    this.activatedRoute.params.subscribe(params => {
      this.param_id = params['id'];
      console.log(params);
      console.log(this.param_id);
      if(this.param_id!=null)
      {
        this.adminService.fetchProductById(this.param_id).subscribe(
          data=>{
            this.addPost=data['product']
            console.log("id",this.addPost);
          }
        )

      }
    })  
  }
  modelChanged(eventtrigger){
    console.log("trigger!!",eventtrigger.target.value)
  }

  selectedFile(event) {
    this.selected_file = event.target.files[0];
    console.log(this.selected_file)
  }
  AddPosts(formvalue) {
    console.log("formvalue",formvalue)
  
   this.addPost = {
    _id: null,
    main_category: formvalue.main_category,
    sub_category: formvalue.sub_category,
    product_name: formvalue.product_name,
    product_descriptions: formvalue.product_descriptions,
    image_paths: formvalue.image_paths,
    price: formvalue.price,
    product_beginner: formvalue.product_beginner,
    product_recommended: formvalue.product_recommended
  }
      //console.log(formvalue.product_beginner);
      //console.log(formvalue.product_recommended);
      this.adminService.addProduct(this.addPost, this.selected_file);
     //this.myTemplateVar.reset();

  }


}
