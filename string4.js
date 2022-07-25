module.exports = function (nameObject) {
     let result = Object.entries(nameObject).reduce(
          (accumulator, currentValue) => {
               let finalvalue = accumulator + currentValue[1] + " ";
               let concatString = finalvalue;
               return concatString;
          },"");
     let finalResult = result
          .toLowerCase()
          .replace(/\b\w/g, (convertString) => {
               return convertString.toUpperCase();
          });
     return finalResult;
};
