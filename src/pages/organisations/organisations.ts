import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the OrganisationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-organizations',
  templateUrl: 'organisations.html'
})
export class OrganisationsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Organisations Page');
  }
}
