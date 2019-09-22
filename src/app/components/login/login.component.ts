import { Component, OnInit } from "@angular/core";
@Component({
  selector: "login-root",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  User = {
    email: null,
    password: null
  };

  constructor() {}

  ngOnInit() {}

  Submit(frm) {
    console.log(this.User);
  }
}
