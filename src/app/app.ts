import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { Inicio } from './components/inicio/inicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Inicio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'webONA';
}

