import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  //@Input(required: true) public product: Product; equivale a lo siguiente:
  public product = input.required<Product>();

  //@Output() public onIncrementQuantity = new EventEmitter<number>(); equivale a lo siguiente:
  public onIncrementQuantity = output<number>();

  public incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  //Ejemplo de efecto.
  //Como product es una señal, se ejecutará cada vez que se actualice el valor de la señal
  public loginEffect = effect(() => { console.log( this.product().name ); });

}
