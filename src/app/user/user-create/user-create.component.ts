import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  standalone:true,
  imports: [FormsModule], 
  templateUrl: './user-create.component.html',
//   styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  user: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService) {}

  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
 
    });
  }
}
