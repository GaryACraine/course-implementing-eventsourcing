import {CartEvents} from "@/app/api/events/CartEvents";
import {AddItemCommand} from "@/app/api/commands/AddItemCommand";

export const addItemCommandHandler = async (events: CartEvents[], command: AddItemCommand): Promise<CartEvents[]> => {

    const itemsInCart = events.reduce((acc: string[], event: CartEvents) => {
       if (event.type === 'ItemAdded') {
            acc.push(event.data.itemId);
        } else if (event.type === 'ItemRemoved') {
            acc = acc.filter(itemId => itemId !== event.data.itemId);
        } else if(event.type === 'ItemArchived'){
            acc = acc.filter(itemId => itemId !== event.data.itemId);
        } else if (event.type == "CartCleared") {
           acc = []
       }
        return acc; // Return the updated accumulator
    }, []);

    if (itemsInCart.length >= 3) {
        throw new Error("You can only have 3 items in your cart");
    }

    return [{
        type: 'ItemAdded',
        data: {
            aggregateId: command.data.name,
            description: command.data.description,
            itemId: command.data.itemId,
            name: command.data.name,
            productId: command.data.productId,
            price: command.data.price
        }
    }]

}