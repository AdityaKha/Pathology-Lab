import { Component,Output,EventEmitter,Input } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public firebaseService: FirebaseService) { }

  title = 'PathologyLab';
  form= new FormGroup({ 
    email : new FormControl('',[Validators.required,Validators.minLength(6)]),
    password :new FormControl('',Validators.required)  
  }
  )
  isSignedIn = false
  @Output() isLogout = new EventEmitter<void>()
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    localStorage.removeItem('user')
    sessionStorage.removeItem('username')
    this.isSignedIn=false;
    document.getElementById("logout").style.display="none";
    document.getElementById("login").style.display="block";
    document.getElementById("signup").style.display="block";

  }
  fun(){
    document.getElementById("logout").style.display="block";
  }
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    document.getElementById('id03').style.display='none'
    document.getElementById("logout").style.display="block";
    document.getElementById('login').style.display='none';
    document.getElementById('signup').style.display='none';

  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    document.getElementById('id02').style.display='none'
    document.getElementById("logout").style.display="block";
    document.getElementById('login').style.display='none';
    document.getElementById('signup').style.display='none';
  }
  handleLogout(){
    this.isSignedIn = false

  }
 
  sb(){
    document.getElementById("db")!.style.display="none";
  }
}
