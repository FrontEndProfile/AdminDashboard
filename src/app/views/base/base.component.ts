import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  
// Example data structure
subItems = [
  {
    title: 'Level Four Menu',
    link: '/level-four',
    content: '',
    subItems: [
      {
        title: 'One Department',
        link: '/one-department',
        content: '',
        subItems: [
          { title: 'Department sub', link: '/department-sub', content: '#' },
          { title: 'Sub-sub-sub-item 2', link: '/sub-sub-sub-item-2', content: 'Content for Sub-sub-sub-item 2' },
        ],
      },
      {
        title: 'HR Department Team',
        link: '/hr-department-team',
        content: 'Content for Sub-sub-item',
        subItems: [
          { title: 'Sub-sub-sub-item 3', link: '/sub-sub-sub-item-3', content: 'Content for Sub-sub-sub-item 3' },
          { title: 'Sub-sub-sub-item 4', link: '/sub-sub-sub-item-4', content: 'Content for Sub-sub-sub-item 4' },
        ],
      },
    ],
  },
  // Add more items for other components as needed
];

subItems1 = [
  {
    title: 'Level Four Menu',
    link: '/level-four',
    content: '',
    subItems: [
      {
        title: 'One Department',
        link: '/one-department',
        content: '',
        subItems: [
          { title: 'Department Link', link: '/department-sub', Link: '#' },
          { title: 'Department', link: '/sub-sub-sub-item-2', content: 'Content for Sub-sub-sub-item 2',  Link: '#' },
        ],
      },
      // {
      //   title: 'HR Department Team',
      //   link: '/hr-department-team',
      //   content: 'Content for Sub-sub-item',
      //   subItems: [
      //     { title: 'Sub-sub-sub-item 3', link: '/sub-sub-sub-item-3', content: 'Content for Sub-sub-sub-item 3' },
      //     { title: 'Sub-sub-sub-item 4', link: '/sub-sub-sub-item-4', content: 'Content for Sub-sub-sub-item 4' },
      //   ],
      // },
    ],
  },
  // { title: 'HR Resume', link: '/hr-resume', content: 'Content for Sub-item' },
];

subItems2 = [
  {
    title: 'Table Link',
    link: '/sub-item',
  },
];


  
  
}
