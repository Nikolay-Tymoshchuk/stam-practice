// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
//   console.log(isInRange0);
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);

let stars = 1;
let price;

for (let i = 1; i <=5; i += 1) {
  stars = i;
  price = i * 10;

  console.log(stars, price);
}