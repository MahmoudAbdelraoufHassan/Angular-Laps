import { Component } from '@angular/core';
import { ProductsCardsComponent } from '../products-cards/products-cards.component';
import  products from "../../assets/products-list.json"
import { Products } from '../interface/products';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductsCardsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productsList : Array<Products> = products;

}
