let money = 0;
display();
function decrementMoney(value)
{
    money -= value;
    console.log("decrementing");
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