import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  standalone:true,
  imports: [FormsModule], 
  templateUrl: './user-update.component.html',
//   styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: User | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((data: User) => {
      this.user = data;
    });
  }

  updateUser() {
    if (this.user) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        // Handle successful update
      });
    }
  }
}
