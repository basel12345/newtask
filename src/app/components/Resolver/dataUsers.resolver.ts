import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { UserService } from "../Service/user.service";

@Injectable()
export class DataUsersResolver implements Resolve<any> {
  constructor(private userService: UserService) {}

  resolve() {
    return this.userService.getDataUsers();
  }
}
