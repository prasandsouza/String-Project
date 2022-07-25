module.exports = function (string) {
     let splittedValue = string.split(".");
     let ip = splittedValue.map((valueof) => {
          if (isNaN(valueof)) {
               return null;
          } else {
               return valueof;
          }
     });

     if (ip.includes(null)) {
          return [];
     } else {
          ip;
     }
     if (ip.length > 4) {
          return [];
     } else {
          let ipfinal = splittedValue.map((value) => {
               return parseInt(value);
          });
          return ipfinal;
     }
};
