import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { fadeIn } from 'ng-animate';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  animations: [
    trigger('fadeIn', [
      transition('* => *', useAnimation(fadeIn, { params: { timing: 1 } })),
    ]),
  ],
})
export class SignUpComponent {
  fadeIn: any;
}
