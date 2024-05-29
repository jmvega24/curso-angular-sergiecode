import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() inputHijo? : string;

  @Output() outputHijo = new EventEmitter<string>();

  mensajeHijo? : string;
  enviarMensaje() {
    this.mensajeHijo = "Hola padre, muy bien, gracias. ¿Y tú?";
    this.outputHijo.emit(this.mensajeHijo);
  }

}
