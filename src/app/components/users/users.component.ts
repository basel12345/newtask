import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../Service/user.service";

@Component({
  selector: "users-root",
  templateUrl: "./users.component.html"
})
export class UsersComponent implements OnInit {
  Users: any;
  p: number = 1;
  User = {
    q: null
  };
  simpleDrop: any = null;
  id: any;
  perPage: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.Users = res.DataUsers;
    });
  }

  FilterUsers() {
    this.service
      .FilterDAtaUsers(this.User.q, this.perPage, this.id)
      .subscribe(res => {
        this.Users = res["items"];
        this.perPage = 1;
        this.id = this.Users.length;
      });
  }

  LastSeenUsers() {
    this.router.navigate(["./last-users-seen"]);
  }

  ViewProfile(login) {
    this.router.navigate([`./profile/${login}`]);
  }

  ViewFavorites(login) {
    this.router.navigate([`./favorites/${login}`]);
  }
}
