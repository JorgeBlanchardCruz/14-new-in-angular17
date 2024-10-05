import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../../app.routes';


@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {

  public menuItems = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter ( route => route && route.path )
    .filter ( route => !route.path?.includes(':') );

  constructor() {

    console.log(routes);

  }

}
