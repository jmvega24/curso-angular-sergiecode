import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ) {}

  nombre?: string;

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Antonio');
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor() || '');
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  mensajeDesdeElPadre?: string;
  enviarMensajeDesdeElPadre() {
    this.mensajeDesdeElPadre = 'Hola hijo, ¿cómo estás?';
  }

  mensajeDesdeElHijo? : string;
  capturarMensajeDelHijo($event: string) {
    this.mensajeDesdeElHijo = $event;
  }

}
