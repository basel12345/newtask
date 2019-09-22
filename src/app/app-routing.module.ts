import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./components/login/login.module#LoginModule"
  },
  {
    path: "register",
    loadChildren: "./components/register/register.module#RegisterModule"
  },
  {
    path: "users",
    loadChildren: "./components/users/users.module#UsersModule"
  },
  {
    path: "last-users-seen",
    loadChildren:
      "./components/last-users-seen/last-users-seen.module#LastUsersSeenModule"
  },
  {
    path: "profile/:id",
    loadChildren: "./components/profile/profile.module#ProfileModule"
  },
  {
    path: "reports/:id",
    loadChildren: "./components/reports/reports.module#ReportsModule"
  },
  {
    path: "favorites/:id",
    loadChildren: "./components/favorites/favorites.module#FavoritesModule"
  },
  { path: "**", redirectTo: "login" }
];

//
@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
