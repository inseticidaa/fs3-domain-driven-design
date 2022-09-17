import OrderItem from "./order_item";

class Order {

    _id: string;
    _customerId: string;
    _items: OrderItem[] = [];

    constructor(id: string, custumerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = custumerId;
        this._items = items;
        
        this.validate();
    }

    validate() {
        if(this._id.length === 0) {
            throw new Error("Id is required");
        }

        if(this._customerId.length === 0) {
            throw new Error("CustumerId is required");
        }

        if(this._items.length === 0) {
            throw new Error("Need at least one item");
        }
    }

}

export default Order;