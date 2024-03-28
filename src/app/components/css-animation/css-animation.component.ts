import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-css-animation',
  standalone: true,
  imports: [CommonModule, MatListModule, MatChipsModule],
  templateUrl: './css-animation.component.html',
  styleUrl: './css-animation.component.css',
})
export class CssAnimationComponent implements OnInit {
  constructor() {}

  boxFlag: boolean = false;
  circleFlag: boolean = false;
  triangleFlag: boolean = false;
  heartFlag: boolean = false;
  moonFlag: boolean = false;
  starFlag: boolean = false;

  ngOnInit(): void {
    this.boxFlag = true;
  }
  boxClick() {
    this.boxFlag = true;
    this.circleFlag = false;
    this.triangleFlag = false;
    this.heartFlag = false;
    this.moonFlag = false;
    this.starFlag = false;
  }
  circleClick() {
    this.circleFlag = true;
    this.boxFlag = false;
    this.triangleFlag = false;
    this.heartFlag = false;
    this.moonFlag = false;
    this.starFlag = false;
  }
  triangleClick() {
    this.triangleFlag = true;
    this.heartFlag = false;
    this.moonFlag = false;
    this.starFlag = false;
    this.circleFlag = false;
    this.boxFlag = false;
  }
  heartClick() {
    this.heartFlag = true;
    this.triangleFlag = false;
    this.moonFlag = false;
    this.starFlag = false;
    this.circleFlag = false;
    this.boxFlag = false;
  }
  moonClick() {
    this.moonFlag = true;
    this.heartFlag = false;
    this.triangleFlag = false;
    this.starFlag = false;
    this.circleFlag = false;
    this.boxFlag = false;
  }
  starClick() {
    this.starFlag = true;
    this.boxFlag = false;
    this.circleFlag = false;
    this.triangleFlag = false;
    this.heartFlag = false;
    this.moonFlag = false;
  }
}
