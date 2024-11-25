import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // imports: [RouterOutlet, FormComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tt';
}
