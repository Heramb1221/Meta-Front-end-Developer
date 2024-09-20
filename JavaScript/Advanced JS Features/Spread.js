let top3 = [
    'The Colosseum',
    'Trevi Fountain',
    'The Vatican City'
];

function showItinerary(place1, place2, place3) {
    console.log("Visit "+ place1);
    console.log("Then visit "+ place2);
    console.log("Finish witha visit to "+place3);
}

showItinerary(...top3);