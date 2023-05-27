import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CasrtDetailsComponent } from './components/casrt-details/casrt-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthguardGuard } from './shared/authguard.guard';


const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CasrtDetailsComponent},
  {path: 'book/{id}', component: BookDetailsComponent},
  {path: 'books', component: BookListComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  { path: "#", component:BookListComponent, canActivate:[AuthguardGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    BookDetailsComponent,
    BookListComponent,
    CasrtDetailsComponent,
    CartStatusComponent,
    CheckoutComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
