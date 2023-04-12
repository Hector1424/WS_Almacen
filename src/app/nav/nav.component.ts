import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/login', title: 'Sesión',  icon:'person', class: '' },
    { path: '/dashboard', title: 'proyectos',  icon: 'dashboard', class: '' },
    { path: '/notificaciones', title: 'Notificaciones',  icon:'notifications', class: '' },
    { path: '/configuración', title: 'Configuración',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems: any[] | undefined;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
