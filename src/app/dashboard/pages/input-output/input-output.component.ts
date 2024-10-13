import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { interval, take, tap } from 'rxjs';


import { ProductCardComponent } from './ui/product-card/product-card.component';

import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent implements OnDestroy{

  public products = signal<Product[]>([
    { id: 1, name: 'Product 1', quantity: 10 },
    { id: 2, name: 'Product 2', quantity: 20 },
    { id: 3, name: 'Product 3', quantity: 30 },
    { id: 4, name: 'Product 4', quantity: 40 }
  ]);

  private intervalSubscription = interval(1000).pipe(
    tap(() => {

      this.products.update( (products) => [
        ...products,
        {
          id: products.length + 1,
          name: `Product ${products.length + 1}`,
          quantity: 0
        },
      ]);

    }),

    take(7) //despues de 7 subscripciones se detiene y se limpia

  ).subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe(); //para evitar perdida de memoria, se desuscribe
  }

}
