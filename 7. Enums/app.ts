// ENUMS ALLOWS US TO CREATE SET OF NAMED CONSTANTS
// WE CAN GIVE THESE CONSTANTS NUMERIC OR STRING VALUES
// THIS DOESN'T EXIST IN JAVASCRIPT
// ENUMS ARE NAMED CONSTANT THAT WE CAN USE IN OUR CODE
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
let orderStatus = OrderStatus.DELIVERED;
console.log(orderStatus);

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.RETURNED));
console.log(isDelivered(OrderStatus.DELIVERED));

// EXAMPLE
// enum ArrowKeys {
//     UP = "up",
//     DOWN = "down",
//     LEFT = "left",
//     RIGHT = "right"
// }
// console.log(ArrowKeys.UP);

// CLEAN CODE
// THIS WILL NOT POLLUTE JS
const enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}
console.log(ArrowKeys.UP);
