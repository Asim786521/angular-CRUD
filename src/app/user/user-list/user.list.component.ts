// // src/app/views/user/user-list.component.ts
// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { User } from '../../model/user.model';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-user-list',
//   standalone:true,
//   imports: [RouterModule,CommonModule],
 
//   templateUrl: './user-list.component.html',
//   // styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent implements OnInit {
//   users: User[] = [];

//   constructor(private http: HttpClient) {}

//   // ngOnInit(): void {
//   //   this.userService.getUsers().subscribe(data => {
//   //     this.users = data;
//   //   });
//   // }

//   // deleteUser(id: number): void {
//   //   this.userService.deleteUser(id).subscribe(() => {
//   //     this.users = this.users.filter(user => user.id !== id);
//   //   });
//   // }
// }
