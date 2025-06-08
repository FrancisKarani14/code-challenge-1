function estimateTransactionFee() {
    const welcomeMessage =prompt("Unatuma ngapi?(Enter amount in KSH)")
    const amountToSend =Number(welcomeMessage);
    const minimumFee =10; 
    const maximumFee = 70; 
   

    // condition tommake sure the amount keyed in is a valid positive number
    if (isNaN(amountToSend)|| amountToSend<=0) {
        console.log("Oops! Please enter a valid number");
        return;
        
    }
     // information about transactions and their fees
    const basicTransactionFee = 1.5 * amountToSend / 100
    let finalFee;
    // validation condition for the maximum and minimum amount to send.

    if (basicTransactionFee < minimumFee) {
        // charge ksh10 if the transaction fee is less than 10
         finalFee = minimumFee;
        // return;
        
    } else if (basicTransactionFee>maximumFee) {
         finalFee = maximumFee;
        // return;
        // charge ksh70 if the transaction fee is more than 70        
    } else{
    // otherwise charge the transaction fee.
     finalFee =basicTransactionFee;}


// variable fo the amount of money to be debited
const amountToBeDebited = amountToSend + finalFee;
// console output to the user
console.log(`calculated transaction fee Ksh${finalFee}`);


console.log(`total amount to be debited Ksh${amountToBeDebited}`);


console.log("Send Money Securely!");



    
}
estimateTransactionFee()