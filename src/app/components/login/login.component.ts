import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "login-root",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  User = {
    email: null,
    password: null
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  Submit(frm) {
    if (frm.valid) {
      this.router.navigate(["/users"]);
      console.log(this.User);
    }
  }
}
