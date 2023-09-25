/*
Holiday Shopping 

Write down inputs of budget and giftPrice
Expect a return of true or false

true = under budget
false = over budget

*/


// define variables budget, price1, and price2 //

const budget = 50;
const price1 = 20;
const price2 = 25; 

// define a function that returns the sumn of the two prices before tax // 

function sumofGifts(price1, price2) {
    return price1 + price2; 

}

console.log(sumofGifts(20,25));

// invoke the sumofGifts function with price1 and price2 //
// store the return of the function in a new variable labeled giftTotal//

const giftTotal = sumofGifts(price1, price2)

//define the function that returns the cost of the giftTotal with tax 8%//

function addTotal(sumofGifts) {
    return giftTotal + (giftTotal * 0.08);
}




let refillAmounts = { 
    timmy: {
        pricePerRefill: 25,
        refills: 3,
    }
    , sarah: {
        pricePerRefill: 50,
        refills: 1,
    }
    , rocky: {
        pricePerRefill: 30,
        refills: 5,
    }
}

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
//Createa a funtion for the total buy:
//Make one parameter for the name of the customer
//Create 'recipe' to multiply the number of refills with the price. Since it is an object, "customerName" will be the key before the value (ether pricePerRefill OR refills) ex: customerName.__________
function refillsCost (customerName){ 
   return customerName.pricePerRefill * customerName.refills
}
//Check output using console.log
console.log(refillsCost(timmy));//Expected output: 75
console.log(refillsCost(sarah));//Expected output: 50
console.log(refillsCost(rocky));//Expected output: 150
//Create a function with one parameter for customer. 
//Inside the brackets create an if statement for if is subscription is true, then return total cost(refillsCost) * 0.75, else, just reutn the total cost
function subscriptionDiscount (customerName){
     if (customerName.subscription === true) { 
        return refillsCost(customerName) * 0.75
    }
    else if (customerName.subscription === false ){
        return refillsCost(customerName)
    }
}
//Check with console.log
console.log(subscriptionDiscount(timmy));//Expected output: 75
console.log(subscriptionDiscount(sarah));//Expected output: 37.5
console.log(subscriptionDiscount(rocky));//Expected output: 112.5
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
//Create one function with the same parameter of customerName.
//Creaet an if statement, for if coupon === true, then subtract 10 from the discount price, else, keep the discount price.
function finalTotal (customerName){ 
    if (customerName.coupon === true){
        return subscriptionDiscount(customerName) - 10
    }
    else if (customerName.coupon === false){
        return subscriptionDiscount(customerName)
    }
}
//Check with console.log
console.log(finalTotal(timmy));//Expected output: 65
console.log(finalTotal(sarah));//Expected output: 37.5
console.log(finalTotal(rocky));//Expected output: 102.5
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
console.log ('Your final total is $' +finalTotal(timmy) + '.');
console.log ('Your final total is $' +finalTotal(sarah) + '0.'); //Added zero since fraction to make it look likes cents of a dollar
console.log ('Your final total is $' +finalTotal(rocky) + '0.');//Added zero since fraction to make it look likes cents of a dollar