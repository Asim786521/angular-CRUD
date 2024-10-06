import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  imports:[CommonModule,RouterLink]
//   styleUrls: ["./header.component.css"], // Updated property name
})
export class HeaderComponent {
    username = "youngTech";
    title = "this is header";
    @Input() isCreateRoute: boolean = false; 
}
