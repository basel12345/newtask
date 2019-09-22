import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { FavoritesComponent } from "./favorites.component";
import { NgxDnDModule } from "@swimlane/ngx-dnd";

const routes: Routes = [
  {
    path: "",
    component: FavoritesComponent
  }
];
@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule,
    NgxDnDModule
  ],
  entryComponents: [],
  exports: [RouterModule, NgxDnDModule],
  providers: []
})
export class FavoritesModule {}
