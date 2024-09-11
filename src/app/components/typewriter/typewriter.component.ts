import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css'],
  standalone: true,
})
export class TypewriterComponent implements OnInit {
  @Input() text = '';
  @Input() textStyle = '';
  displayText = '';
  speed = 100; // Speed in milliseconds between each character
  typingComplete = false; // To track if typing is complete

  constructor() {}

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect(): void {
    let i = 0;
    const type = () => {
      if (i < this.text.length) {
        this.displayText += this.text.charAt(i);
        i++;
        setTimeout(type, this.speed);
      } else {
        this.typingComplete = true; // Typing complete, cursor should start blinking
      }
    };
    type();
  }
}
