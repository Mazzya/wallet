import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'qli-language-chooser',
  templateUrl: './language-chooser.component.html',
  styleUrls: ['./language-chooser.component.scss']
})
export class LanguageChooserComponent implements OnInit {

  browserLanguage = navigator.language.split('-')[0];
  supportedLanguagesDictionary: { [key: string]: string } = {
    'de': 'Deutsch',
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'nl': 'Nederlands',
    'pt': 'Português',
    'ru': 'Русский',
    'tr': 'Türkçe',
    'cn': '中文',
    'jp': '日本語',
  };

  public selected: string = "en"; 

  constructor(public translocoService: TranslocoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (Object.keys(this.supportedLanguagesDictionary).includes(this.browserLanguage)) {
      this.selected = this.browserLanguage;
    } else {
      this.selected = 'en';
    }
    this.translocoService.setActiveLang(this.selected);
  }

  getSupportedLanguages(): string[] {
    return Object.keys(this.supportedLanguagesDictionary);
  }

  changeLang(event: any): void {
    this.translocoService.setActiveLang(event.value);
  }

  isActiveLang(languageKey: string) {
    return this.translocoService.getActiveLang() === languageKey;
  }
}
