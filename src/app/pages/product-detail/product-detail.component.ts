import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})

export class ProductDetailComponent implements OnInit {
  public loading: boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      this._apiService.getProduct(param['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      });
    });
  }
}
