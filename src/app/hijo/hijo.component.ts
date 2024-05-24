import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() recibeHijo? : string;

  @Output() enviarMensajeDesdeElHijo = new EventEmitter<string>();

  mensajeHijo? : string;
  enviarMensaje() {
    this.mensajeHijo = "Hola padre, muy bien. ¿Y tú?";
    this.enviarMensajeDesdeElHijo.emit(this.mensajeHijo);
  }

}
