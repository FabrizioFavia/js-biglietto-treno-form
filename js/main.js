function givePrice(event) {

    let kmPrice = 0.21;
    let totalPrice = null;
    let messaggio = "Prezzo del biglietto: €";
    let age = document.getElementById("age").value;
    let distance = document.getElementById("distance").value;
    totalPrice = (distance * kmPrice).toFixed(2);
    if (age < 18) {
        let underDiscount = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`${messaggio} ${underDiscount}`);
    }
    else if (age > 65) {
        let overDiscount = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`${messaggio} ${overDiscount}`);
    }
    else {
        document.getElementById("price").innerText = (`${messaggio} ${totalPrice}`);
    }
}
