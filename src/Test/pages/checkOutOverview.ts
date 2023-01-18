import { Selector } from 'testcafe';

export default class CheckOutOverviewPage {

    finish: Selector;
    pageTitle: Selector;
    constructor() {
        this.pageTitle = Selector('span[class=title]')
        this.finish = Selector('button[name=finish]')
    }
}