import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  constructor(private http:HttpClient) { }

  helloworld()
  {
    this.http.get("http://localhost:3000/").subscribe((response)=>{
      console.log(response);
    });
  }

  addProduct(product:Product, selected_file: File)
  {
    const fd = new FormData();
    fd.append('main_category',product.main_category);
    fd.append('sub_category',product.sub_category);
    fd.append('product_name',product.product_name);
    fd.append('product_descriptions',product.product_descriptions);
    fd.append('price',product.price.toString());
    fd.append('image_paths', selected_file,product.product_name.toString().replace(/\s/g, "").toLowerCase());
    if(product.product_beginner == null || product.product_beginner == undefined || !product.product_beginner)
    {
      product.product_beginner = false;
    }
    if(product.product_recommended == null || product.product_recommended == undefined || !product.product_recommended)
    {
      product.product_recommended = false;
    }
    fd.append('product_beginner', product.product_beginner.toString());
    fd.append('product_recommended', product.product_recommended.toString());
    this.http.post("http://localhost:3000/product",fd).subscribe((data)=>{
      console.log(data);
    });

  }
 fetchProduct() {
    return this.http.get<Product>("http://localhost:3000/product/");
  }
  fetchProductById(id:String) {
    return this.http.get<Product>("http://localhost:3000/product/"+id);
  }
}
