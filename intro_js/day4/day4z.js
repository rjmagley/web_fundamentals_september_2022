// FoH management for a resturant
// function that takes in total for a bill, and the sales tax for the state
// and provide a total plus tax and a suggested tip

// subtotal is a number, including decimal (20.04, 19.76, 141.24, etc.)
// taxRate (.04, .07, .05, .11, etc.)

function provideTotalPlusTip(subtotal, taxRate) {
    var result = subtotal * (1 + taxRate);
    // var result = subtotal + (subtotal * taxRate);
    var suggestedTip = result * .18;
    // generally speaking, logging out something inside a function is not
    // useful outside of debugging
    // going to print a formatted string
    return `Your total is ${result.toFixed(2)}; your suggested gratuity of 18 percent is ${suggestedTip.toFixed(2)} :)`;
}

provideTotalPlusTip(20.04, .07);
console.log(provideTotalPlusTip(20, .05));