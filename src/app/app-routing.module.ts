import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"demo",component:DemoComponent},
  {path:"start",component:StartComponent},
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
