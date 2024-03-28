import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GradeValidatorService {
  constructor() {}
  gradeValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      return new Promise((resolve) => {
        // Assuming you want to validate if the grade is either A, B, C, D, or E
        const validGrades = ['A', 'B', 'C', 'S', 'U'];
        const isValid = validGrades.includes(control.value);
        if (!isValid) {
          resolve({ invalidGrade: 'Grade must be one of: A, B, C, S, or U' });
        } else {
          resolve(null);
        }
      });
    };
  }
}
