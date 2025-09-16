import { Disco } from "./Disco.js";
import { IDatos } from "./IDatos.js";

export class Cd extends Disco implements IDatos {

    constructor(nombre: string, capacidad: number, contenido: string, tipo: string, velocidad: number) {
        super(nombre, capacidad, contenido, tipo, velocidad);
    }

    escribirDatos(datos: string): void{
        console.log("Escribiendo datos en el CD con láser");
    }
    leerDatos(): void {
        console.log("Leyendo datos del CD con láser");
    }
    girarDisco(): void {
        console.log(`El CD ${this.nombre} está girando a ${this.velocidad}.`);
    }
}