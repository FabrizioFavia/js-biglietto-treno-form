function giveTicket(event) {

    let kmPrice = 0.21;
    let totalPrice = null;
    let message = "Biglietto Standard"
    let message20 = "Sconto 20%";
    let message40 = "Sconto 40%";
    let name = document.getElementById("ticketName").value;
    let distance = document.getElementById("distance").value;
    let age = document.getElementById("age").value;
    let coach = Math.floor( Math.random() * 10 );
    let cpCode = Math.floor( Math.random() * 10000 );
    totalPrice = (distance * kmPrice).toFixed(2);
    document.getElementById("name").innerText = `${name.toUpperCase()}`;
    document.getElementById("coach").innerText = coach;
    document.getElementById("cpCode").innerText = cpCode;

    if (age < 18) {
        let underDiscount = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`${underDiscount} €`);
        document.getElementById("ticketType").innerText = (` ${message20}`);
    }
    else if (age > 65) {
        let overDiscount = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`${overDiscount} €`);
        document.getElementById("ticketType").innerText = (` ${message40}`);
    }
    else {
        document.getElementById("price").innerText = (` ${totalPrice} €`);
        document.getElementById("ticketType").innerText = (` ${message}`);
    }
}
