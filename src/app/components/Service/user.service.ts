import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
let URL = "https://api.github.com/";
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getDataUsers() {
    return this.http.get(`${URL}users`);
  }

  getPaginationUser(p, perPage) {
    return this.http.get(`${URL}users?per_page=${perPage}&since=${p}`);
  }

  FilterDAtaUsers(q, perPage, id) {
    return this.http.get(
      `${URL}search/users?q=${q}&per_page=${perPage}&page=${id}`
    );
  }
}
