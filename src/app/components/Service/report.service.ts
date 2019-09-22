import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
let URL = "https://api.github.com/";
@Injectable({
  providedIn: "root"
})
export class ReportService {
  constructor(private http: HttpClient) {}

  reportUser(username) {
    return this.http.get(`${URL}users/${username}/repos`);
  }

  paginationReports(username, p, perPage) {
    return this.http.get(
      `https://api.github.com/users/${username}/repos?per_page=${p}&page=${perPage}`
    );
  }
}
