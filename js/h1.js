function something() {
	// code starts here card.html
	const component = document.querySelector("#123");
	let card1 = document.createElement("DIV");
	card1.setAttribute("class", "card")
	component.appendChild(card1);

	let cardContainer1 = document.createElement("DIV");
	cardContainer1.setAttribute("class", "card__container ")
	card1.appendChild(cardContainer1);

	let cardImg1 = document.createElement("IMG");
	cardImg1.setAttribute("class", "card__img")
	cardImg1.setAttribute("src", "")
	cardImg1.setAttribute("crossorigin", "")
	cardContainer1.appendChild(cardImg1);

	let cardInfo1 = document.createElement("DIV");
	cardInfo1.setAttribute("class", "card__info")
	cardContainer1.appendChild(cardInfo1);

	let cardTitleContainer1 = document.createElement("DIV");
	cardTitleContainer1.setAttribute("class", "card__titleContainer")
	cardInfo1.appendChild(cardTitleContainer1);

	let customCard1 = document.createElement("H6");
	customCard1.setAttribute("class", "card__title")
	customCard1.setAttribute("id", "customCard")
	cardTitleContainer1.appendChild(customCard1);

	let materialIcons1 = document.createElement("I");
	materialIcons1.setAttribute("class", "material-icons")
	materialIcons1.setAttribute("translate", "no")
	cardTitleContainer1.appendChild(materialIcons1);

	let cardSubtitle1 = document.createElement("P");
	cardSubtitle1.setAttribute("class", "card__subtitle")
	cardInfo1.appendChild(cardSubtitle1);

	let cardContent1 = document.createElement("DIV");
	cardContent1.setAttribute("class", "card__content")
	cardInfo1.appendChild(cardContent1);

	let cardAction1 = document.createElement("DIV");
	cardAction1.setAttribute("class", "card__action")
	cardContainer1.appendChild(cardAction1);

	let ManuelStinkt1 = CBButton.create(id).html()
	ManuelStinkt1.setAttribute("class", "button--text card__action--left")
	cardAction1.appendChild(ManuelStinkt1);

	let buttonText1 = CBButton.create(id).html()
	buttonText1.setAttribute("class", "button--text card__action--right")
	cardAction1.appendChild(buttonText1);

	let cardActionRightIcon1 = document.createElement("DIV");
	cardActionRightIcon1.setAttribute("class", "card__action--rightIcon")
	cardAction1.appendChild(cardActionRightIcon1);

	let iconButtonNoHover1 = IconButton.create(id).html()
	iconButtonNoHover1.setAttribute("class", "iconButton--noHover")
	cardActionRightIcon1.appendChild(iconButtonNoHover1);

	let myElement1 = document.createElement("MY-ELEMENT");
	cardContainer1.appendChild(myElement1);

	// code ends here
}

