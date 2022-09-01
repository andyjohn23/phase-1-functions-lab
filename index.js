let distance;
let distanceFeet;
let formulaDistance = 264;

function distanceFromHqInBlocks(pickupStreet) {
    const headquarters = 42;
    distance = Math.abs(headquarters - pickupStreet);
    return distance;
}

function distanceFromHqInFeet(pickupStreet) {
    distanceFromHqInBlocks(pickupStreet)
    distance = distance * formulaDistance
    return distance;
}

function distanceTravelledInFeet(start, destination) {
    distanceFeet = Math.abs(start - destination);
    distanceFeet = distanceFeet * formulaDistance
    return distanceFeet;
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination)
    let fare;
    
    if (distanceFeet > 2500) {
        fare = 'cannot travel that far'
    } else if (distanceFeet > 2000) {
        fare = 25
    } else if (distanceFeet >= 400) {
        fare = ((distanceFeet - 400) * 2) / 100
    } else {
        fare = 0;
    }
    return fare;
}
