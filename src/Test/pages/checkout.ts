import { Selector } from 'testcafe';

export default class CheckOutPage {

    firstName: Selector;
    lastName: Selector;
    postalCode: Selector;
    continueBtn: Selector;
  constructor() {
    
    this.firstName = Selector('input[name=firstName]');
    this.lastName = Selector('input[name=lastName]');
    this.postalCode = Selector('input[name=postalCode]') 
    this.continueBtn = Selector('input[name=continue]')
  }
}