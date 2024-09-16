import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { getUser, User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-user-update',
  standalone:true,
  imports: [CommonModule, RouterModule,FormsModule],  
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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(1).subscribe((data: getUser) => {
      this.user = data;
   
      
    });
  }

  updateUser() {
    if (this.user) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        
      });
    }
  }
}
