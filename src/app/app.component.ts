import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userdashboard';
  parentData = "This is parent data goes here...";
  reciveMessage(event) {
    console.log(event);
  }
}
