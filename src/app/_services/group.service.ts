import { Injectable } from '@angular/core';
import {Group} from '../../class/group';
import {GROUPS} from '../../mock/mock-groups';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Observable<Group[]> {
    // MOC of Groups
    return of(GROUPS);
  }
}
