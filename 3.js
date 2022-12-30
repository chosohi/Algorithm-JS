function addNumbers(str1, str2) {
  // Convert the input strings to lists of digits
  const num1 = str1.split("").map((c) => parseInt(c, 10));
  const num2 = str2.split("").map((c) => parseInt(c, 10));

  // Initialize a result list with the same length as the longer input string
  const result = Array(Math.max(num1.length, num2.length)).fill(0);

  // Iterate through the digits in the input strings, starting from the least significant digit
  for (let i = 1; i <= result.length; i++) {
    // Get the ith digit from each input string, or 0 if the input string is not long enough
    const digit1 = i <= num1.length ? num1[num1.length - i] : 0;
    const digit2 = i <= num2.length ? num2[num2.length - i] : 0;

    // Add the digits and the carry value from the previous iteration
    result[result.length - i] += digit1 + digit2;

    // If the result is greater than or equal to 10, carry the excess value to the next iteration
    if ((result[result.length - i] >= 10) & (i !== result.length)) {
      result[result.length - i] -= 10;
      result[result.length - i - 1] += 1;
    }
  }

  // If the most significant digit is 0, remove it from the result
  if (result[0] === 0) {
    result.shift();
  }

  // Convert the result list to a string and return it
  return result.join("");
}
console.log(addNumbers("11111111", "88888889"));
console.log(11111111 + 88888889);
