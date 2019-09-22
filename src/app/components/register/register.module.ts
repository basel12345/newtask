import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterComponent
  }
];
@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class RegisterModule {}
