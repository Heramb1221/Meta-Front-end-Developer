var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house);
house.windows = 10;
console.log(house);

house.windows = 11;
console.log(house);