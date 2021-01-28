import { BillService } from './bill.service';
import { WishlistService } from './wishlist.service';
import { MessengerService } from './messenger.service';
import { comment } from './models/comment';
import { CommentsService } from './comments.service';
import { OrdersService } from './orders.service';
import { ShoppincartService } from './shoppincart.service';
import { ProductService } from './product.service';
import { HttpModule } from '@angular/http';
import { CategoryService } from './category.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { RouterModule } from '@angular/router'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrdersummeryComponent } from './ordersummery/ordersummery.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SlideComponent } from './slide/slide.component';
import { WishlistpageComponent } from './wishlistpage/wishlistpage.component';
import { LastviewproductComponent } from './lastviewproduct/lastviewproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { BillsComponent } from './admin/bills/bills.component';
import { AddproducttobillComponent } from './addproducttobill/addproducttobill.component';
import { BillsConstmersComponent } from './bills-constmers/bills-constmers.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,

    ProductFormComponent,

    ProductsFilterComponent,

    ProductCardComponent,

    ProductDetailsComponent,

    AddTocartComponent,

    CommentsComponent,

    ProductQuantityComponent,

    OrdersummeryComponent,

    CartItemComponent,

    SlideComponent,

    WishlistpageComponent,

    LastviewproductComponent,

    DashboardComponent,

    ShopComponent,

    AuthentificationComponent,

    AdminCategoriesComponent,

    CategoryFormComponent,

    BillsComponent,

    AddproducttobillComponent,

    BillsConstmersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
  
 

    DataTableModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'a', component: AuthentificationComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'd', component: DashboardComponent },
      { path: 'h', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: 'productDetails/comments/:id', component: CommentsComponent, canActivate: [AuthGuard] },
      { path: 'wishList', component: WishlistpageComponent,canActivate: [AuthGuard] },

      { 
        path: 'productDetails/:id', 
        component: ProductDetailsComponent, 
       
      },
      
      
      
      { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/productDetails/:id', 
        component: ProductDetailsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/category', 
        component: AdminCategoriesComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/category/:id', 
        component: CategoryFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/bills', 
        component: BillsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/bills/add', 
        component: AddproducttobillComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/bills/:id', 
        component: BillsConstmersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      }
    ])    
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppincartService,
    OrdersService,
    CommentsService,
    MessengerService,
    WishlistService,
    BillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
