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