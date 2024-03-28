import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable, delay, startWith } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule, MatProgressSpinnerModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  showLoader$ = this.loaderService.loadingAction$;
  products$!: Observable<any>;

  constructor(private loaderService: LoaderService, private http: HttpClient) {}

  ngOnInit(): void {
    this.showLoader$ = this.loaderService.loadingAction$.pipe(startWith(true));
    this.loaderService.showLoader();
    this.loadProducts();
  }

  loadProducts(): void {
    this.products$ = this.http.get('https://fakestoreapi.com/products');
    // .pipe(delay(2000));
    this.products$.subscribe({
      next: () => {
        this.loaderService.hideLoader();
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.loaderService.hideLoader();
      },
    });
  }
}
