import { OnInit } from "@angular/core";

export class HeaderController implements OnInit {
  user: any;
  isLoggedIn: boolean = false;

 

  ngOnInit(): void {
    this.checkUserStatus();
  }

  checkUserStatus(): void {
 
  }

  logout(): void {
 
  }
}