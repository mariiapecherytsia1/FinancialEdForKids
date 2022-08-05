/* .js files add interaction to your website */

//carsouel 
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

//FACT GENERATOR, TODO add more facts
var factList = [
  "Over 40% of adults are not financially literate!",
  "An estimated 58% of teenagers plan to work part-time during college",
  "Half of teenagers work outside the home each month",
  "Teenagers earn an average of $465 per month",
  "More than half of teenagers already have savings to show for it",

];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(myButton)
{
   myButton.addEventListener("click", displayFact); 
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
