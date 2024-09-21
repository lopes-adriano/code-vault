import { Component } from '@angular/core';
import { CodeEditorComponent } from '../../components/code-editor/code-editor.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-create-snippet',
  standalone: true,
  imports: [CodeEditorComponent, HeaderComponent],
  templateUrl: './create-snippet.component.html',
  styleUrl: './create-snippet.component.css',
})
export class CreateSnippetComponent {}
