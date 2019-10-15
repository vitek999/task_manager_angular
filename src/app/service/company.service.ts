import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = 'http://localhost:8080/company/';

  constructor(private http: HttpClient) {
  }

  getCompanies() {
    return this.http.get<Company[]>(this.url);
  }

  newCompany(companyName: string) {
    return this.http.post<void>(this.url, {id: 0, name: companyName});
  }

  deleteCompany(companyId: number) {
    return this.http.delete<void>(this.url + companyId);
  }

  updateCompany(company: Company) {
    return this.http.put(this.url, company);
  }
}
