let userOutput = getElementById('')

function calculateBodaFare() {
    // welcome message welcoming the user and asking him/her to key in their distance
    let distanceInKm = document.getElementById("kilometer").value;
     distanceInKm = Number(distanceInKm);
    // base fare which calculates once the client boards the bike, and the charge per Km
    const baseFare = 50;
    const chargePerKm = 15;
    

    // variable for the calculation of cost for total Km Covered and for total fare.
    const fareForKmCovered = chargePerKm * distanceInKm;
    const totalFare = baseFare + fareForKmCovered;

    if (distanceInKm <=0) {
        console.log("Oops! Kindly enter a valid distance numbers only.");
         }

        // calculations for the fare and the ooutputs to the client.
    document.getElementById("output").innerHTML =`
     <p>Unafika wapi Mkubwa? Kilometer ngapi? : ${distanceInKm} </p>
     <ul>
        <li>Uko Kwote? Io ni ${distanceInKm}Km:</li>
        <li>Ukikalia Pikipiki: Ksh ${baseFare}</li>
        <li>Mpaka huko: ksh ${fareForKmCovered}</li>
        <li>Total: KES${totalFare}</li>
     </ul>
     <p>Panda Pikipiki!</p>
    `;
};
