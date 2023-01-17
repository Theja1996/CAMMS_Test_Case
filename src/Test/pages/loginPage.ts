import { Selector } from 'testcafe';

export default class LoginPage {
  userName: Selector;
  passWord: Selector;
  login: Selector;

  constructor() {
    this.userName = Selector('input[name=user-name]');
    this.passWord = Selector('input[name=password]');
    this.login = Selector('input[name=login-button]');

  }
}