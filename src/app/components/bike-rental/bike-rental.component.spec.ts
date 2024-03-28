import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRentalComponent } from './bike-rental.component';

describe('BikeRentalComponent', () => {
  let component: BikeRentalComponent;
  let fixture: ComponentFixture<BikeRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BikeRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
