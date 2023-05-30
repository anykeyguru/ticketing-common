export enum OrderStatus {
    // Wehen the order has been created, but the
    // ticket it is trying to order has not reserved
    Created = 'created',

    // The ticket the order is trying to reserve has already
    // been reserved, or when the user has cancelled the order/
    // The order exires before payment
    Cancelled = 'cancelled',

    // The order has successfuly reserved the ticket
    AwaitingPayment = 'awaiting:payment',
    Comlete = 'complete'
}