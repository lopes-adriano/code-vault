import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  animations: [
    trigger('fadeIn', [
      transition('* => *', useAnimation(fadeIn, { params: { timing: 1 } })),
    ]),
  ],
})
export class SignInComponent {
  fadeIn: any;
}
