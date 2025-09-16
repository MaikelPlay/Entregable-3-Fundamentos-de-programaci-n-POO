export class Disco {
    #nombre: string;
    #capacidad: number;
    #contenido: string;
    #tipo: string;

    constructor(nombre: string, capacidad: number, tipo: string) {
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#contenido = "";
        this.#tipo = tipo;
    }

    girarDisco(): string {
        return `El disco ${this.#nombre} está girando.`;
    }

    informacion(): void {
        console.log(`Nombre: ${this.#nombre}, Capacidad: ${this.#capacidad}, Tipo: ${this.#tipo}, Contenido: ${this.#contenido}`);
    }

    get nombre(): string {
        return this.#nombre;
    }
    set nombre(nombre: string) {
        this.#nombre = nombre;
    }
    get capacidad(): number {
        return this.#capacidad;
    }
    set capacidad(capacidad: number) {
        this.#capacidad = capacidad;
    }
    get contenido(): string {
        return this.#contenido;
    }
    set contenido(contenido: string) {
        this.#contenido = contenido;
    }
    get tipo(): string {
        return this.#tipo;
    }
    set tipo(tipo: string) {
        this.#tipo = tipo;
    }
}