import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../shared/components/explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    ExploreContainerComponent,
  ],
})
export class Tab1Page {
  constructor() {}
}