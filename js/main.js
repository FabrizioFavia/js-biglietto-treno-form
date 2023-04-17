function giveTicket(event) {

    let kmPrice = 0.21;
    var totalPrice = null;
    var message = "Biglietto Standard"
    var message20 = "Sconto 20%";
    var message40 = "Sconto 40%";
    let name = document.getElementById("ticketName").value;
    let distance = Number(document.getElementById("distance").value);
    let age = document.getElementById("age").value;
    let coach = Math.floor(Math.random() * 10) + 1;
    let cpCode = Math.floor(Math.random() * 10000);
    totalPrice = (distance * kmPrice).toFixed(2);
    document.getElementById("name").innerText = `${name}`;
    document.getElementById("coach").innerText = coach;
    document.getElementById("cpCode").innerText = cpCode;

    if (age < 18) {
        var underDiscount = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`${underDiscount} €`);
        document.getElementById("ticketType").innerText = (` ${message20}`);
    }
    else if (age > 65) {
        var overDiscount = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`${overDiscount} €`);
        document.getElementById("ticketType").innerText = (` ${message40}`);
    }
    else {
        document.getElementById("price").innerText = (` ${totalPrice} €`);
        document.getElementById("ticketType").innerText = (` ${message}`);
    }
};

function reset(){
    let nome = document.getElementById("ticketName");
    let distance = document.getElementById("distance")
    let age = document.getElementById("age")
    nome.value = " ";
    distance.value = " ";
    age.value = " ";
}

function whiteLight() {

    var yellowLightBulb = document.getElementById("yellowLightBulb");
    var body = document.getElementById("body");
    var paperless = document.getElementById("paperless");
    var logo = document.getElementById("logo");
    var home = document.getElementById("home");
    var features = document.getElementById("features");
    var pricing = document.getElementById("pricing");
    var navbar = document.getElementById("navbar");
    var navbar = document.getElementById("navbar");
    var navbar = document.getElementById("navbar");
    var form = document.getElementById("form");
    var form = document.getElementById("form");
    var ticket = document.getElementById("ticket");
    const ticketSpace = document.querySelectorAll(".ticketSpace");
    var passengerName = document.getElementById("passengerName");
    var ticketSale = document.getElementById("ticketSale");
    var coachTitle = document.getElementById("coachTitle");
    var codeTitle = document.getElementById("codeTitle");
    var ticketPrice = document.getElementById("ticketPrice");


    yellowLightBulb.classList.add("hidden");
    body.classList.add("bg-white");
    paperless.classList.add("text-warning");
    logo.classList.add("text-warning");
    home.classList.add("text-warning");
    features.classList.add("text-warning");
    pricing.classList.add("text-warning");
    navbar.classList.add("border-bottom");
    navbar.classList.add("border-2");
    navbar.classList.add("myLightBlackBck");
    form.classList.add("border");
    form.classList.add("border-2");
    ticket.classList.add("border");
    ticket.classList.add("border-2");
    passengerName.classList.add("text-dark");
    ticketSale.classList.add("text-dark");
    coachTitle.classList.add("text-dark");
    codeTitle.classList.add("text-dark");
    ticketPrice.classList.add("text-dark");
    
    for (let i = 0; i < ticketSpace.length; i++) {
        ticketSpace[i].style.backgroundColor = "white";
    };

}


function darkLight() {

    var yellowLightBulb = document.getElementById("yellowLightBulb");
    yellowLightBulb.classList.remove("hidden");

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

    var navbar = document.getElementById("navbar");
    navbar.classList.remove("bg-dark");

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