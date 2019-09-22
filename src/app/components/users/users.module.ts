import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UsersComponent } from "./users.component";
import { DataUsersResolver } from "../Resolver/dataUsers.resolver";
import { NgxPaginationModule } from "ngx-pagination";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    resolve: {
      DataUsers: DataUsersResolver
    }
  }
];
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule
  ],
  entryComponents: [],
  exports: [RouterModule],
  providers: [DataUsersResolver]
})
export class UsersModule {}
