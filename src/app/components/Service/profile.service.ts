import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
let URL = "https://api.github.com/";
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getOneUser(username) {
    return this.http.get(`${URL}users/${username}`);
  }
}
