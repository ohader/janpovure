import {Component, ElementRef, Input, OnInit} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "./product.model";

@Component({
  selector: 'product-collection',
  templateUrl: './product.collection.component.html',
  styleUrls: ['./product.collection.component.css']
})
export class ProductCollectionComponent implements OnInit {
  title:string = 'Angular Products';

  @Input() productsUrl:string = null;
  private products:Product[] = [];
  private activeProduct:Product = null;

  private element:ElementRef;
  private productService:ProductService;

  constructor(element:ElementRef, productService:ProductService) {
    this.element = element;
    this.productService = productService;
  }

  ngOnInit() {
    if (this.productsUrl === null) {
      this.productsUrl = this.element.nativeElement.getAttribute('productsUrl');
    }

    this.fetch();
  }

  reload(event:Event) {
    this.fetch();
  }

  selectProduct(product:Product) {
    if (this.activeProduct !== product) {
      this.activeProduct = product;
    }
  }

  private fetch() {
    this.productService.fetch(this.productsUrl).subscribe(
      (products:Product[]) => {
        this.products = products;
        if (this.products.length > 0) {
          this.activeProduct = this.products[0];
        } else {
          this.activeProduct = null;
        }
      }
    );
  }
}
