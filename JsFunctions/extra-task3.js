/* After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d). */

function rentalCarCost(d) {
    const dailyRate = 40;
    
    const baseCost = d * dailyRate;
    
    let discount = 0;
    if (d >= 7) {
      discount = 50;
    } else if (d >= 3) {
      discount = 20;
    }
    
    const totalCost = baseCost - discount;
    return totalCost;
  }

const situation1 = rentalCarCost(6);
console.log(`Rental cost for 6 days: $${situation1}`);

const situation2 = rentalCarCost(13);
console.log(`Rental cost for 13 days: $${situation2}`);

const situation3 = rentalCarCost(2);
console.log(`Rental cost for 2 days: $${situation3}`);