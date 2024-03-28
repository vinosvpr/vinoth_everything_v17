import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CssAnimationComponent } from './components/css-animation/css-animation.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { BikeRentalComponent } from './components/bike-rental/bike-rental.component';
import { MmovieBookingComponent } from './components/mmovie-booking/mmovie-booking.component';

export const routes: Routes = [
  { title: 'Vinoth - Portfolio: Home', path: '', component: HomeComponent },
  {
    title: 'Vinoth - Portfolio: Css Animation',
    path: 'animation',
    component: CssAnimationComponent,
  },
  {
    title: 'Vinoth - Portfolio: Text to speech',
    path: 'text-to-speech',
    component: TextToSpeechComponent,
  },
  {
    title: 'Vinoth - Portfolio: Counter- NgRX',
    path: 'counter',
    component: CounterComponent,
  },
  {
    title: 'Vinoth - Portfolio: Products',
    path: 'products',
    component: ProductsComponent,
  },
  {
    title: 'Vinoth - Portfolio: Employee Registrarion',
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    title: 'Vinoth - Portfolio: Student Registrarion',
    path: 'student-registration',
    component: StudentRegistrationComponent,
  },
  {
    title: 'Vinoth - Portfolio: Bike Rental Booking',
    path: 'bike-rental-booking',
    component: BikeRentalComponent,
  },
  {
    title: 'Vinoth - Portfolio: Movie Ticket Booking',
    path: 'movie-ticket-booking',
    component: MmovieBookingComponent,
  },
];
