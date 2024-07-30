import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./My Component/home/home.component";
// import { HomeComponent } from "./home/home.component";
// import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'angular-project';
}