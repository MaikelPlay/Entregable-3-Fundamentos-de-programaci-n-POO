import { Cd } from "./Cd.js";
import { DiscoDuro } from "./DiscoDuro.js";


const CD1 = new Cd("CD1", 700, "Música", "CD-ROM", 200);
const CD2 = new Cd("CD2", 600, "Fotos", "CD-RW", 300);
const DiscoDuro1 = new DiscoDuro("DiscoDuro1", 1000000, "Documentos", "HDD", 7200);
const DiscoDuro2 = new DiscoDuro("DiscoDuro2", 2000000, "Videos", "SSD", 10000);

CD1.girarDisco();
CD1.leerDatos();
CD1.escribirDatos("Nuevas canciones");
CD1.informacion();

CD2.girarDisco();
CD2.leerDatos();
CD2.escribirDatos("Nuevas fotos");
CD2.informacion();

DiscoDuro1.girarDisco();
DiscoDuro1.leerDatos();
DiscoDuro1.escribirDatos("Nuevos documentos");
DiscoDuro1.informacion();

DiscoDuro2.girarDisco();
DiscoDuro2.leerDatos();
DiscoDuro2.escribirDatos("Nuevos videos");
DiscoDuro2.informacion();