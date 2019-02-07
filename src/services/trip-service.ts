import {Injectable} from "@angular/core";
import {TRIPS} from "./mock-trips";

@Injectable()
export class TripService {
  private trips: any;

  constructor() {
    this.trips = TRIPS;
  }

  getAll() {
    return this.trips;
  }

  getItem(id) {
    for (var i = 0; i < this.trips.length; i++) {
      if (this.trips[i].id === parseInt(id)) {
        return this.trips[i];
      }
    }
    return null;
  }

  getSubCategory(category_id, subcategory_id) {
    let category_list = this.getItem(category_id).category;
    for (var i = 0; i < category_list.length; i++) {
      if (category_list[i].id === parseInt(subcategory_id)) {
        let subcategory_list = category_list[i].sub_category;
        return subcategory_list;
      }
    }
    return null;
  }

  getSubCategoryDetail(category_id, subcategory_id, subcategorydetail_id ) {

    let subcategorydetail_list = this.getSubCategory(category_id, subcategory_id);
    for (var i = 0; i < subcategorydetail_list.length; i++) {
      if (subcategorydetail_list[i].id === parseInt(subcategorydetail_id)) {
        return subcategorydetail_list[i];
      }
    }
    return null;
  }

  remove(item) {
    this.trips.splice(this.trips.indexOf(item), 1);
  }
}
