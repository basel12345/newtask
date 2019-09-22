import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ProfileService } from "../Service/profile.service";

@Injectable()
export class OneUserResolver implements Resolve<any> {
  constructor(private profileService: ProfileService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let username = route.params.id;
    return this.profileService.getOneUser(username);
  }
}
