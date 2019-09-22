import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { LastUsersSeenComponent } from "./last-users-seen.component";

const routes: Routes = [
  {
    path: "",
    component: LastUsersSeenComponent
  }
];
@NgModule({
  declarations: [LastUsersSeenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule
  ],
  exports: [RouterModule],
  providers: []
})
export class LastUsersSeenModule {}
