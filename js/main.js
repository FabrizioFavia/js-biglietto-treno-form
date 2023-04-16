function giveTicket(event) {

    let kmPrice = 0.21;
    let totalPrice = null;
    var message = "Biglietto Standard"
    var message20 = "Sconto 20%";
    var message40 = "Sconto 40%";
    let name = document.getElementById("ticketName").value;
    let distance = document.getElementById("distance").value;
    let age = document.getElementById("age").value;
    let coach = Math.floor(Math.random() * 10) + 1;
    let cpCode = Math.floor(Math.random() * 10000);
    totalPrice = (distance * kmPrice).toFixed(2);
    document.getElementById("name").innerText = `${name}`;
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
};

function whiteLight() {

    var body = document.getElementById("body");
    body.classList.add("bg-white");

    var paperless = document.getElementById("paperless");
    paperless.classList.add("text-warning");

    var logo = document.getElementById("logo");
    logo.classList.add("text-warning");

    var home = document.getElementById("home");
    home.classList.add("text-warning");

    var features = document.getElementById("features");
    features.classList.add("text-warning");

    var pricing = document.getElementById("pricing");
    pricing.classList.add("text-warning");

    var navbar = document.getElementById("navbar");
    navbar.classList.add("border-bottom");

    var navbar = document.getElementById("navbar");
    navbar.classList.add("border-2");

    var form = document.getElementById("form");
    form.classList.add("border");

    var form = document.getElementById("form");
    form.classList.add("border-2");

    var ticket = document.getElementById("ticket");
    ticket.classList.add("border");

    var ticket = document.getElementById("ticket");
    ticket.classList.add("border-2");

    const ticketSpace = document.querySelectorAll(".ticketSpace");
    for (let i = 0; i < ticketSpace.length; i++) {
        ticketSpace[i].style.backgroundColor = "white";
    };

    var passengerName = document.getElementById("passengerName");
    passengerName.classList.add("text-dark");

    var ticketSale = document.getElementById("ticketSale");
    ticketSale.classList.add("text-dark");

    var coachTitle = document.getElementById("coachTitle");
    coachTitle.classList.add("text-dark");

    var codeTitle = document.getElementById("codeTitle");
    codeTitle.classList.add("text-dark");

    var ticketPrice = document.getElementById("ticketPrice");
    ticketPrice.classList.add("text-dark");
}


function darkLight() {

    var body = document.getElementById("body");
    body.classList.remove("bg-white");

    var paperless = document.getElementById("paperless");
    paperless.classList.remove("text-warning");

    var logo = document.getElementById("logo");
    logo.classList.remove("text-warning");

    var home = document.getElementById("home");
    home.classList.remove("text-warning");

    var features = document.getElementById("features");
    features.classList.remove("text-warning");

    var pricing = document.getElementById("pricing");
    pricing.classList.remove("text-warning");

    var navbar = document.getElementById("navbar");
    navbar.classList.remove("border-bottom");

    var navbar = document.getElementById("navbar");
    navbar.classList.remove("border-2");

    var form = document.getElementById("form");
    form.classList.remove("border");

    var form = document.getElementById("form");
    form.classList.remove("border-2");

    var ticket = document.getElementById("ticket");
    ticket.classList.remove("border");

    var ticket = document.getElementById("ticket");
    ticket.classList.remove("border-2");

    const ticketSpace = document.querySelectorAll(".ticketSpace");
    for (let i = 0; i < ticketSpace.length; i++) {
        ticketSpace[i].style.backgroundColor = "#27242c";
    };

    var passengerName = document.getElementById("passengerName");
    passengerName.classList.remove("text-dark");

    var ticketSale = document.getElementById("ticketSale");
    ticketSale.classList.remove("text-dark");

    var coachTitle = document.getElementById("coachTitle");
    coachTitle.classList.remove("text-dark");

    var codeTitle = document.getElementById("codeTitle");
    codeTitle.classList.remove("text-dark");

    var ticketPrice = document.getElementById("ticketPrice");
    ticketPrice.classList.remove("text-dark");
}