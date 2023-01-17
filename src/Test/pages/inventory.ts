import { Selector } from 'testcafe';

export default class InventoryPage {

  productName: Selector;
  productPrice: Selector;
  item_1: Selector;
  item_2: Selector;
  cartIcon: Selector;

  constructor() {

    this.productName = Selector('a[id=item_5_title_link]');
    this.productPrice = Selector('div[class=inventory_item_price]');
    this.item_1 = Selector('button[name=add-to-cart-sauce-labs-backpack]');
    this.item_2 = Selector('button[name=add-to-cart-sauce-labs-bike-light]');
    this.cartIcon = Selector('a[class=shopping_cart_link]');

  }
}