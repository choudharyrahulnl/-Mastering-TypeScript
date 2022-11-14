// ENUMS ALLOWS US TO CREATE SET OF NAMED CONSTANTS
// WE CAN GIVE THESE CONSTANTS NUMERIC OR STRING VALUES
// THIS DOESN'T EXIST IN JAVASCRIPT
// ENUMS ARE NAMED CONSTANT THAT WE CAN USE IN OUR CODE
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var orderStatus = OrderStatus.DELIVERED;
console.log(orderStatus);
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.RETURNED));
console.log(isDelivered(OrderStatus.DELIVERED));
// EXAMPLE
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
console.log(ArrowKeys.UP);
