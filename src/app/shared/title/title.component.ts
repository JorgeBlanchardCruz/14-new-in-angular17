import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent {

    public title = signal('Title');

    public setTitle(value: string) {
      this.title.set(value);
    }

}
