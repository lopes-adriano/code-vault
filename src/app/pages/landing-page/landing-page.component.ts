import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';
import { TypewriterComponent } from '../../components/typewriter/typewriter.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, RouterLink, TypewriterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])],
})
export class LandingPageComponent {
  zoomIn: any;
  typewriterStyle: string =
    'text-5xl font-bold max-w-md bg-gradient-to-r from-[#1EB854] to-[#1DB8AB] bg-clip-text text-transparent';
}
