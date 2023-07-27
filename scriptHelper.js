// Write your helper functions here!
//require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}" alt="Mission Destination Image">
    `;
}

function validateInput(testInput) {
    if (testInput.trim() === "") 
    {
        return "Empty";
   } 
   else if(isNaN(testInput))
   {
       return "Not a Number";
   } 
   else (typeof testInput === "number")
   {
       return "Is a Number";
   }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if ((Number(fuelLevel) >= 10000) && (Number(cargoLevel) <= 10000)){
        list.style.visibility = 'visible';
        launchStatus.style.color = 'rgb(65, 159, 106)';
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
    } else if ((Number(fuelLevel) < 10000) && (Number(cargoLevel) > 10000)){
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';   
        fuelStatus.innerHTML = 'Fuel level too low for launch';     
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if ((Number(fuelLevel) >= 10000) && (Number(cargoLevel) > 10000)){
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';   
        fuelStatus.innerHTML = 'Fuel level high enough for launch';     
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if ((Number(fuelLevel) < 10000) && (Number(cargoLevel) <= 10000)){
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';   
        fuelStatus.innerHTML = 'Fuel level too low for launch';     
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'rgb(199, 37, 78)';
    }
    
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

}
async function myFetch() {
    try {
       const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
       const planetsReturned = await response.json();
       return planetsReturned;
    } catch (error) {
       console.error("Error fetching data:", error);
       return []; 
    }
 }

 function pickPlanet(planets) {
    if (planets.length === 0) {
        return {
          name: "Unknown",
          diameter: "Unknown",
          star: "Unknown",
          distance: "Unknown",
          moons: "Unknown",
          image: "https://via.placeholder.com/250",
        };
      }
    let randomIndex=Math.floor(Math.random()*planets.length);
    return planets[randomIndex];
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
