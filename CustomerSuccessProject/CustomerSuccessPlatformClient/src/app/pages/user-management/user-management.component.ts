import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RoleEditModalComponent } from '../../components/role-edit-modal/role-edit-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  dataSource: any[]
  displayedColumns = ["Name", "Email", "Role", "Actions"]
  constructor(private apiService: ApiService, public dialog: MatDialog,) {
    apiService.getAllUsers().subscribe(users => {
      console.log(users);
      this.dataSource = JSON.parse(users).items;
      console.log(this.dataSource);
    });
    this.dataSource = [];
  }

  openRoleEdit(user: any) {
    const dialogRef = this.dialog.open(RoleEditModalComponent, {
      data: { user }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
