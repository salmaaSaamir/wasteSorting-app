import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMachinComponent } from './add-machin/add-machin.component';
import { AddMatrialesComponent } from './add-matriales/add-matriales.component';
import { AdminMachinComponent } from './admin-machin/admin-machin.component';
import { AdminComponent } from './admin/admin.component';
import { AssignMatrialesComponent } from './assign-matriales/assign-matriales.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListMatrialesComponent } from './list-matriales/list-matriales.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path:'',component:LoginComponent} ,
  { path:'register',component: RegisterComponent },
  { path:'users',component: UsersComponent },
  { path:'add',component: AddMatrialesComponent },
  { path:'list',component: ListMatrialesComponent },
  { path:'assign',component: AssignMatrialesComponent },
  { path:'admin',component: AdminComponent },
  { path:'addMachine',component: AddMachinComponent },
  { path:'machinInfo',component: AdminMachinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
