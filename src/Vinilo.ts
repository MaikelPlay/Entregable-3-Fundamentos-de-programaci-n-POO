import { Disco } from "./Disco.js";
import { IDatos } from "./IDatos.js";

export class Vinilo extends Disco implements IDatos {
    constructor(nombre: string, capacidad: number, contenido: string, tipo: string, velocidad: number) {
        super(nombre, capacidad, contenido, tipo, velocidad);
    }   

    girarDisco(): void {
        console.log(`El Vinilo ${this.nombre} está girando a ${this.velocidad}.`);
    }

    escribirDatos(datos: string): void{
        console.log("No se pueden escribir datos en un vinilo");
    }
    leerDatos(): void{
        console.log("Leyendo datos del vinilo con una aguja");
    }






}