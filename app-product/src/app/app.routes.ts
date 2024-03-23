import { Routes } from '@angular/router';
import { RigisterComponent } from './rigister/rigister.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductComponent } from './view-product/view-product.component';
export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
      },
    {path : 'Rigister' ,
    component : RigisterComponent
},
    {path : 'login' ,
    component : LoginComponent
},
    {path : 'cart' ,
    component : CartComponent
},
{
    path : 'product-details/:id',
    component : ViewProductComponent
},
{path: '**', 
component:PageNotFoundComponent 
}
];
