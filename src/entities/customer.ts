// ERRAAADOOOOOOOOOOOOOOOOOOO!
class Customer {

    private _id: string;
    private _name: string = "";
    private _address: string = "";
    private _active: boolean = true;

    constructor(id: string) {
        this._id = id;
    }

    changeName(name: string) {
        this._name = name;
    }

    public activate() {
        this._active = true;
    }

    public deactivate() {
        this._active = false;
    }
}