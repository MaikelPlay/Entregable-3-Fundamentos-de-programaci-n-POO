import { Disco } from "./Disco.js";

export class Fresbee extends Disco {
    constructor(nombre: string, capacidad: number, contenido: string, tipo: string, velocidad: number) {
        super(nombre, capacidad, contenido, tipo, velocidad);
    }

    girarDisco(): void {
        console.log(`El Fresbee ${this.nombre} está girando en el aire.`);
    }
}