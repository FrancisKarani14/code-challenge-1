function calculateChaiIngredients() {
    const welcomeMessage = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    const numberOfcups = Number(welcomeMessage);

    // standard recipe for one cup of Chai
    const standardWaterInMl = 200;
    const standardMilkInMl = 50;
    const standardMajaniInTbsp = 1;
    const standardSugarinTeaSpoon = 2;
  
    // calculate the number of specific ingredients based on the number of cups needed.
    totalWaterInMl = numberOfcups * standardWaterInMl;
    totalMilkInMl = numberOfcups * standardMilkInMl;
    totalMajaniInTbsp = numberOfcups * standardMajaniInTbsp;
    totalSugarInTeaSpoon =numberOfcups * standardSugarinTeaSpoon;
      // condition that makes sure the numbere of cups are valid

    if (isNaN(numberOfcups) || numberOfcups <= 0) {
        console.log("please enter a valid input for the number of cups.");
        return;
        
    }
    // results printoutyed according to the number of cups keyed by the client. uses backticks to interpolate strings.
    console.log(`To make ${numberOfcups} cups of Chai bora you need:`);
    console.log(`water ${totalWaterInMl}ml`);
     console.log(`milk ${totalMilkInMl}ml`); 
     console.log(`tea Leaves ${totalMajaniInTbsp} tablespoons`);
      console.log(`sugar ${totalSugarInTeaSpoon} teaspoon(s)`);
    }
    calculateChaiIngredients()