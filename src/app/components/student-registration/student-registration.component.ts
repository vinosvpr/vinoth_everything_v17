import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GradeValidatorService } from '../../servies/grade-validator.service';
@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css',
})
export class StudentRegistrationComponent {
  studentList: any[] = [
    { sId: 1, name: 'Vinoth', gender: 'Male', grade: 'S', isPresent: true },
    { sId: 2, name: 'Narayanan', gender: 'Male', grade: 'S', isPresent: true },
    { sId: 3, name: 'Gayathri', gender: 'Female', grade: 'S', isPresent: true },
    { sId: 4, name: 'Kumar', gender: 'Male', grade: 'U', isPresent: false },
    { sId: 5, name: 'Karthi', gender: 'Male', grade: 'B', isPresent: false },
    { sId: 6, name: 'Venkat', gender: 'Male', grade: 'S', isPresent: true },
  ];

  isSidePanelVisible: boolean = false;
  studentRegistrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private gradeValidatorService: GradeValidatorService
  ) {
    this.studentRegistrationForm = this.formBuilder.group({
      sId: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      grade: [
        '',
        Validators.required,
        this.gradeValidatorService.gradeValidator(),
      ],
      isPresent: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.studentRegistrationForm.valid) {
      const newStudent = this.studentRegistrationForm.value;
      this.studentList.push(newStudent);
      this.studentRegistrationForm.reset();
    }
  }
  getAttendanceStatus(isPresent: boolean): string {
    return isPresent ? 'Present' : 'Absent';
  }
  addStudent() {
    this.isSidePanelVisible = true;
  }
  closeStudent() {
    this.isSidePanelVisible = false;
  }
}
