
// For After Desmial We need Only 1 char
export const util = {
  formatCurrency: function (num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
  },
};
