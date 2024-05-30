import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContratoComponent } from './shared/contrato/contrato.component'
import { DatosComponent } from './tabla/datos/datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContratoComponent, DatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientAngular';
}

