import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from "../../providers/firebase/firebase";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    FirebaseProvider
  ]
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: FirebaseProvider) {
  }

  login() {
    this.firebase.login(this.email, this.password);
  }

  toReg() {
    this.navCtrl.push('RegisterPage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
