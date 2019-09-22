import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "register-root",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  User = {
    email: null,
    username: null,
    password: null,
    fileToUploadL: null,
    gender: null
  };
  genders = [{ name: "male", id: 1 }, { name: "famale", id: 2 }];

  imageUrl: string = "/assets/images/Flag_of_None.svg.png";
  constructor(private router: Router) {}

  ngOnInit() {}

  handelFileInput(file: FileList) {
    this.User.fileToUploadL = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.User.fileToUploadL);
  }

  Submit(frm) {
    if (frm.vaild) {
      this.router.navigate(["/users"]);
    }
  }
}
