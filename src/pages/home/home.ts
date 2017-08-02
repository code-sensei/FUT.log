import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  timelinePosts: any[] = [
    {
      title: 'Dummy Post 1',
      content: 'Dummy Post 1 content',
      avatar: 'http://lorempixel.com/45/45',
      image: 'http://lorempixel.com/400/200',
      location: 'Home Base'
    },
    {
      title: 'Dummy Post 2',
      content: 'Dummy Post 2 content',
      avatar: 'http://lorempixel.com/45/45',
      image: 'http://lorempixel.com/400/200',
      location: 'Home Base'
    },
    {
      title: 'Dummy Post 3',
      content: 'Dummy Post 3 content',
      avatar: 'http://lorempixel.com/45/45',
      image: 'http://lorempixel.com/400/200',
      location: 'Home Base'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
