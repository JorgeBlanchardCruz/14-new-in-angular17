import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map, Observable } from 'rxjs';


interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {

    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( )
      .subscribe( res => {

        this.#state.set({
          loading: false,
          users: res.data,
        })

      });

    }

    public getUserById(id: string): Observable<User> {
      return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        map( res => res.data )
      );
    }

}
