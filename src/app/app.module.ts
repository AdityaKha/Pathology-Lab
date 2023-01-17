import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookatestComponent } from './bookatest/bookatest.component';
import { FirebaseService } from './services/firebase.service';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { LabtestlistComponent } from './labtestlist/labtestlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookatestComponent,
    LabtestlistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyBQmalX7Ks0IelZCFgY0IYQ0qxW5J32SCE",
        authDomain: "pathlabs-faf94.firebaseapp.com",
        projectId: "pathlabs-faf94",
        storageBucket: "pathlabs-faf94.appspot.com",
        messagingSenderId: "618383146095",
        appId: "1:618383146095:web:be7e0e3ae0a59b3f69619a"
    }),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
