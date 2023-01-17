import { Selector } from 'testcafe';

export default class CheckOutOverviewPage {

    finish: Selector;
    constructor() {

        this.finish = Selector('button[name=finish]')
    }
}