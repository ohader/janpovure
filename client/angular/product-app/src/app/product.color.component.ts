import {Component, Input} from "@angular/core";
import {ProductColor} from "./product.color.model";

@Component({
  selector: 'product-color',
  templateUrl: './product.color.component.html',
  styleUrls: ['./product.color.component.css']
})
export class ProductColorComponent {
  @Input() color:ProductColor;
}
