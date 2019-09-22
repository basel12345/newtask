import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { ProfileComponent } from "./profile.component";
import { OneUserResolver } from "../Resolver/oneUser.resolver";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    resolve: {
      OneUser: OneUserResolver
    }
  }
];
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule
  ],
  entryComponents: [],
  exports: [RouterModule],
  providers: [OneUserResolver]
})
export class ProfileModule {}
