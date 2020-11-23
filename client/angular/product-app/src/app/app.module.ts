import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';

import {ProductCollectionComponent} from './product.collection.component';
import {ProductColorComponent} from './product.color.component';
import {ProductService} from "./product.service";

@NgModule({
  declarations: [
    ProductCollectionComponent,
    ProductColorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [ProductCollectionComponent]
})
export class AppModule { }
