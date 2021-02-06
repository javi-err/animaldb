export class Animal {
    public species: string;
    public genus: string;
    public subfamily: string;
    public family: string;
    public order: string;
    public phylum: string;
    public name: string;
    public conservationStatus: string;
    public images: [];

    constructor(species: string, genus: string, subfamily: string, family: string, order: string, phylum: string, name: string, conservationStatus: string, images: []){
        this.species = species;
        this.genus = genus;
        this.subfamily = subfamily;
        this.family = family;
        this.order = order;
        this.phylum = phylum;
        this.name = name;
        this.conservationStatus = conservationStatus;
        this.images = images;
    }

}