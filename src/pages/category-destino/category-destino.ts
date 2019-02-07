import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {NavParams} from 'ionic-angular';
import {TripService} from "../../services/trip-service";
import {MapPage} from "../map/map";

@Component({
  selector: 'category-destino',
  templateUrl: 'category-destino.html'
})
export class CategoryDestino {
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  public category_id: any;
  public category_selected_id: any;

  public subcategory_list: any;
  public title: any;

  public map_latiitud: any;
  public map_longitud: any;

  constructor(public nav: NavController, public tripService: TripService, private navParams: NavParams) {
    this.category_id = navParams.get('category_id');
    this.category_selected_id = navParams.get('category_selected_id');
    
    let category_list = tripService.getItem(this.category_id);
    this.trip = category_list.category[this.category_selected_id];

    this.title = this.trip.name;
    this.map_latiitud = this.trip.latitude;
    this.map_longitud = this.trip.longitud;
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
    // Checkout
    // this.nav.push(CheckoutTripPage);
    // Map Detail
    this.nav.push(MapPage, {map_latiitud: this.map_latiitud, map_longitud: this.map_longitud, title: this.title});
  }
}
