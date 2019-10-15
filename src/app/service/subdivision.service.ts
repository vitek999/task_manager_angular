import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subdivision} from '../model/subdivision';

@Injectable({
  providedIn: 'root'
})
export class SubdivisionService {
  url = 'http://localhost:8080/subdivision/';

  constructor(private http: HttpClient) { }

  getSubdivisions() {
    return this.http.get<Subdivision[]>(this.url);
  }

  newSubdivision(subdivision: Subdivision) {
    return this.http.post<void>(this.url, subdivision);
  }

  deleteSubdivision(subdivisionId: number) {
    return this.http.delete<void>(this.url + subdivisionId);
  }

  updateSubdivision(subdivision: Subdivision) {
    return this.http.put(this.url, subdivision);
  }
}
