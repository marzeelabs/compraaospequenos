// Adapted from https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
export default str => {
  // normalize string and remove all unnecessary characters
  const number = String(str).replace(/[^\d]/g, '');

  // check if number length equals to 9
  if (number.length === 9) {
    // reformat and return phone number
    return number.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  }

  return str;
};
