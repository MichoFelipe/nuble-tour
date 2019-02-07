import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {NavParams} from 'ionic-angular';
import {TripService} from "../../services/trip-service";
import {SubcategoryDetail} from "../subcategory-detail/subcategory-detail";

@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html'
})
export class Subcategory {
  // list of Sub Categories
  public category_id: any;
  public subcategory_id: any;
  public subcategory_list: any;
  public title: any;

  constructor(public nav: NavController, public tripService: TripService, private navParams: NavParams) {
    this.category_id = navParams.get('category_id');
    this.subcategory_id = navParams.get('subcategory_id');
    this.title = navParams.get('category_title');

    this.subcategory_list = tripService.getSubCategory(this.category_id,this.subcategory_id);
  }

  viewDetail(id) {
    console.log("Subcategory selected ID: "+id);
    this.nav.push(SubcategoryDetail, {category_id: this.category_id, subcategory_id: this.subcategory_id, subcategorydetail_id: id, category_title: this.title});
  }
}
