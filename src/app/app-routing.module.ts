import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookatestComponent } from './bookatest/bookatest.component';
import { LabtestlistComponent } from './labtestlist/labtestlist.component';
const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'bat',component:BookatestComponent},
                        { path: 'tests', component:LabtestlistComponent }
                        ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
