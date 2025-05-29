import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Inicio } from './components/inicio/inicio';

export const routes: Routes = [{ path: 'login', component: Login },{path: 'inicio', component: Inicio}
];
