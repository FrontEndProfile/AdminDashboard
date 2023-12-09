import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  subItems1 = [
    {
      title: 'HR Dashboard',
      content: '',
      subItems: [
        {
          title: 'HR Department',
          content: 'Content for Sub-sub-item',
          subItems: [
            { title: 'Sub-sub-sub-item 1', content: 'Content for Sub-sub-sub-item 1' },
            { title: 'Sub-sub-sub-item 2', content: 'Content for Sub-sub-sub-item 2' },
          ],
        },
        {
          title: 'HR Department Team',
          content: 'Content for Sub-sub-item',
          subItems: [
            { title: 'Sub-sub-sub-item 3', content: 'Content for Sub-sub-sub-item 3' },
            { title: 'Sub-sub-sub-item 4', content: 'Content for Sub-sub-sub-item 4' },
          ],
        },
      ],
    },
    { title: 'HR Resume', content: 'Content for Sub-item' },
  ];

  subItems2 = [
    {
      title: 'Sub-item',
      content: 'Content for Sub-item 2.1',
      subItems: [
        {
          title: 'Sub-sub-item',
          content: 'Content for Sub-sub-item',
          subItems: [
            { title: 'Sub-sub-sub-item 5', content: 'Content for Sub-sub-sub-item 5' },
            { title: 'Sub-sub-sub-item 6', content: 'Content for Sub-sub-sub-item 6' },
          ],
        },
        { title: 'Sub-sub-item 2', content: 'Content for Sub-sub-item 2' },
      ],
    },
    { title: 'Sub-item 2', content: 'Content for Sub-item 2' },
    { title: 'Sub-item 3', content: 'Content for Sub-item 3' },
  ];

}
