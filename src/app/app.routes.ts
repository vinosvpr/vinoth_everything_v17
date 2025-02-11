import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CssAnimationComponent } from './components/css-animation/css-animation.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { BikeRentalComponent } from './components/bike-rental/bike-rental.component';
import { MovieBookingComponent } from './components/movie-booking/movie-booking.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { title: 'Vinoth - Portfolio: Login', path: '', component: LoginComponent },
  {
    title: 'Vinoth - Login',
    path: 'login',
    component: LoginComponent,
  },
  {
    title: 'Vinoth - Home',
    path: 'home',
    component: HomeComponent,
  },
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
    component: MovieBookingComponent,
  },
  {
    title: 'Vinoth - Portfolio: Drag and Drop',
    path: 'drag-and-drop',
    component: DragAndDropComponent,
  },
  {
    title: 'Vinoth - Portfolio: Page Not Found',
    path: '**',
    component: PageNotFoundComponent,
  },
];
