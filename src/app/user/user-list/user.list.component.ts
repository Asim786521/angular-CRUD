// src/app/views/user/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { getUser, User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],  
  templateUrl: './user-list.component.html',
  // styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: getUser[] = [];

  user:getUser |any;
  constructor(
    private userService: UserService,
 
  ) {}


  ngOnInit(): void {
    this.userService.getUser(3).subscribe(data => {
      this.user = data;
 
      
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
