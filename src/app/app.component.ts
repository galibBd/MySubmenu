import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  title: String;
  menuList: any;
  selected: any;
  constructor() {
    this.title = "Collapsible menu - Angular 2";
    this.menuList = [{
      "name": "Angular",
      "subMenu": ["Anguler 1", "Angular 2"]
    }, {
      "name": "Javascript",
      "subMenu": ["Jquery", "Ajax"]
    }, {
      "name": "Bootstrap",
      "subMenu": ["BootStrap 2", "BootStrap 3"]
    }]

  }
  select(item) {
    this.selected = (this.selected === item ? null : item);
  }
  isActive(item) {
    return this.selected === item;
  }
}
