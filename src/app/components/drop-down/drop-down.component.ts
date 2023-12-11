import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'] // Fix the typo here
})



export class DropDownComponent {



  menu = [
    {
      label: 'Level 1 - Item 1',
      subMenu: [
        { label: 'Level 2 - Item 1' },
        { label: 'Level 2 - Item 2' },
        {
          label: 'Level 2 - Item 3',
          subMenu: [
            { label: 'Level 3 - Item 1' },
            { label: 'Level 3 - Item 2' },
          ],
        },
      ],
    },
    {
      label: 'Level 1 - Item 2',
      subMenu: [{ label: 'Level 2 - Item 1' }, { label: 'Level 2 - Item 2' }],
    },
  ];

  isOpen = false;

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Prevents the click event from reaching the document click handler
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selected = 'option2';

}
