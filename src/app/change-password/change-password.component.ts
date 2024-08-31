import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  errorMessage: string = '';
  adminD: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient // Inject HttpClient
  ) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatch });
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  passwordsMatch(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const data = localStorage.getItem('adminData');
      if (data) {
        this.adminD = JSON.parse(data);
      }
      const { oldPassword, newPassword } = this.changePasswordForm.value;
      const payload = { id: this.adminD.id, oldPassword, newPassword };
      
      // Replace with your actual API endpoint
      const apiUrl = `http://localhost:8090/admin/changePassword/${this.adminD.id}`;

      this.http.put(apiUrl, payload)
        .subscribe(
          response => {
            console.log('Password changed successfully', response);
            localStorage.removeItem('adminData');
            this.router.navigate(['/admin']);
            this.errorMessage = ''; // Clear the error message on success
          },
          error => {
            console.error('Error changing password', error);
            this.errorMessage = error.message || 'An error occurred while changing the password'; // Display the error message from the server
          }
        );
    }
  }
}





