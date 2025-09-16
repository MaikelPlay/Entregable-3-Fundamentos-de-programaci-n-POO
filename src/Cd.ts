import {Disco} from "./disco.js";
import {IDatos} from "./IDatos.js";

export class Cd extends Disco implements IDatos {

    constructor(nombre: string, capacidad: number, tipo: string, velocidad: number) {
        super(nombre, capacidad, tipo, velocidad);
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