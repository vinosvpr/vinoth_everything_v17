import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmovieBookingComponent } from './mmovie-booking.component';

describe('MmovieBookingComponent', () => {
  let component: MmovieBookingComponent;
  let fixture: ComponentFixture<MmovieBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmovieBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmovieBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
