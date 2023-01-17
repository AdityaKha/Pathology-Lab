import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  userDisplayName:any='';
    ngOnInit() {
       this.userDisplayName = sessionStorage.getItem('username');
    }
  sb(){
    document.getElementById("db")!.style.display="none";
  }

}
