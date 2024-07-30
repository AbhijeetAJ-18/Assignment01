import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./My Component/home/home.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes =[

     {path:"home",component:HomeComponent},
     {path:"about",component:AboutComponent}

     
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }