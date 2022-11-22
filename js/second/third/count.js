
	
	// code starts here date-timepicker.html
	const component = document.querySelector("#123");
	let dateTimePicker = document.createElement("DIV");
	dateTimePicker.setAttribute("${id", "}")
	dateTimePicker.setAttribute("class", "dateTimePicker")
	component.appendChild(dateTimePicker);

	let dateTimePickerContainer = document.createElement("DIV");
	dateTimePickerContainer.setAttribute("class", "dateTimePicker__container")
	dateTimePickerContainer.setAttribute("${aria-disabled", "}")
	dateTimePickerContainer.setAttribute("${aria-required", "}")
	dateTimePicker.appendChild(dateTimePickerContainer);

	let dateTimePickerDateInputContainer = document.createElement("DIV");
	dateTimePickerDateInputContainer.setAttribute("class", "dateTimePicker__dateInputContainer")
	dateTimePickerContainer.appendChild(dateTimePickerDateInputContainer);

	let dateTimePickerTextContainer = document.createElement("DIV");
	dateTimePickerTextContainer.setAttribute("class", "dateTimePicker__textContainer")
	dateTimePickerDateInputContainer.appendChild(dateTimePickerTextContainer);

	let dateTimePickerLabel = document.createElement("LABEL");
	dateTimePickerLabel.setAttribute("class", "dateTimePicker__label")
	dateTimePickerLabel.textContent = `${label}`;
	dateTimePickerTextContainer.appendChild(dateTimePickerLabel);

	let dateTimePickerRequired = document.createElement("SPAN");
	dateTimePickerRequired.setAttribute("class", "dateTimePicker__required")
	dateTimePickerRequired.textContent = `*`;
	dateTimePickerTextContainer.appendChild(dateTimePickerRequired);

	let dateTimePickerText = document.createElement("DIV");
	dateTimePickerText.setAttribute("class", "dateTimePicker__text")
	dateTimePickerText.setAttribute("tabindex", "0")
	dateTimePickerTextContainer.appendChild(dateTimePickerText);

	let dateTimePickerIconContainer = document.createElement("DIV");
	dateTimePickerIconContainer.setAttribute("class", "dateTimePicker__iconContainer")
	dateTimePickerDateInputContainer.appendChild(dateTimePickerIconContainer);

	let cbIconButton1 = document.createElement("CB-ICON-BUTTON");
	cbIconButton1.textContent = `date_range`;
	dateTimePickerIconContainer.appendChild(cbIconButton1);

	let dateTimePickerDateContainer = document.createElement("DIV");
	dateTimePickerDateContainer.setAttribute("class", "dateTimePicker__dateContainer hide")
	dateTimePickerContainer.appendChild(dateTimePickerDateContainer);

	let monthContainer = document.createElement("DIV");
	monthContainer.setAttribute("class", "monthContainer")
	dateTimePickerDateContainer.appendChild(monthContainer);

	let left = document.createElement("DIV");
	left.setAttribute("class", "left")
	monthContainer.appendChild(left);

	let cbIconButton2 = document.createElement("CB-ICON-BUTTON");
	cbIconButton2.textContent = `navigate_before`;
	left.appendChild(cbIconButton2);

	let name = document.createElement("DIV");
	name.setAttribute("class", "name")
	name.setAttribute("data-i18n-month-janurary", "${janurary}")
	name.setAttribute("data-i18n-month-februrary", "${februrary}")
	name.setAttribute("data-i18n-month-march", "${march}")
	name.setAttribute("data-i18n-month-april", "${april}")
	name.setAttribute("data-i18n-month-may", "${may}")
	name.setAttribute("data-i18n-month-june", "${june}")
	name.setAttribute("data-i18n-month-july", "${july}")
	name.setAttribute("data-i18n-month-august", "${august}")
	name.setAttribute("data-i18n-month-september", "${september}")
	name.setAttribute("data-i18n-month-october", "${october}")
	name.setAttribute("data-i18n-month-november", "${november}")
	name.setAttribute("data-i18n-month-december", "${december}")
	monthContainer.appendChild(name);

	let span1 = document.createElement("SPAN");
	name.appendChild(span1);

	let span2 = document.createElement("SPAN");
	name.appendChild(span2);

	let right = document.createElement("DIV");
	right.setAttribute("class", "right")
	monthContainer.appendChild(right);

	let cbIconButton3 = document.createElement("CB-ICON-BUTTON");
	cbIconButton3.textContent = `navigate_next`;
	right.appendChild(cbIconButton3);

	let dayContainer = document.createElement("DIV");
	dayContainer.setAttribute("class", "dayContainer")
	dateTimePickerDateContainer.appendChild(dayContainer);

	let dayNameContainer = document.createElement("DIV");
	dayNameContainer.setAttribute("class", "dayNameContainer")
	dayContainer.appendChild(dayNameContainer);

	let div1 = document.createElement("DIV");
	div1.textContent = `${monday}`;
	dayNameContainer.appendChild(div1);

	let div2 = document.createElement("DIV");
	div2.textContent = `${tuesday}`;
	dayNameContainer.appendChild(div2);

	let div3 = document.createElement("DIV");
	div3.textContent = `${wendsday}`;
	dayNameContainer.appendChild(div3);

	let div4 = document.createElement("DIV");
	div4.textContent = `${thursday}`;
	dayNameContainer.appendChild(div4);

	let div5 = document.createElement("DIV");
	div5.textContent = `${friday}`;
	dayNameContainer.appendChild(div5);

	let div6 = document.createElement("DIV");
	div6.textContent = `${saturday}`;
	dayNameContainer.appendChild(div6);

	let div7 = document.createElement("DIV");
	div7.textContent = `${sunday}`;
	dayNameContainer.appendChild(div7);

	let daysContainer = document.createElement("DIV");
	daysContainer.setAttribute("class", "daysContainer")
	dayContainer.appendChild(daysContainer);

	let actionContainer = document.createElement("DIV");
	actionContainer.setAttribute("class", "actionContainer")
	dateTimePickerDateContainer.appendChild(actionContainer);

	let buttonText = document.createElement("CB-BUTTON");
	buttonText.setAttribute("class", "button--text")
	buttonText.textContent = `${today}`;
	actionContainer.appendChild(buttonText);

	let dateTimePickerTimeContainer = document.createElement("DIV");
	dateTimePickerTimeContainer.setAttribute("class", "dateTimePicker__timeContainer hide")
	dateTimePickerContainer.appendChild(dateTimePickerTimeContainer);

	let topContainer = document.createElement("DIV");
	topContainer.setAttribute("class", "topContainer")
	dateTimePickerTimeContainer.appendChild(topContainer);

	let day = document.createElement("DIV");
	day.setAttribute("class", "day")
	topContainer.appendChild(day);

	let info = document.createElement("DIV");
	info.setAttribute("class", "info")
	info.setAttribute("data-i18n-day-from", "${from}")
	info.setAttribute("data-i18n-day-to", "${to}")
	day.appendChild(info);

	let div8 = document.createElement("DIV");
	day.appendChild(div8);

	let clockContainer = document.createElement("DIV");
	clockContainer.setAttribute("class", "clockContainer")
	dateTimePickerTimeContainer.appendChild(clockContainer);

	let clockCircleContainer = document.createElement("DIV");
	clockCircleContainer.setAttribute("class", "clockCircleContainer")
	clockContainer.appendChild(clockCircleContainer);

	let hourCircle = document.createElement("DIV");
	hourCircle.setAttribute("class", "hourCircle")
	clockCircleContainer.appendChild(hourCircle);

	let number = document.createElement("DIV");
	number.setAttribute("class", "number")
	number.setAttribute("tabindex", "0")
	number.textContent = `0`;
	hourCircle.appendChild(number);

	let div9 = document.createElement("DIV");
	div9.setAttribute("class", "number")
	div9.setAttribute("tabindex", "0")
	hourCircle.appendChild(div9);

	let div10 = document.createElement("DIV");
	div10.setAttribute("class", "number")
	div10.setAttribute("tabindex", "0")
	div10.textContent = `2`;
	hourCircle.appendChild(div10);

	let div11 = document.createElement("DIV");
	div11.setAttribute("class", "number")
	div11.setAttribute("tabindex", "0")
	hourCircle.appendChild(div11);

	let div12 = document.createElement("DIV");
	div12.setAttribute("class", "number")
	div12.setAttribute("tabindex", "0")
	div12.textContent = `4`;
	hourCircle.appendChild(div12);

	let div13 = document.createElement("DIV");
	div13.setAttribute("class", "number")
	div13.setAttribute("tabindex", "0")
	hourCircle.appendChild(div13);

	let div14 = document.createElement("DIV");
	div14.setAttribute("class", "number")
	div14.setAttribute("tabindex", "0")
	div14.textContent = `6`;
	hourCircle.appendChild(div14);

	let div15 = document.createElement("DIV");
	div15.setAttribute("class", "number")
	div15.setAttribute("tabindex", "0")
	hourCircle.appendChild(div15);

	let div16 = document.createElement("DIV");
	div16.setAttribute("class", "number")
	div16.setAttribute("tabindex", "0")
	div16.textContent = `8`;
	hourCircle.appendChild(div16);

	let div17 = document.createElement("DIV");
	div17.setAttribute("class", "number")
	div17.setAttribute("tabindex", "0")
	hourCircle.appendChild(div17);

	let div18 = document.createElement("DIV");
	div18.setAttribute("class", "number")
	div18.setAttribute("tabindex", "0")
	div18.textContent = `10`;
	hourCircle.appendChild(div18);

	let div19 = document.createElement("DIV");
	div19.setAttribute("class", "number")
	div19.setAttribute("tabindex", "0")
	hourCircle.appendChild(div19);

	let div20 = document.createElement("DIV");
	div20.setAttribute("class", "number")
	div20.setAttribute("tabindex", "0")
	div20.textContent = `12`;
	hourCircle.appendChild(div20);

	let div21 = document.createElement("DIV");
	div21.setAttribute("class", "number")
	div21.setAttribute("tabindex", "0")
	hourCircle.appendChild(div21);

	let div22 = document.createElement("DIV");
	div22.setAttribute("class", "number")
	div22.setAttribute("tabindex", "0")
	div22.textContent = `14`;
	hourCircle.appendChild(div22);

	let div23 = document.createElement("DIV");
	div23.setAttribute("class", "number")
	div23.setAttribute("tabindex", "0")
	hourCircle.appendChild(div23);

	let div24 = document.createElement("DIV");
	div24.setAttribute("class", "number")
	div24.setAttribute("tabindex", "0")
	div24.textContent = `16`;
	hourCircle.appendChild(div24);

	let div25 = document.createElement("DIV");
	div25.setAttribute("class", "number")
	div25.setAttribute("tabindex", "0")
	hourCircle.appendChild(div25);

	let div26 = document.createElement("DIV");
	div26.setAttribute("class", "number")
	div26.setAttribute("tabindex", "0")
	div26.textContent = `18`;
	hourCircle.appendChild(div26);

	let div27 = document.createElement("DIV");
	div27.setAttribute("class", "number")
	div27.setAttribute("tabindex", "0")
	hourCircle.appendChild(div27);

	let div28 = document.createElement("DIV");
	div28.setAttribute("class", "number")
	div28.setAttribute("tabindex", "0")
	div28.textContent = `20`;
	hourCircle.appendChild(div28);

	let div29 = document.createElement("DIV");
	div29.setAttribute("class", "number")
	div29.setAttribute("tabindex", "0")
	hourCircle.appendChild(div29);

	let div30 = document.createElement("DIV");
	div30.setAttribute("class", "number")
	div30.setAttribute("tabindex", "0")
	div30.textContent = `22`;
	hourCircle.appendChild(div30);

	let div31 = document.createElement("DIV");
	div31.setAttribute("class", "number")
	div31.setAttribute("tabindex", "0")
	hourCircle.appendChild(div31);

	let minCircle = document.createElement("DIV");
	minCircle.setAttribute("class", "minCircle")
	clockCircleContainer.appendChild(minCircle);

	let top = document.createElement("DIV");
	top.setAttribute("class", "number top")
	top.setAttribute("tabindex", "0")
	top.textContent = `0`;
	minCircle.appendChild(top);

	let div32 = document.createElement("DIV");
	div32.setAttribute("class", "number")
	minCircle.appendChild(div32);

	let div33 = document.createElement("DIV");
	div33.setAttribute("class", "number")
	minCircle.appendChild(div33);

	let div34 = document.createElement("DIV");
	div34.setAttribute("class", "number")
	minCircle.appendChild(div34);

	let div35 = document.createElement("DIV");
	div35.setAttribute("class", "number")
	minCircle.appendChild(div35);

	let div36 = document.createElement("DIV");
	div36.setAttribute("class", "number top")
	div36.setAttribute("tabindex", "0")
	div36.textContent = `5`;
	minCircle.appendChild(div36);

	let div37 = document.createElement("DIV");
	div37.setAttribute("class", "number")
	minCircle.appendChild(div37);

	let div38 = document.createElement("DIV");
	div38.setAttribute("class", "number")
	minCircle.appendChild(div38);

	let div39 = document.createElement("DIV");
	div39.setAttribute("class", "number")
	minCircle.appendChild(div39);

	let div40 = document.createElement("DIV");
	div40.setAttribute("class", "number")
	minCircle.appendChild(div40);

	let div41 = document.createElement("DIV");
	div41.setAttribute("class", "number top")
	div41.setAttribute("tabindex", "0")
	div41.textContent = `10`;
	minCircle.appendChild(div41);

	let div42 = document.createElement("DIV");
	div42.setAttribute("class", "number")
	minCircle.appendChild(div42);

	let div43 = document.createElement("DIV");
	div43.setAttribute("class", "number")
	minCircle.appendChild(div43);

	let div44 = document.createElement("DIV");
	div44.setAttribute("class", "number")
	minCircle.appendChild(div44);

	let div45 = document.createElement("DIV");
	div45.setAttribute("class", "number")
	minCircle.appendChild(div45);

	let div46 = document.createElement("DIV");
	div46.setAttribute("class", "number top")
	div46.setAttribute("tabindex", "0")
	div46.textContent = `15`;
	minCircle.appendChild(div46);

	let div47 = document.createElement("DIV");
	div47.setAttribute("class", "number")
	minCircle.appendChild(div47);

	let div48 = document.createElement("DIV");
	div48.setAttribute("class", "number")
	minCircle.appendChild(div48);

	let div49 = document.createElement("DIV");
	div49.setAttribute("class", "number")
	minCircle.appendChild(div49);

	let div50 = document.createElement("DIV");
	div50.setAttribute("class", "number")
	minCircle.appendChild(div50);

	let div51 = document.createElement("DIV");
	div51.setAttribute("class", "number top")
	div51.setAttribute("tabindex", "0")
	div51.textContent = `20`;
	minCircle.appendChild(div51);

	let div52 = document.createElement("DIV");
	div52.setAttribute("class", "number")
	minCircle.appendChild(div52);

	let div53 = document.createElement("DIV");
	div53.setAttribute("class", "number")
	minCircle.appendChild(div53);

	let div54 = document.createElement("DIV");
	div54.setAttribute("class", "number")
	minCircle.appendChild(div54);

	let div55 = document.createElement("DIV");
	div55.setAttribute("class", "number")
	minCircle.appendChild(div55);

	let div56 = document.createElement("DIV");
	div56.setAttribute("class", "number top")
	div56.setAttribute("tabindex", "0")
	div56.textContent = `25`;
	minCircle.appendChild(div56);

	let div57 = document.createElement("DIV");
	div57.setAttribute("class", "number")
	minCircle.appendChild(div57);

	let div58 = document.createElement("DIV");
	div58.setAttribute("class", "number")
	minCircle.appendChild(div58);

	let div59 = document.createElement("DIV");
	div59.setAttribute("class", "number")
	minCircle.appendChild(div59);

	let div60 = document.createElement("DIV");
	div60.setAttribute("class", "number")
	minCircle.appendChild(div60);

	let div61 = document.createElement("DIV");
	div61.setAttribute("class", "number top")
	div61.setAttribute("tabindex", "0")
	div61.textContent = `30`;
	minCircle.appendChild(div61);

	let div62 = document.createElement("DIV");
	div62.setAttribute("class", "number")
	minCircle.appendChild(div62);

	let div63 = document.createElement("DIV");
	div63.setAttribute("class", "number")
	div63.setAttribute("tabindex", "0")
	minCircle.appendChild(div63);

	let div64 = document.createElement("DIV");
	div64.setAttribute("class", "number")
	minCircle.appendChild(div64);

	let div65 = document.createElement("DIV");
	div65.setAttribute("class", "number")
	minCircle.appendChild(div65);

	let div66 = document.createElement("DIV");
	div66.setAttribute("class", "number top")
	div66.setAttribute("tabindex", "0")
	div66.textContent = `35`;
	minCircle.appendChild(div66);

	let div67 = document.createElement("DIV");
	div67.setAttribute("class", "number")
	minCircle.appendChild(div67);

	let div68 = document.createElement("DIV");
	div68.setAttribute("class", "number")
	minCircle.appendChild(div68);

	let div69 = document.createElement("DIV");
	div69.setAttribute("class", "number")
	minCircle.appendChild(div69);

	let div70 = document.createElement("DIV");
	div70.setAttribute("class", "number")
	minCircle.appendChild(div70);

	let div71 = document.createElement("DIV");
	div71.setAttribute("class", "number top")
	div71.setAttribute("tabindex", "0")
	div71.textContent = `40`;
	minCircle.appendChild(div71);

	let div72 = document.createElement("DIV");
	div72.setAttribute("class", "number")
	minCircle.appendChild(div72);

	let div73 = document.createElement("DIV");
	div73.setAttribute("class", "number")
	minCircle.appendChild(div73);

	let div74 = document.createElement("DIV");
	div74.setAttribute("class", "number")
	minCircle.appendChild(div74);

	let div75 = document.createElement("DIV");
	div75.setAttribute("class", "number")
	minCircle.appendChild(div75);

	let div76 = document.createElement("DIV");
	div76.setAttribute("class", "number top")
	div76.setAttribute("tabindex", "0")
	div76.textContent = `45`;
	minCircle.appendChild(div76);

	let div77 = document.createElement("DIV");
	div77.setAttribute("class", "number")
	minCircle.appendChild(div77);

	let div78 = document.createElement("DIV");
	div78.setAttribute("class", "number")
	minCircle.appendChild(div78);

	let div79 = document.createElement("DIV");
	div79.setAttribute("class", "number")
	minCircle.appendChild(div79);

	let div80 = document.createElement("DIV");
	div80.setAttribute("class", "number")
	minCircle.appendChild(div80);

	let div81 = document.createElement("DIV");
	div81.setAttribute("class", "number top")
	div81.setAttribute("tabindex", "0")
	div81.textContent = `50`;
	minCircle.appendChild(div81);

	let div82 = document.createElement("DIV");
	div82.setAttribute("class", "number")
	minCircle.appendChild(div82);

	let div83 = document.createElement("DIV");
	div83.setAttribute("class", "number")
	minCircle.appendChild(div83);

	let div84 = document.createElement("DIV");
	div84.setAttribute("class", "number")
	minCircle.appendChild(div84);

	let div85 = document.createElement("DIV");
	div85.setAttribute("class", "number")
	minCircle.appendChild(div85);

	let div86 = document.createElement("DIV");
	div86.setAttribute("class", "number top")
	div86.setAttribute("tabindex", "0")
	div86.textContent = `55`;
	minCircle.appendChild(div86);

	let div87 = document.createElement("DIV");
	div87.setAttribute("class", "number")
	minCircle.appendChild(div87);

	let div88 = document.createElement("DIV");
	div88.setAttribute("class", "number")
	minCircle.appendChild(div88);

	let div89 = document.createElement("DIV");
	div89.setAttribute("class", "number")
	minCircle.appendChild(div89);

	let div90 = document.createElement("DIV");
	div90.setAttribute("class", "number")
	minCircle.appendChild(div90);

	let time = document.createElement("DIV");
	time.setAttribute("class", "time")
	clockCircleContainer.appendChild(time);

	let active = document.createElement("INPUT");
	active.setAttribute("class", "active")
	active.setAttribute("type", "text")
	active.setAttribute("value", "00")
	time.appendChild(active);

	let inactive = document.createElement("INPUT");
	inactive.setAttribute("class", "inactive")
	inactive.setAttribute("type", "text")
	inactive.setAttribute("value", "00")
	time.appendChild(inactive);

	let buttonText = document.createElement("CB-BUTTON");
	buttonText.setAttribute("class", "button--text ok")
	buttonText.textContent = `${ok}`;
	clockCircleContainer.appendChild(buttonText);


	// code ends here