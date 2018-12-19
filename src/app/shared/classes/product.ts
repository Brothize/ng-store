export class Product {
    name: string;
    beschreibung: string;
    preis: number;
    bild: string; //name des Bildes
    
    constructor(
        name: string,
        beschreibung: string,
        preis: number,
        bild: string
    ) {
        this.name = name;
        this.beschreibung = beschreibung;
        this.preis = preis;
        this.bild = bild;
    }
}
