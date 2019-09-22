import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "favorites-root",
  templateUrl: "./favorites.component.html"
})
export class FavoritesComponent implements OnInit {
  User = [
    { name: "user1", id: 1 },
    { name: "user2", id: 2 },
    { name: "user3", id: 3 },
    { name: "user4", id: 4 },
    { name: "user5", id: 5 },
    { name: "user6", id: 6 },
    { name: "user7", id: 7 },
    { name: "user8", id: 8 }
  ];
  Array;
  constructor() {}
  ngOnInit() {}

  delete(i) {
    const index = this.User.indexOf(i);
    this.User.splice(index, 1);
  }
}
