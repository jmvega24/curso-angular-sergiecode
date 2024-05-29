import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoMayor?: string;
  hermanoMenor?: string;
  swPregunta: boolean = true;

  getHermanoMayor(): string {
    return this.hermanoMayor || '';
  }

  setHermanoMayor(hermano: string) {
    this.hermanoMayor = hermano;
  }

  getHermanoMenor(){
    return this.hermanoMenor || '';
  }

  setHermanoMenor(hermano: string) {
    this.hermanoMenor = hermano;
  }

  saludar(hermano: string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo(): string {    
    this.swPregunta = !this.swPregunta;
    return this.swPregunta ? 'Mi hijo está bien. Y ¿Cómo está el tuyo?' : '¿Cómo está tu hijo?';
  }

  constructor() { }
}
