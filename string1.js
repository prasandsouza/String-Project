module.exports = function (string) {
     
          let returnvalue = string.replace("$", "")
          .replace(",","");
          if(isNaN(returnvalue)){
            return 0;
          } else {
            return parseFloat(returnvalue)
          }
};
