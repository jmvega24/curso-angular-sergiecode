import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title : string = 'Angular con Sergie Code';

  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }


}
