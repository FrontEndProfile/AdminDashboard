import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AdminDashboard';
  @Input() cardConfig: any; // Configuration object for the card

  menuData = [
    {
      "id": 1,
      "name": "Item 1",
      "children": [
        {
          "id": 2,
          "name": "Sub-item 1",
          "children": [
            { "id": 5, "name": "Sub-sub-item 1.1" },
            { "id": 6, "name": "Sub-sub-item 1.2" }
          ]
        },
        { "id": 3, "name": "Sub-item 2" }
      ]
    },
    {
      "id": 4,
      "name": "Item 2",
      "children": [
        { "id": 7, "name": "Sub-item 3" },
        { "id": 8, "name": "Sub-item 4" }
      ]
    }
  ];



  
}
