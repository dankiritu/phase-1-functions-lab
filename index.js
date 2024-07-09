// Code your solution in this file!
const headquarters = 42;

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(street) {
  return Math.abs(street - headquarters);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for the next 1600 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Does not allow rides over 2500 feet
    }
  }
  