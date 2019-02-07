import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  public map_latiitud: any;
  public map_longitud: any;
  public title: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, private navParams: NavParams) {
    this.map_latiitud = navParams.get('map_latiitud');
    this.map_longitud = navParams.get('map_longitud');
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      console.log("Load Map. Lat: "+this.map_latiitud);
      console.log("Load Map. Lon: "+this.map_longitud);
      //let latLng = new google.maps.LatLng(-37.813628, 144.963058);
      let latLng = new google.maps.LatLng(this.map_latiitud, this.map_longitud);

      let mapOptions = {
        center: latLng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      /*
      var image = {
        url: 'assets/img/trip/thumb/Home-Destinos.jpg', // image is 512 x 512
        scaledSize: new google.maps.Size(80, 80),
      };
      */

      new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(this.map_latiitud, this.map_longitud),
        title: this.title/*,
        icon: image*/
      })

    }, (err) => {
      console.log(err);
    });
  }
}
