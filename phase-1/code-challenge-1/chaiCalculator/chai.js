function calculateChaiIngredients() {
    let numberOfcups = document.getElementById("amount").value; 
     numberOfcups = Number(numberOfcups);

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
        "please enter a valid input for the number of cups.";
        return;
        
    }
    // results printoutyed according to the number of cups keyed by the client. uses backticks to interpolate strings.

document.getElementById("output").innerHTML=`
<ul>
   <li> To make ${numberOfcups} cups of Chai bora you need:</li>
   <li> water ${totalWaterInMl}ml</li>
    <li> milk ${totalMilkInMl}ml </li> 
    <li> tea Leaves ${totalMajaniInTbsp} tablespoons</li>
     <li> sugar ${totalSugarInTeaSpoon} teaspoon(s) </li>
</ul>
      <p>enjoy your Chai Bora! </p>
      `
    }
    // calculateChaiIngredients()