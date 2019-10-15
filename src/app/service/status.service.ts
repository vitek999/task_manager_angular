import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Status} from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  url = 'http://localhost:8080/status/';

  constructor(private http: HttpClient) { }

  getStatuses() {
    return this.http.get<Status[]>(this.url);
  }

  newStatus(status: Status) {
    return this.http.post<void>(this.url, status);
  }

  deleteStatus(statusId: number) {
    return this.http.delete<void>(this.url + statusId);
  }

  updateStatus(status: Status) {
    return this.http.put(this.url, status);
  }
}
