import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ReportService } from "../Service/report.service";

@Injectable()
export class ReportResolver implements Resolve<any> {
  constructor(private reportService: ReportService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let username = route.params.id;
    return this.reportService.reportUser(username);
  }
}
