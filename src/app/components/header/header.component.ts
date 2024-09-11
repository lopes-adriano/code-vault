import { Component } from '@angular/core';
import { LucideAngularModule, LogIn } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly login = LogIn;
}
