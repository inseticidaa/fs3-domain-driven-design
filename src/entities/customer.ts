import Address from '../value_objects/address';

// Entity -> NEGÓCIO
// Model -> PERSISTENCIA

/**
 *  Domain - Complexidade de Negócio
 *  - Entity
 *  - - custumer.ts -> Negócio
 * 
 *  Infra - Complexidade Acidental
 *  - Entity || Model 
 *  - - customer.ts -> ORM
 */

class Customer {

    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;  
        this._name = name;

        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }

        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
    }

    changeName(name: string) {
        this._name = name;
    }

    public activate() {

        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a custumer");
        }

        this._active = true;
    }

    public deactivate() {
        this._active = false;
    }

    setAddress(address: Address) {
        this._address = address;
    }
}