function generateOrderNr() {
    let letters = ["X", "Y", "Z", "A", "B", "C"];
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    return `V${year}${month}${date}${letters[Math.floor(Math.random() * letters.length)]
        }`;
}

function generateETA() {
    let eta = 10;
    return eta + Math.floor(Math.random() * 20);
}

module.exports = { generateOrderNr, generateETA };