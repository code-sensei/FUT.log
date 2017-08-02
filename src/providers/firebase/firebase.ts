import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController, NavController } from "ionic-angular";
import 'rxjs/add/operator/map';

import * as firebase from "firebase";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public toast: ToastController, public navCtrl: NavController) {
    console.log('Hello FirebaseProvider Provider');
  }

  login(email: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
      let toast = this.toast.create({
        message: 'Sign in Successful',
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      this.navCtrl.push('HomePage');
    }).catch((err) => {
      let toast = this.toast.create({
        message: 'Could not sign in \n Error: ' + err,
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
    });
  }

  register(email: string, pass: string, username: string, matricNum: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(() => {
      firebase.database().ref('users/' + username).set({
        uuid: firebase.auth().currentUser.uid,
        username: username,
        email: email
      });

      //firebase.auth().
      let toast = this.toast.create({
        message: 'Your account was created successfully',
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: 'Thanks'
      });
      toast.present();
      this.navCtrl.push('HomePage');
    }).catch((err) => {
      let toast = this.toast.create({
        message: 'Could not create your account \n Error: ' + err,
        position: 'Bottom',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
    });
  }

}
