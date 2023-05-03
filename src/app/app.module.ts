import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorInfoComponent } from './vendor/vendor-info/vendor-info.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestInfoComponent } from './request/request-info/request-info.component';
import { RequestAddComponent } from './request/request-add/request-add.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineAddComponent } from './requestline/requestline-add/requestline-add.component';
import { SortPipe } from './core/sort.pipe';
import { SearchPipe } from './user/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    UserInfoComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorAddComponent,
    VendorEditComponent,
    VendorInfoComponent,
    ProductInfoComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    RequestListComponent,
    RequestInfoComponent,
    RequestAddComponent,
    RequestEditComponent,
    RequestLinesComponent,
    RequestlineAddComponent,
    RequestlineEditComponent,

    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
