import { Injectable } from '@angular/core';
import {Language} from '../../class/language';
import {LANGUAGES} from '../../mock/mock-languages';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLanguages(): Observable<Language[]> {
    // MOC of Languages
    return of(LANGUAGES);
  }
}
