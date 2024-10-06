import { Component, signal } from '@angular/core';


export type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte', 'Ember', 'Backbone', 'Knockout', 'Qwik']);
  public frameworks2 = signal<string[]>([]);

  public toogleContent() {
    this.showContent.update( value => !value );
  }



}
