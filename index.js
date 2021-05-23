function distanceFromHqInBlocks(location) {
    const hq = 42
  
  if (location >= hq){
  return (location - hq)
    }
else if (location < hq){
    return (hq - location)  
    }
}

function distanceFromHqInFeet (location) {
    let feet = (distanceFromHqInBlocks(location) * 264)
    return feet
} 

function distanceTravelledInFeet (pickup, dropoff) {
    let feet = ((pickup - dropoff) * 264)
    return Math.abs(feet)
}
function calculatesFarePrice(start, destination){
    const tripDistance = distanceTravelledInFeet (start, destination)
    if (tripDistance <= 400){
      return 0
    }
    if (tripDistance > 400 && tripDistance <= 2000){
    return (tripDistance - 400) * .02
    }
    if (tripDistance > 2500){
      return 'cannot travel that far'
    }
    if (tripDistance > 2000 && tripDistance <= 2500){
        return 25
    }
  }



