import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatTooltipModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  isSidePanelVisible: boolean = false;

  employeeRegistrationForm: FormGroup;
  registeredEmployee: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.employeeRegistrationForm = this.formBuilder.group({
      empName: ['', Validators.required],
      empRole: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.employeeRegistrationForm.valid) {
      const newEmployee = this.employeeRegistrationForm.value;
      this.registeredEmployee.push(newEmployee);
      console.log(`Registered Employees:`, this.registeredEmployee);
      this.employeeRegistrationForm.reset();
    }
  }
  addEmp() {
    this.isSidePanelVisible = true;
  }
  closeEmp() {
    this.isSidePanelVisible = false;
  }
}
