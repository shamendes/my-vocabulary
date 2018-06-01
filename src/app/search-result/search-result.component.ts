import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Language } from '../../class/language';
import { Group } from '../../class/group';
import { Word } from '../../class/word';
import { SearchResultService } from '../_services/search-result.service';
import { SearchResult } from '../../class/search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() searchedText: string;
  @Output() eventSelect = new EventEmitter<SearchResult>();


  searchResults: SearchResult[];

  constructor(private searchResultService: SearchResultService) { }

  ngOnInit() {
    this.getResult(this.searchedText);
  }

  getResult(text: string) {
    this.searchResultService.getResult(this.searchedText).subscribe(searchResults => this.searchResults = searchResults);
  }

  giveResultText(foundResult: SearchResult): string {


    if (foundResult.word) {
      return this.giveResultTextGeneric(foundResult.word.meaning);
    } else if (foundResult.group) {
      return this.giveResultTextGeneric(foundResult.group.name);
    } else if (foundResult.language) {
      return this.giveResultTextGeneric(foundResult.language.name);
    }
  }

  private giveResultTextGeneric(text: string): string {
    const regEx = new RegExp(`(^|[^>])(${this.searchedText})([^<]|$)`, 'i');
    let arrayMatch = text.match(regEx);
    let returnValue = text;
    while (arrayMatch) {

      returnValue = returnValue.replace(regEx, `$1<span class="highlightText">$2</span>$3`);

      arrayMatch = returnValue.match(regEx);
    }
    // if (arrayMatch) {

    //   for (const match of arrayMatch) {
    //     returnValue = returnValue.replace(match, `<span class="highlightText">${match}</span>`);
    //   }
    // }
    return returnValue;
  }

  select(selectedResult: SearchResult) {
    this.eventSelect.emit(selectedResult);
  }
}

