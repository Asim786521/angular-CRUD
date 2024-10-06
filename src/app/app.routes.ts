import { Routes } from '@angular/router';
// import { UserListComponent } from './user/user-list/user.list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserListComponent } from './user/user-list/user.list.component';

export const routes: Routes = [
    { path: 'user', component: UserListComponent},
    { path: 'user/create', component: UserCreateComponent },
    { path: 'user/edit/:id', component: UserUpdateComponent},
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    
];
