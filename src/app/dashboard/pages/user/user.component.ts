import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="" />

    @if (user()) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

        <div>
          <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
          <p>{{ user()?.email }}</p>
        </div>
      </section>
    }
    @else {
      <p>Cargando info</p>
    }
  `,
  styles: ``
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById(id) )
    )
  )

  constructor() {
    this.route.params.subscribe( params => {
      console.log({params});
    });
  }

}
