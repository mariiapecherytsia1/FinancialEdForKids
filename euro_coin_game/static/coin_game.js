let coins= [];

function create_coin_notes() {
    // Fills #coins and #notes divs with the corresponding images and onclick functions
    let coins_html = "";
    let notes_html = "";

    for (const coin of ["0001", "0002", "0005", "0010", "0020", "0050", "0100", "0200"]) {
        coins_html += '<img src="static/' + coin + '.jpg" onclick="javascript:add_coin(\'' +
            coin + '\')" width="80px" height="80px">';

        document.getElementById("coins").innerHTML = coins_html;
    }
    for (const note of ["0500", "1000", "2000", "5000", "10000", "20000", "50000"]) {
        notes_html += '<img src="static/' + note + '.jpg" onclick="javascript:add_coin(\'' +
            note + '\')" width="160px" height="' + Math.round(160*(62/120)) + 'px">';
        document.getElementById("notes").innerHTML = notes_html;
    }
}

function refresh_plot(){
    let coins_html = "";
    coins.forEach(function (coin) {
        coins_html += "<img src='static/" + coin + ".jpg' width='100'>";
    });
    document.getElementById("coin_canvas").innerHTML = coins_html;
}

function add_coin(coin){
    console.log(coin);
    coins.push(coin);
    refresh_plot();
}

function pop_coins(){
    coins.pop();
    refresh_plot();
}

function reset_coins(reset_target=true){
    coins = [];
    if (reset_target) {
        coin_range = document.getElementById("select_coin_range").value.split(";");
        let min = coin_range[0];
        let max = coin_range[1];    // In euros
        console.log("Val es " + String(coin_range));
        console.log("Min es " + String(min));
        console.log("Max es " + String(max));
        random_number = Math.max(Math.random() * (max - min) + min, min);
        document.getElementById("target_coins").value = Number(random_number).toFixed(2) + "€";
    }
    refresh_plot();
}

function check_coins(){
    let sum = 0;
    coins.forEach(function (coin) {
        sum += parseInt(coin) / 100;
    });
    target_value = document.getElementById("target_coins").value;
    console.log("La suma es " + String(sum) + "€ y el objetivo era: " + String(target_value));
    if (target_value == Number(sum).toFixed(2) + "€") {
        var myModal = new bootstrap.Modal(document.getElementById('modal_ok'))
        myModal.show();
        reset_coins();
    }else{
        var myModal = new bootstrap.Modal(document.getElementById('modal_no_ok'))
        myModal.show();
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    reset_coins();
});

