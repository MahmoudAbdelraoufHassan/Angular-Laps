import { Component  , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from '../../assets/products-list.json'
import { Products } from '../interface/products';
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {
  @Input() id ?: number;
  products : Array<Products> = products
  productDetails: any;
 constructor(private activatedRoute : ActivatedRoute){}

 ngOnInit(){
   this.productDetails = this.products.find((prod :any) => prod.id == this.id)
 }
}
