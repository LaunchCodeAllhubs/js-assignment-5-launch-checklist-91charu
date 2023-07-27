// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotnameInput = document.querySelector("input[name=pilotName]");
        let copilotnameInput = document.querySelector("input[name=copilotName]");
        let fuellevelInput = document.querySelector("input[name=fuelLevel]");
        let cargomassInput = document.querySelector("input[name=cargoMass]");

        if (pilotnameInput.value === "" || copilotnameInput.value === "" || fuellevelInput.value === "" || cargomassInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
            return;
        }

        if (!isNaN(parseFloat(pilotnameInput.value)) || !isNaN(parseFloat(copilotnameInput.value))) {
            alert('Pilot and Co-pilot names should be strings!');
            event.preventDefault();
            return;
        }

        if (isNaN(parseFloat(fuellevelInput.value)) || isNaN(parseFloat(cargomassInput.value))) {
            alert('Fuel level and Cargo mass should be numbers!');
            event.preventDefault();
            return;
        }
        formSubmission(
            document,
            document.getElementById("faultyItems"),
            pilotnameInput.value,
            copilotnameInput.value,
            fuellevelInput.value,
            cargomassInput.value
          );
          event.preventDefault();
    });
});
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
