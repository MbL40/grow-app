import { Component, Input } from '@angular/core';
import { IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonImg]
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
