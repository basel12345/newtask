import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReportService } from "../Service/report.service";
@Component({
  selector: "reports-root",
  templateUrl: "./reports.component.html"
})
export class ReportsComponent implements OnInit {
  Report: any;
  pagination: any;

  login: any;
  id: any;
  p: number = 1;
  page: number;
  perPage: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ReportService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.login = res.id;
    });
    this.route.data.subscribe(res => {
      this.Report = res.Report;
      this.id = res.Report.length;
    });
    this.getReportsByPagination();
  }

  getReportsByPagination() {
    var p: number = this.id;
    this.page = p;
    this.perPage = 1;
    this.service
      .paginationReports(this.login, p, this.perPage)
      .subscribe(res => {
        this.pagination = res;
      });
  }
}
