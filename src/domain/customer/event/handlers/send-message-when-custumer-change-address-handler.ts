import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustumerAddressChangedEvent from "../customer-address-changed";

export default class EnviaConsoleLogHandler
implements EventHandlerInterface<CustumerAddressChangedEvent>
{
  handle(event: CustumerAddressChangedEvent): void {
    const data = event.eventData;
    console.log(`Endereço do cliente: ${data._id}, ${data._name} alterado para: ${data._address}`);
  }
}
