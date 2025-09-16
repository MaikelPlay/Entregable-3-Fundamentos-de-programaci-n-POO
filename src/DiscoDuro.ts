import {IDatos} from "./IDatos.js";
import {Disco} from "./disco.js";

export class DiscoDuro extends Disco implements IDatos {

    constructor(nombre: string, capacidad: number, contenido: string, tipo: string, velocidad: number) {
        super(nombre, capacidad, contenido, tipo, velocidad);
    }  

    escribirDatos(datos: string): void{
        console.log("Escribiendo datos en el disco duro con un cabezal magnético");
    }
    leerDatos(): void {
        console.log("Leyendo datos del disco duro con un cabezal magnético");
    }
    girarDisco(): void {
        console.log(`El CD ${this.nombre} está girando a ${this.velocidad}.`);
    }















}

