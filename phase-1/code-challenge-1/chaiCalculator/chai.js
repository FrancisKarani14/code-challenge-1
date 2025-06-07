function calculateChaiIngredients() {
    const welcomeMessage = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    const numberOfcups = Number();

    // standard recipe for one cup of Chai
    const standardWaterInMl = 200;
    const standardMilkInMl = 50;
    const standardMajaniInTbsp = 1;
    const standardSugarinTeaSpoon = 2;

    if (isNaN(numberOfcups) || numberOfcups <= 0) {
        console.log("please enter a valid input for the number of cups.");
        
        
    }

    
}