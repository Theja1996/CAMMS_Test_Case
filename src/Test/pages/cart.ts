import { Selector } from 'testcafe';

export default class CartPage {
  verifyItemOneInCart: Selector;
  verifyItemTwoInCart: Selector;
  CheckOut: Selector;
  
  constructor() {
    this.verifyItemOneInCart = Selector('div[class=inventory_item_name]');
    this.verifyItemTwoInCart = Selector('div[class=inventory_item_name]');
    this.CheckOut = Selector('button[name=checkout]');
  }
}