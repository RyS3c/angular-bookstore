import { CartItem } from 'src/app/common/cart-item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItem.length > 0){

      existingCartItem = this.cartItem.find( tempCartItem => tempCartItem.id === theCartItem.id);


      alreadyExistsInCart = (existingCartItem != undefined)
    }

    if(alreadyExistsInCart){

      existingCartItem.quantity++;
    }else {

      this.cartItem.push(theCartItem);
    }

    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItem){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(cartItem: CartItem){
    cartItem.quantity--;

    if (cartItem.quantity === 0) {
      this.remove(cartItem);
    }else {
      this.calculateTotalPrice();
    }
  }

  remove(cartItem: CartItem){
    const itemIndex = this.cartItem
                          .findIndex(
                            tempCartItem => tempCartItem.id === cartItem.id
                          );

    if (itemIndex > -1) {
      this.cartItem.splice(itemIndex, 1);
      this.calculateTotalPrice();
    }
  }
}
