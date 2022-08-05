let money = 40;
display();
function decrementMoney(value)
{
    if(money - value < 0) {
        alert("You don't have enough money! Try saving a little more so you can buy more expensive things!");
    } else if(money - value < 15) {
        
        alert("You're running low on money, make sure you earn some more so you don't go broke!");
        if (confirm("Do you want to save your money? This will make it grow!")) {
            money -= value;
            money *= 2;
        } else {
            money -= value;
        }
    } else {
        money -= value;
    }
    display();
}
function incrementMoney()
{
    money += 10;
    display();
}
function display() {
    document.getElementById("money").innerHTML = "Total: " + money;
}