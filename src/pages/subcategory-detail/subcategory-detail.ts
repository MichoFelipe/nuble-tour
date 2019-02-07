import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {NavParams} from 'ionic-angular';
import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";

@Component({
  selector: 'subcategory-detail',
  templateUrl: 'subcategory-detail.html'
})
export class SubcategoryDetail {
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  public category_id: any;
  public subcategory_id: any;
  public subcategorydetail_id: any;

  public subcategory_list: any;
  public title: any;

  constructor(public nav: NavController, public tripService: TripService, private navParams: NavParams) {
    this.category_id = navParams.get('category_id');
    this.subcategory_id = navParams.get('subcategory_id');
    this.subcategorydetail_id = navParams.get('subcategorydetail_id');
    this.title = navParams.get('category_title');

    this.trip = tripService.getSubCategoryDetail(this.category_id,this.subcategory_id, this.subcategorydetail_id);
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
    this.nav.push(CheckoutTripPage);
  }
}