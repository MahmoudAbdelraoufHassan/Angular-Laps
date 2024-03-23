import { Component , Input } from '@angular/core';
import { Products } from '../interface/products';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-products-cards',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.css'
})
export class ProductsCardsComponent {
@Input() productCard !: Array<Products>

constructor(private router: Router) {}
redirect(id : number){
  this.router.navigate([`/product-details`, id]);
}

}
