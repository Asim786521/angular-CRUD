import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // Adjust the path accordingly
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserListComponent } from './user/user-list/user.list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
 
 
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
  isCreateRoute: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isCreateRoute = this.router.url.includes('/user/create');
    });
  }

  navigateToCreate() {
    this.router.navigate(['/user/create']);
  }

  navigateToUpdate() {
    this.router.navigate(['/user/edit', 1]);  
  }

  navigateToUserList() {
    this.router.navigate(['/user']);
  }
}
