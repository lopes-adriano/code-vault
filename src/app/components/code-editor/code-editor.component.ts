import { Component } from '@angular/core';
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
  languages = languages;
  editorOptions = editorOptions;
  selectedLanguage = this.languages[0].value;
  code: string = this.languages[0].template;

  onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedLanguage = this.languages.find(
      (language) => language.value === target.value
    );

    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage.value;
      this.code = selectedLanguage.template;
      this.editorOptions = {
        ...this.editorOptions,
        language: this.selectedLanguage,
      };
    }
  }
}
