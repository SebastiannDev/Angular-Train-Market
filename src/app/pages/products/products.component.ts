import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {

  public loading: boolean = true;
  public productList: IProduct[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((products: IProduct[]) => {
      this.productList = products;
      this.loading = false;
    });
  }

  navegate(id: number) {
    this._router.navigate(['/products', id]);
  }
}
