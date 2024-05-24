import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  mensajeDesdeElPadre?: string;
  enviarMensajeDesdeElPadre() {
    this.mensajeDesdeElPadre = 'Hola hijo, ¿cómo estás?';
  }

  recibePadre? : string;
  capturarMensajeDelHijo($event: string) {
    this.recibePadre = $event;
  }

}

