import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">

      <h1>Heavy Loaders Slow</h1>

    </section>
  `,
  styles: ``
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoadersSlowComponent');

    const start = Date.now();

    while(Date.now() - start < 3000) { }

    console.log('loaded');

  }

}
