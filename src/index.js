module.exports = function reverse (n) {

  if (n < 0)
      n *= -1;

  let reverseNumber = n % 10;
  n = Math.floor(n / 10);

  do {
      reverseNumber = reverseNumber * 10 + n % 10;
  } while (n = Math.floor(n / 10));

  return reverseNumber;
}
