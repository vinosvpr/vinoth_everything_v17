import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RouterOutlet, RouterLink } from '@angular/router';
declare var AOS: any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeeComponent, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    AOS.init({
      // offset: 200,
      // duration: 600,
      // easing: 'ease-in-sine',
      // delay: 100,
      // once: true,
    });
  }
}
