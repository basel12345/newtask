import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../Service/user.service";
@Component({
  selector: "profile-root",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {
  User: any;
  image: any;
  name: any;
  type: any;
  login: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.User = res.OneUser;
      this.image = this.User["avatar_url"];
      this.name = this.User["name"];
      this.type = this.User["type"];
      this.login = this.User["login"];
    });
  }

  viewReport() {
    this.router.navigate([`./reports/${this.login}`]);
  }
}
