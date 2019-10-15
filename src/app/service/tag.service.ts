import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  url = 'http://localhost:8080/tag/';

  constructor(private http: HttpClient) { }

  getTags() {
    return this.http.get<Tag[]>(this.url);
  }

  newTag(tag: Tag) {
    return this.http.post<void>(this.url, status);
  }

  deleteTag(tagId: number) {
    return this.http.delete<void>(this.url + tagId);
  }

  updateTag(tag: Tag) {
    return this.http.put(this.url, tag);
  }
}
