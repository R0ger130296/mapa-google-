import { Component, ViewChild, NgModule } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.startGoogleMap();
    
  }

  startGoogleMap() {
    const localizacion= new google.maps.LatLng(-0.091031,-78.502238);
    const mapProp = {
        center: localizacion,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(this.gmapElement.nativeElement, mapProp,);
     var marcador = new google.maps.Marker ({
       position: localizacion,
       map:map,
       title:'mi casa',
     }); 
   }
}

