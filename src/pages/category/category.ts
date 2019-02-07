import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {NavParams} from 'ionic-angular';
import {TripService} from "../../services/trip-service";
import {Subcategory} from "../subcategory/subcategory";
import {CategoryDestino} from "../category-destino/category-destino";

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class Category {
  // list of Categories 
  public trips: any;
  public category_id: any;
  public trip: any;
  public title: any;

  constructor(public nav: NavController, public tripService: TripService, private navParams: NavParams) {
    this.category_id = navParams.get('id');
    this.trip = tripService.getItem(this.category_id);
    this.trips = this.trip.category;
    this.title = this.trip.name;
  }

  viewDetail(id) {
    console.log("Category Selected ID: "+id);
    let pos_category_array = id - 1;
    let name_category_selected = this.trips[pos_category_array].name;
    console.log("Category has subcategory : "+this.trips[pos_category_array].has_subcategory);
    // Category has Detail or Subcategories
    if( this.trips[pos_category_array].has_subcategory === "true" ){
      this.nav.push(Subcategory, {category_id: this.category_id, subcategory_id: id, category_title: name_category_selected});
    } else {
      this.nav.push(CategoryDestino, {category_id: this.category_id, category_selected_id: pos_category_array, category_title: this.title});
    }
  }
}
