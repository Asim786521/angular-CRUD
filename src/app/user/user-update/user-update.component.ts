import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { getUser, User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user.list.component';
 

@Component({
  selector: 'app-user-update',
  standalone:true,
  imports: [CommonModule, RouterModule,FormsModule,UserListComponent],  
  templateUrl: './user-update.component.html',
//   styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: getUser | any ;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Subscribe to route parameters
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      // Fetch user data only if id is defined
      if (id !== undefined) {
        this.userService.getUser(id).subscribe((data: getUser) => {
          this.user = data;
        });
      }
    });
  }

  updateUser() {
    if (this.user) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        
      });
    }
  }
}
