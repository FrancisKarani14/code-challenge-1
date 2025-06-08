function calculateBodaFare() {
    // welcome message welcoming the user and asking him/her to key in their distance
    const welcomeMessage = prompt("Unafika wapi mkubwa? Kilometer ngapi?");
    const distanceInKm =Number(welcomeMessage);
    // base fare which calculates once the client boards the bike, and the charge per Km
    const baseFare = 50;
    const chargePerKm = 15;
    

    // variable for the calculation of cost for total Km Covered and for total fare.
    const fareForKmCovered = chargePerKm * distanceInKm;
    const totalFare = baseFare + (distanceInKm*chargePerKm)

    if (isNaN(distanceInKm)|| distanceInKm <=0) {
        console.log("Oops! Kindly enter a valid distance numbers only.");
         }

        // calculations for the fare and the ooutputs to the client.
        console.log(`Uko Kwote? Io ni ${distanceInKm}Km:`);
        console.log(`Ukikalia Pikipiki: Ksh ${baseFare}`);
        console.log(`Mpaka huko: ksh ${fareForKmCovered}`);
        console.log(`Total: KES${totalFare}`);
        console.log("Panda Pikipiki!");
    }
    calculateBodaFare()