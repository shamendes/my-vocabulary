import { Injectable } from '@angular/core';
import { Word } from '../../class/word';
import { WORDS } from '../../mock/mock-words';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }

  getWords(): Observable<Word[]> {
     // MOC of Words
    return of(WORDS);
  }
}
