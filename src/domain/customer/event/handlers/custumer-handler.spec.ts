import Customer from "../../../../entities/customer";
import Address from "../../../../value_objects/address";
import EventDispatcher from "../../../@shared/event/event-dispatcher";
import CustumerAddressChangedEvent from "../customer-address-changed";
import CustomerCreatedEvent from "../customer-created";
import EnviaConsoleLogHandler from "./send-message-when-custumer-change-address-handler";
import EnviaConsoleLog1Handler from "./send-message-when-custumer-is-created-handler";
import EnviaConsoleLog2Handler from "./send-message-when-custumer-is-created-handler2";

describe("Custumer handler tests", () => {

    it("should custumer has been created", () => {

        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLog1Handler();
        const eventHandler2 = new EnviaConsoleLog2Handler();

        eventDispatcher.register("CustomerCreatedEvent", eventHandler);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);

        const spyEventHandler = jest.spyOn(eventHandler, "handle");
        const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

        const custumer = new Customer("123", "Custumer 1");
        custumer._address = new Address("Street 1", 123, "09123-412", "Saint Poul");

        const event = new CustomerCreatedEvent(custumer);
        eventDispatcher.notify(event);

        expect(spyEventHandler).toHaveBeenCalled();
        expect(spyEventHandler2).toHaveBeenCalled();
    });

    it("should custumer has address changed", ()=> {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLogHandler();

        eventDispatcher.register("CustumerAddressChangedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["CustumerAddressChangedEvent"][0]).toMatchObject(eventHandler);

        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        const custumer = new Customer("123", "Custumer 1");
        custumer._address = new Address("Street 1", 123, "09123-412", "Saint Poul");

        const event = new CustumerAddressChangedEvent(custumer);
        eventDispatcher.notify(event);

        expect(spyEventHandler).toHaveBeenCalled();
    } )
});