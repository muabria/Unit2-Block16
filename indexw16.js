/* 
Discount Chain 

- If a customer has a subscription, 
the customer will receive a 25% discount after the refill total has been calculated.

- If the customer has a coupon, 
the customer will receive a $10 discount after the subscription discount has been calculated.

- At the end of the script, 
you should return and log the string "Your grand total is ${finalAmount}." 

*/

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

// timmy will recieve $10 off (subtracting 10) //

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

// sarah will recieve 25% discount (dividing 0.25)//

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// rocky will receieve 25% off AND $10 off //
// (BOTH dividing 0.25 and subtracting 10) //

/*

first step multiple pricePerRefill and refills

function refillAmount(pricePerRefill, refills) {}
*/


function refillTotalAmount (pricePerRefill, refills) {
    return pricePerRefill * refills; 

}
console.log(refillTotalAmount (25,3)); // results: 75 //
console.log(refillTotalAmount (50,1)); // results: 50 //
console.log(refillTotalAmount (30,5)); // restults: 150 //



// Timmy's Coupon Soultion //


  function CouponDiscount(refillTotal, hasCoupon) {
    if (hasCoupon)  {
        return refillTotal - 10; // -$10 discount for timmy //
    }
    return (timmy.coupon, refillTotalAmount(25,3) - 10);
  }

// indicating timmys coupon is $10 off his prescription //

  console.log("Timmy => Your grand total is: ", CouponDiscount(timmy.coupon));


// Sarah's Subscription Solution //


// 25% discount sarah has subscription // 

function subDiscount(refillTotal, hasSub) {
    if (hasSub)  {
        return refillTotal * 0.75; // 25% discount //
    }
    return ( sarah.subscription, refillTotalAmount(50,1) * 0.75);
  }

  console.log('Sarah => Your grand total is: ', subDiscount(sarah));
  

// Rocky's Coupon AND Subscription Total //

const discount = (price) => {
  const coupon = 10;
  const discount_rate = 0.25;
  return price - coupon - (price * discount_rate);
};

const discountedPrice = discount(150);
console.log("Rocky => Your grand total is: ", discountedPrice); // 102.5