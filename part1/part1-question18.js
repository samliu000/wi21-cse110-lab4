let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const property in statistics) {

    // i apologize for this super long if statement
    if(property[0] == 'r' || property[0] == 'R' || statistics[property] %2 == 1) {
        console.log(statistics[property]);
    }

}