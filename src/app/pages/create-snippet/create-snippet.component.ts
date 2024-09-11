import { Component } from '@angular/core';
import { CodeEditorComponent } from '../../components/code-editor/code-editor.component';

@Component({
  selector: 'app-create-snippet',
  standalone: true,
  imports: [CodeEditorComponent],
  templateUrl: './create-snippet.component.html',
  styleUrl: './create-snippet.component.css',
})
export class CreateSnippetComponent {}
