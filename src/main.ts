import Customer from "./entities/customer";
import Order from "./entities/order";
import OrderItem from "./entities/order_item";
import Address from "./value_objects/address";

// Custumer Aggregate
let custumer = new Customer("123", "Wanderley Alisson");
const addr = new Address("Rua dois", 2, "1234-124", "São Paulo");
custumer._address = addr;
custumer.activate();

// Custumer -> Order 
// Relacoes fracas se relacionam por IDs

// Order Aggregate
const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);
// OrderItem -> Order
// Relacoes fortes se relacionam pelo objeto. Nesse exemplo, Order tem uma array de OrderItem internamente
const order = new Order("1", "123", [item1, item2]);