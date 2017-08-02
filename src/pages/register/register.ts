import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from "../../providers/firebase/firebase";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [
    FirebaseProvider
  ]
})
export class RegisterPage {

  email: string;
  password: string;
  username: string;
  matricNum: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: FirebaseProvider) {
  }

  register() {
    this.firebase.register(this.email, this.password, this.username, this.matricNum)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
