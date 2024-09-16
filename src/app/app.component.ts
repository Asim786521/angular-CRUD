import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // Adjust the path accordingly
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user.list.component';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent,UserListComponent,UserCreateComponent,UserUpdateComponent,CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';

  constructor (private router:Router) {}


  ngOnInit():void{
  this.router.events.subscribe(()=>{
    this.isCreateRoute=this.router.url.includes('/create')
  })
  }
  isCreateRoute: boolean = false;
}
