import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
//   styleUrls: ["./header.component.css"], // Updated property name
})
export class HeaderComponent {
    username = "youngTech";
    title = "this is header";
}
