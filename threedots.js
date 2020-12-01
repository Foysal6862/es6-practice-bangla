// concatenate multiple arrays
const ages = [10, 12, 14, 15, 17];
const ages2 = [11, 22, 33, 44];
const ages3 = [12, 24, 36];
const allAge = [...ages, ...ages2, 50, 60, ...ages3];
console.log(allAge);

// array max

const money = [100, 200, 300, 400, 500, 600];
const maximumMoney = Math.max(...money);
console.log('maximumMoney =', maximumMoney);