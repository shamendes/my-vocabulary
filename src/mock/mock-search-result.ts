import { SearchResult } from '../class/search-result';
import { LANGUAGES } from './mock-languages';
import { WORDS } from './mock-words';
import { GROUPS } from './mock-groups';

export const SEARCH_RESULTS: SearchResult[] = [
    {language: LANGUAGES[0], group: null, word: null},
    {language: null, group: GROUPS[0], word: null},
    {language: null, group: null, word: WORDS[0]},
    {language: null, group: null, word: WORDS[1]},
    {language: null, group: null, word: WORDS[2]}
];
