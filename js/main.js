function givePrice(event) {

    let kmPrice = 0.21;
    let totalPrice = null;
    let name = document.getElementById("ticketName").value;
    let age = document.getElementById("age").value;
    let distance = document.getElementById("distance").value;
    totalPrice = (distance * kmPrice).toFixed(2);
    document.getElementById("name").innerText = `${name.toUpperCase()}`;
    if (age < 18) {
        let underDiscount = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
        document.getElementById("price").innerText = "€" (`${underDiscount}`);
    }
    else if (age > 65) {
        let overDiscount = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`${overDiscount}`);
    }
    else {
        document.getElementById("price").innerText = (` ${totalPrice}`);
    }
}
