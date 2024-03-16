import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
  selector: 'app-role-edit-modal',
  templateUrl: './role-edit-modal.component.html',
  styleUrl: './role-edit-modal.component.css'
})
export class RoleEditModalComponent {
  userRoleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
    this.userRoleForm = this.formBuilder.group({
      userId: [data.id || '', [Validators.required]],
      roleId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.userRoleForm.valid) {
      const formData = this.userRoleForm.value;
      console.log('Form Data:', formData);

      // Here you can send the formData to your backend for further processing
      // Example:
      // this.userService.submitUserRole(formData).subscribe(response => {
      //   console.log('Response from backend:', response);
      // });
    }
  }



}
