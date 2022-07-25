module.exports = function (arrayOfString) {
     let stringResult = arrayOfString.reduce((accumulator, currentValue) => {
          return accumulator += currentValue + " ";
     }, "");
     return stringResult;
};
