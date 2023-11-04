import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonImg,
} from '@ionic/angular/standalone';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonItem,
    IonLabel,
    IonContent,
    IonButton,
    IonInput,
    IonText,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonImg,
  ],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);
  constructor() {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl(''),
    });
  }
}
