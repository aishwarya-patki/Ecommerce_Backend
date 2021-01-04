import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './AdminModule/admin/admin.component';
import { FetchProductsComponent } from './AdminModule/fetch-products/fetch-products.component';


const routes: Routes = [
  {
    path:"",
    component: FetchProductsComponent,
  },
  {
    path:"create",
    component: AdminComponent,
  },
  {
    path:"fetch",
    component: FetchProductsComponent,
  },
  {
    path:"create/:id",
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
