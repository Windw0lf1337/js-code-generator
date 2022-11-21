
	
	// code starts here card.html
	const component = document.querySelector("#123");
	let card = document.createElement("DIV");
	card.setAttribute("class", "card")
	card.setAttribute("${id", "}")
	component.appendChild(card);

	let cardContainer = document.createElement("DIV");
	cardContainer.setAttribute("class", "card__container ${class}")
	cardContainer.setAttribute("${tabindex", "}")
	card.appendChild(cardContainer);

	let cardImg = document.createElement("IMG");
	cardImg.setAttribute("class", "card__img")
	cardImg.setAttribute("src", "${img}")
	cardImg.setAttribute("crossorigin", "")
	cardContainer.appendChild(cardImg);

	let cardInfo = document.createElement("DIV");
	cardInfo.setAttribute("class", "card__info")
	cardContainer.appendChild(cardInfo);

	let cardTitleContainer = document.createElement("DIV");
	cardTitleContainer.setAttribute("class", "card__titleContainer")
	cardInfo.appendChild(cardTitleContainer);

	let cardTitle = document.createElement("H6");
	cardTitle.setAttribute("class", "card__title")
	cardTitle.textContent = `${title}`;
	cardTitleContainer.appendChild(cardTitle);

	let materialIcons = document.createElement("I");
	materialIcons.setAttribute("class", "material-icons")
	materialIcons.setAttribute("translate", "no")
	materialIcons.textContent = `${title-icon}`;
	cardTitleContainer.appendChild(materialIcons);

	let cardSubtitle = document.createElement("P");
	cardSubtitle.setAttribute("class", "card__subtitle")
	cardSubtitle.textContent = `${subtitle}`;
	cardInfo.appendChild(cardSubtitle);

	let cardContent = document.createElement("DIV");
	cardContent.setAttribute("class", "card__content")
	cardContent.textContent = `${content}`;
	cardInfo.appendChild(cardContent);

	let cardAction = document.createElement("DIV");
	cardAction.setAttribute("class", "card__action")
	cardContainer.appendChild(cardAction);

	let buttonText = document.createElement("CB-BUTTON");
	buttonText.setAttribute("class", "button--text card__action--left")
	buttonText.textContent = `${text-btnLeft}`;
	cardAction.appendChild(buttonText);

	let buttonText = document.createElement("CB-BUTTON");
	buttonText.setAttribute("class", "button--text card__action--right")
	buttonText.textContent = `${text-btnRight}`;
	cardAction.appendChild(buttonText);

	let cardActionRightIcon = document.createElement("DIV");
	cardActionRightIcon.setAttribute("class", "card__action--rightIcon")
	cardAction.appendChild(cardActionRightIcon);

	let iconButtonNoHover = document.createElement("CB-ICON-BUTTON");
	iconButtonNoHover.setAttribute("class", "iconButton--noHover")
	iconButtonNoHover.textContent = `${icon}`;
	cardActionRightIcon.appendChild(iconButtonNoHover);


	// code ends here