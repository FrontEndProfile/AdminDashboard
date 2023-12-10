import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardConfig: { number: number; label: string } = { number: 0, label: '' }; // Initialize with default values
}
