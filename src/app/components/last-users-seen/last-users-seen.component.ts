import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../Service/user.service";
@Component({
  selector: "last-users-seen-root",
  templateUrl: "./last-users-seen.component.html"
})
export class LastUsersSeenComponent implements OnInit {
  p: number = 1;
  UsersSeen: any;
  id: void;
  perPage: any;
  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    this.service.getPaginationUser(this.id, this.perPage).subscribe(res => {
      this.UsersSeen = res;
      this.perPage = 5;
      this.id = this.UsersSeen.length;
    });
  }
}
