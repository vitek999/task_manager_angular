import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import {ImportanceLevel} from '../model/importance-level';

@Injectable({
  providedIn: 'root'
})
export class ImportanceLevelService {
  url = 'http://localhost:8080/importancelevel/';

  constructor(private http: HttpClient) { }

  getImportanceLevels() {
    return this.http.get<ImportanceLevel[]>(this.url);
  }

  newImportanceLevel(importanceLevel: ImportanceLevel) {
    return this.http.post<void>(this.url, importanceLevel);
  }

  deleteImportanceLevelId(importanceLevelId: number) {
    return this.http.delete<void>(this.url + importanceLevelId);
  }

  updateImportanceLevel(importanceLevel: ImportanceLevel) {
    return this.http.put(this.url, importanceLevel);
  }
}
