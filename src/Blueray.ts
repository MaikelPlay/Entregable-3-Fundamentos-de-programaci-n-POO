import { Disco } from "./Disco.js";
import { IDatos } from "./IDatos.js";

export class Blueray extends Disco implements IDatos {
    constructor(nombre: string, capacidad: number, contenido: string, tipo: string, velocidad: number) {
        super(nombre, capacidad, contenido, tipo, velocidad);
    }

    girarDisco(): void {
        console.log(`El Blueray ${this.nombre} está girando a ${this.velocidad}.`);
    }

    escribirDatos(datos: string): void{
        console.log("Escribiendo datos en el Blueray con láser azul");
    }
    leerDatos(): void {
        console.log("Leyendo datos del Blueray con láser azul");
    }




}