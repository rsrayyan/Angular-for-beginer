import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Manager';
  propertyName :string = "rayyan";
  className : string = "mess";
  colorName : string ="red";
  message(){
    alert("you click on video");
  }
}
