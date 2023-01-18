import { Selector } from 'testcafe';

export default class CartPage {
  verifyItemInCart: Selector;
  CheckOut: Selector;
  pageTitle: Selector;
  
  constructor() {
    this.pageTitle = Selector('span[class=title]')
    this.verifyItemInCart = Selector('div[class=inventory_item_name]');
    this.CheckOut = Selector('button[name=checkout]');
  }
}