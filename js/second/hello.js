
	// code starts here card.html
	const component = document.querySelector("#123");
	let card = document.createElement("DIV");
	card.setAttribute("class", "card")
	card.setAttribute("${id", "}")
	component.appendChild(card);

	let card__container = document.createElement("DIV");
	card__container.setAttribute("class", "card__container ${class}")
	card__container.setAttribute("${tabindex", "}")
	card.appendChild(card__container);

	let card__img = document.createElement("IMG");
	card__img.setAttribute("class", "card__img")
	card__img.setAttribute("src", "${img}")
	card__img.setAttribute("crossorigin", "")
	card__container.appendChild(card__img);

	let card__info = document.createElement("DIV");
	card__info.setAttribute("class", "card__info")
	card__container.appendChild(card__info);

	let card__titleContainer = document.createElement("DIV");
	card__titleContainer.setAttribute("class", "card__titleContainer")
	card__info.appendChild(card__titleContainer);

	let card__title = document.createElement("H6");
	card__title.setAttribute("class", "card__title")
	card__title.textContent = `${title}`;
	card__titleContainer.appendChild(card__title);

	let material-icons = document.createElement("I");
	material-icons.setAttribute("class", "material-icons")
	material-icons.setAttribute("translate", "no")
	material-icons.textContent = `${title-icon}`;
	card__titleContainer.appendChild(material-icons);

	let card__subtitle = document.createElement("P");
	card__subtitle.setAttribute("class", "card__subtitle")
	card__subtitle.textContent = `${subtitle}`;
	card__info.appendChild(card__subtitle);

	let card__content = document.createElement("DIV");
	card__content.setAttribute("class", "card__content")
	card__content.textContent = `${content}`;
	card__info.appendChild(card__content);

	let card__action = document.createElement("DIV");
	card__action.setAttribute("class", "card__action")
	card__container.appendChild(card__action);

	let button--text = document.createElement("CB-BUTTON");
	button--text.setAttribute("class", "button--text card__action--left")
	button--text.textContent = `${text-btnLeft}`;
	card__action.appendChild(button--text);

	let card__action--right = document.createElement("CB-BUTTON");
	card__action--right.setAttribute("class", "button--text card__action--right")
	card__action--right.textContent = `${text-btnRight}`;
	card__action.appendChild(card__action--right);

	let card__action--rightIcon = document.createElement("DIV");
	card__action--rightIcon.setAttribute("class", "card__action--rightIcon")
	card__action.appendChild(card__action--rightIcon);

	let iconButton--noHover = document.createElement("CB-ICON-BUTTON");
	iconButton--noHover.setAttribute("class", "iconButton--noHover")
	iconButton--noHover.textContent = `${icon}`;
	card__action--rightIcon.appendChild(iconButton--noHover);


	// code ends here