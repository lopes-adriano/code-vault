import { afterNextRender, Component } from '@angular/core';
import { languages, editorOptions } from '../../config/editor.config';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css',
})
export class CodeEditorComponent {
  isBrowser = false;
  languages = languages;
  editorOptions = editorOptions;
  selectedLanguage = this.languages[0].value;
  code: string = this.languages[0].template;

  constructor() {
    afterNextRender(() => {
      this.isBrowser = true;
    });
  }

  changeLanguage(event: any) {
    const selected = this.languages.find(
      (language) => language.value === event.target.value
    );
    if (selected) {
      this.selectedLanguage = selected.value;
      this.code = selected.template;
      this.editorOptions = {
        ...this.editorOptions,
        language: this.selectedLanguage,
      };
    }
  }
}
