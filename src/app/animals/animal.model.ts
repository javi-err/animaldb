export class Animal {
    public species: string;
    public subspecies: [];
    public genus: string;
    public subfamily: string;
    public family: string;
    public suborder: string;
    public order: string;
    public animalClass: string;
    public phylum: string;
    public name: string;
    public conservationStatus: string;
    public images: string[];
    public description: string;

    constructor(species: string, subspecies: [], genus: string, subfamily: string, family: string, suborder: string, order: string, animalClass: string, phylum: string, name: string, conservationStatus: string, images: string[], description: string){
        this.species = species;
        this.subspecies = [];
        this.genus = genus;
        this.subfamily = subfamily;
        this.family = family;
        this.order = order;
        this.suborder = suborder;
        this.phylum = phylum;
        this.animalClass = animalClass;
        this.name = name;
        this.conservationStatus = conservationStatus;
        this.images = images;
        this.description = description;
    }

}