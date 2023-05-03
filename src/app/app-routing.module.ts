import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorInfoComponent } from './vendor/vendor-info/vendor-info.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { RequestAddComponent } from './request/request-add/request-add.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestInfoComponent } from './request/request-info/request-info.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';

import { RequestlineAddComponent } from './requestline/requestline-add/requestline-add.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';

const routes: Routes = [
  {path: "", redirectTo: "/user/list", pathMatch: "full"},
  {path: "user/list", component: UserListComponent},
  {path: "user/info/:id", component: UserInfoComponent},
  {path: "user/add", component: UserAddComponent},
  {path: "user/edit/:id", component: UserEditComponent}, 
  {path: "user/login", component: UserLoginComponent},
  {path: "login", component: UserLoginComponent}, 

  {path: "vendor/list", component: VendorListComponent},
  {path: "vendor/info/:id", component: VendorInfoComponent},
  {path: "vendor/add", component: VendorAddComponent},
  {path: "vendor/edit/:id", component: VendorEditComponent},

  {path: "product/list", component: ProductListComponent},
  {path: "product/info/:id", component: ProductInfoComponent},
  {path: "product/add", component: ProductAddComponent},
  {path: "product/edit/:id", component: ProductEditComponent},

  {path: "request/list", component: RequestListComponent},
  {path: "request/info/:id", component: RequestInfoComponent},
  {path: "request/add", component: RequestAddComponent},
  {path: "request/edit/:id", component: RequestEditComponent},
  {path: "request/lines", component: RequestLinesComponent},

  {path: "requestline/add", component: RequestlineAddComponent},
  {path: "requestline/edit/:id", component: RequestlineEditComponent},

  {path: "core/home", component: HomeComponent},
  {path: "core/about", component: AboutComponent},
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
