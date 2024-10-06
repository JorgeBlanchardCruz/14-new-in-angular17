import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';


import { TitleComponent } from '@shared/title/title.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()" />

    <pre> {{
    frameworksAsProperty | json
    }}</pre>

    <pre> {{
    frameworksAsSignal() | json
    }}</pre>

  `,
  styles: ``
})
export default class ChangeDetectionComponent {


  public currentFramework = computed(
    () => `Change detection - ${ this.frameworksAsSignal().name }`
  );

  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  })

  public frameworksAsProperty = ({
    name: 'Angular',
    releaseDate: '2016',
  })


  constructor() {

    setTimeout(() => {
      this.frameworksAsProperty.name = 'React';
      this.frameworksAsProperty.releaseDate = '2013';

       //El uso de Signals permiten un mucho mejor rendimiento en la detección de cambios
      this.frameworksAsSignal.update( value => {
        value.name = 'Vue';
        value.releaseDate = '2014';

        return { ...value };
      });

      console.log('hecho');
    }, 3000);

  }

}
