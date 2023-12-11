import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-accordion',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', overflow: 'hidden', opacity: 0 })),
      state('expanded', style({ height: '*', overflow: 'visible', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})

export class AccordionComponent {
  // @Input() title: string = '';
  // @Input() content: string = ''; // Add this line for content
  // @Input() link: string = ''; // Add this line for link
  // @Input() subItems: { title: string, content: string, subItems?: { title: string, content: string }[] }[] = []; // Add this line
  // expanded: boolean = false;
  // subItems: { title: string, content: string, subItems?: { title: string, content: string }[] }[] = []; // Modify this line



  @Input() title: string = '';
  @Input() content: string = '';
  @Input() link: string = '';
  @Input() subItems: { title: string; content: string; link: string }[] = [];
  expanded: boolean = false;

  
  toggle() {
    this.expanded = !this.expanded;
  }
}


interface SubItem {
  title: string;
  content: string;
  link: string;
}