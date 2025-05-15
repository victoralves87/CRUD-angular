import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component01Component } from "./component01/component01.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudAngular';
}
