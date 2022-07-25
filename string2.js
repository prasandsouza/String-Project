module.exports = function (string) {
     let splittedValue = string.split(".");
     let ipArray = splittedValue.map((value) => {
          return parseInt(value);
     });
     if (ipArray.length > 4) {
          return [];
     } else {
          return ipArray;
     }
};
