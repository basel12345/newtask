import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { ReportsComponent } from "./reports.component";
import { ReportResolver } from "../Resolver/reportUser.resolver";

const routes: Routes = [
  {
    path: "",
    component: ReportsComponent,
    resolve: {
      Report: ReportResolver
    }
  }
];
@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule
  ],
  entryComponents: [],
  exports: [RouterModule],
  providers: [ReportResolver]
})
export class ReportsModule {}
