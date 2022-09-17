class Customer {

    /**
     * Custumer é considerado um Entity pois é um objeto único e identificável (_id: string). 
     * No momento, a classe Customer também é considerada uma classe anêmica, pois possuí apenas os Getters e Setters,
     * não contendo nenhum tipo de regra especifica e carregando apenas dados assim como os DTO's (Data Transfer Objects).
     */ 

    _id: string; // Identificável e Única
    _name: string;
    _address: string;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;
    }

    get id() : string {
        return this.id;
    }

    get name() : string {
        return this._name;
    }

    get address(): string {
        return this.address;
    }

    set name(name: string) {
        this.name = name;
    }

    set address(address: string) {
        this._address = address;
    }
}