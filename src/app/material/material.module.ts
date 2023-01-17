import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
//import {MatCardHarness} from '@angular/material/card/testing';

const MaterialComponents=[
MatButtonModule,
MatIconModule,
MatCardModule

];



@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
