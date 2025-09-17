import { Disco } from "./Disco.js";

export class Rueda extends Disco {
    constructor(nombre: string, capacidad: number, contenido: string, tipo: string, velocidad: number) {
        super(nombre, capacidad, contenido, tipo, velocidad);
    }   

    girarDisco(): void {
        console.log(`La Rueda ${this.nombre} está girando a ${this.velocidad}.`);
    }
}