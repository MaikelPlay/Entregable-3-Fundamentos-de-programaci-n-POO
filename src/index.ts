import { Cd } from "./Cd.js";
import { DiscoDuro } from "./DiscoDuro.js";


const CD1 = new Cd("CD1", 700, "Música", "CD-ROM", 200);
const CD2 = new Cd("CD2", 600, "Fotos", "CD-RW", 300);
const DiscoDuro1 = new DiscoDuro("DiscoDuro1", 1000000, "Documentos", "HDD", 7200);
const DiscoDuro2 = new DiscoDuro("DiscoDuro2", 2000000, "Videos", "SSD", 10000);
const Vinilo1 = new DiscoDuro("Vinilo1", 500, "Música clásica", "Vinilo", 33);
const Vinilo2 = new DiscoDuro("Vinilo2", 1000, "Rock", "Vinilo", 45);
const Blueray1 = new DiscoDuro("Blu-ray1", 25000, "Películas", "Blu-ray", 6000);
const Blueray2 = new DiscoDuro("Blu-ray2", 50000, "Juegos", "Blu-ray", 12000);
const Rueda1 = new DiscoDuro("Rueda1", 0, "N/A", "Rueda", 0);
const Rueda2 = new DiscoDuro("Rueda2", 0, "N/A", "Rueda", 0);
const Fresbee1 = new DiscoDuro("Fresbee1", 0, "N/A", "Fresbee", 0);
const Fresbee2 = new DiscoDuro("Fresbee2", 0, "N/A", "Fresbee", 0);



CD1.girarDisco();
CD1.leerDatos();
CD1.escribirDatos("Nuevas canciones");
CD1.informacion();
console.log(" ");

CD2.girarDisco();
CD2.leerDatos();
CD2.escribirDatos("Nuevas fotos");
CD2.informacion();
console.log(" ");

DiscoDuro1.girarDisco();
DiscoDuro1.leerDatos();
DiscoDuro1.escribirDatos("Nuevos documentos");
DiscoDuro1.informacion();
console.log(" ");

DiscoDuro2.girarDisco();
DiscoDuro2.leerDatos();
DiscoDuro2.escribirDatos("Nuevos videos");
DiscoDuro2.informacion();
console.log(" ");

Vinilo1.girarDisco();
Vinilo1.leerDatos();
Vinilo1.escribirDatos("Nuevas canciones clásicas");
Vinilo1.informacion();
console.log(" ");

Vinilo2.girarDisco();
Vinilo2.leerDatos();
Vinilo2.escribirDatos("Nuevas canciones de rock");
Vinilo2.informacion();
console.log(" ");

Blueray1.girarDisco();
Blueray1.leerDatos();
Blueray1.escribirDatos("Nuevas películas"); 
Blueray1.informacion();
console.log(" ");

Blueray2.girarDisco();
Blueray2.leerDatos();
Blueray2.escribirDatos("Nuevos juegos");
Blueray2.informacion();
console.log(" ");

Rueda1.girarDisco();
Rueda1.informacion();
console.log(" ");  

Rueda2.girarDisco();
Rueda2.informacion();
console.log(" ");

Fresbee1.girarDisco();
Fresbee1.informacion();
console.log(" ");

Fresbee2.girarDisco();
Fresbee2.informacion();
console.log(" ");
