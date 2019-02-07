import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {Category} from "../category/category";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  constructor(public nav: NavController, public tripService: TripService) {
    this.trips = tripService.getAll();
  }

  viewDetail(id) {
    this.nav.push(Category, {id: id});
  }
}
