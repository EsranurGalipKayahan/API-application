"use-strict";
//Turns the first letter of a string to uppercase
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const randomNumber = (range) => {
  const random = Math.floor(Math.random() * range);
  return random;
};
