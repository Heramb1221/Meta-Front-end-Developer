class car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("turbo is on!")
    }
}

var car1 = new car("red", 120)

car1.turboOn()