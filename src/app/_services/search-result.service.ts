import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResult } from '../../class/search-result';
import { SEARCH_RESULTS } from '../../mock/mock-search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor() { }

  getResult(searchedText: string): Observable<SearchResult[]> {
    // MOCK of SearchResult
    return of(SEARCH_RESULTS);
  }
}
