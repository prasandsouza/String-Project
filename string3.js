module.exports = function (datedata) {
     let month = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
     ];
     let saperateValue = datedata.split("/");
     if (saperateValue[0] > 31 || saperateValue[0] < 0 || saperateValue[1] > 12 || saperateValue[1] < 0) {
          return [];
     } else {
          if (saperateValue[1] == "" || isNaN(saperateValue[1])) {
               return [];
          } else {
               let monthData = parseInt(saperateValue[1] - 1);
               let finalresult = month[monthData];
               return finalresult;
          }
     }
};
