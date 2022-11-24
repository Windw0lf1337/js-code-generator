	// code starts here date-timepicker.html
	const component = document.querySelector("#123");
	let dateTimePicker1 = document.createElement("DIV");
	dateTimePicker1.setAttribute("${id", "}")
	dateTimePicker1.setAttribute("class", "dateTimePicker")
	component.appendChild(dateTimePicker1);

	let dateTimePickerContainer1 = document.createElement("DIV");
	dateTimePickerContainer1.setAttribute("class", "dateTimePicker__container")
	dateTimePickerContainer1.setAttribute("${aria-disabled", "}")
	dateTimePickerContainer1.setAttribute("${aria-required", "}")
	dateTimePicker1.appendChild(dateTimePickerContainer1);

	let dateTimePickerDateInputContainer1 = document.createElement("DIV");
	dateTimePickerDateInputContainer1.setAttribute("class", "dateTimePicker__dateInputContainer")
	dateTimePickerContainer1.appendChild(dateTimePickerDateInputContainer1);

	let dateTimePickerTextContainer1 = document.createElement("DIV");
	dateTimePickerTextContainer1.setAttribute("class", "dateTimePicker__textContainer")
	dateTimePickerDateInputContainer1.appendChild(dateTimePickerTextContainer1);

	let dateTimePickerLabel1 = document.createElement("LABEL");
	dateTimePickerLabel1.setAttribute("class", "dateTimePicker__label")
	dateTimePickerLabel1.textContent = `${label}`;
	dateTimePickerTextContainer1.appendChild(dateTimePickerLabel1);

	let dateTimePickerRequired1 = document.createElement("SPAN");
	dateTimePickerRequired1.setAttribute("class", "dateTimePicker__required")
	dateTimePickerRequired1.textContent = `*`;
	dateTimePickerTextContainer1.appendChild(dateTimePickerRequired1);

	let dateTimePickerText1 = document.createElement("DIV");
	dateTimePickerText1.setAttribute("class", "dateTimePicker__text")
	dateTimePickerText1.setAttribute("tabindex", "0")
	dateTimePickerTextContainer1.appendChild(dateTimePickerText1);

	let dateTimePickerIconContainer1 = document.createElement("DIV");
	dateTimePickerIconContainer1.setAttribute("class", "dateTimePicker__iconContainer")
	dateTimePickerDateInputContainer1.appendChild(dateTimePickerIconContainer1);

	let cbIconButton1 = document.createElement("CB-ICON-BUTTON");
	cbIconButton1.textContent = `date_range`;
	dateTimePickerIconContainer1.appendChild(cbIconButton1);

	let dateTimePickerDateContainer1 = document.createElement("DIV");
	dateTimePickerDateContainer1.setAttribute("class", "dateTimePicker__dateContainer hide")
	dateTimePickerContainer1.appendChild(dateTimePickerDateContainer1);

	let monthContainer1 = document.createElement("DIV");
	monthContainer1.setAttribute("class", "monthContainer")
	dateTimePickerDateContainer1.appendChild(monthContainer1);

	let left1 = document.createElement("DIV");
	left1.setAttribute("class", "left")
	monthContainer1.appendChild(left1);

	let cbIconButton2 = document.createElement("CB-ICON-BUTTON");
	cbIconButton2.textContent = `navigate_before`;
	left1.appendChild(cbIconButton2);

	let name1 = document.createElement("DIV");
	name1.setAttribute("class", "name")
	name1.setAttribute("data-i18n-month-janurary", "${janurary}")
	name1.setAttribute("data-i18n-month-februrary", "${februrary}")
	name1.setAttribute("data-i18n-month-march", "${march}")
	name1.setAttribute("data-i18n-month-april", "${april}")
	name1.setAttribute("data-i18n-month-may", "${may}")
	name1.setAttribute("data-i18n-month-june", "${june}")
	name1.setAttribute("data-i18n-month-july", "${july}")
	name1.setAttribute("data-i18n-month-august", "${august}")
	name1.setAttribute("data-i18n-month-september", "${september}")
	name1.setAttribute("data-i18n-month-october", "${october}")
	name1.setAttribute("data-i18n-month-november", "${november}")
	name1.setAttribute("data-i18n-month-december", "${december}")
	monthContainer1.appendChild(name1);

	let span1 = document.createElement("SPAN");
	name1.appendChild(span1);

	let span2 = document.createElement("SPAN");
	name1.appendChild(span2);

	let right1 = document.createElement("DIV");
	right1.setAttribute("class", "right")
	monthContainer1.appendChild(right1);

	let cbIconButton3 = document.createElement("CB-ICON-BUTTON");
	cbIconButton3.textContent = `navigate_next`;
	right1.appendChild(cbIconButton3);

	let dayContainer1 = document.createElement("DIV");
	dayContainer1.setAttribute("class", "dayContainer")
	dateTimePickerDateContainer1.appendChild(dayContainer1);

	let dayNameContainer1 = document.createElement("DIV");
	dayNameContainer1.setAttribute("class", "dayNameContainer")
	dayContainer1.appendChild(dayNameContainer1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${monday}`;
	dayNameContainer1.appendChild(div1);

	let div2 = document.createElement("DIV");
	div2.textContent = `${tuesday}`;
	dayNameContainer1.appendChild(div2);

	let div3 = document.createElement("DIV");
	div3.textContent = `${wendsday}`;
	dayNameContainer1.appendChild(div3);

	let div4 = document.createElement("DIV");
	div4.textContent = `${thursday}`;
	dayNameContainer1.appendChild(div4);

	let div5 = document.createElement("DIV");
	div5.textContent = `${friday}`;
	dayNameContainer1.appendChild(div5);

	let div6 = document.createElement("DIV");
	div6.textContent = `${saturday}`;
	dayNameContainer1.appendChild(div6);

	let div7 = document.createElement("DIV");
	div7.textContent = `${sunday}`;
	dayNameContainer1.appendChild(div7);

	let daysContainer1 = document.createElement("DIV");
	daysContainer1.setAttribute("class", "daysContainer")
	dayContainer1.appendChild(daysContainer1);

	let actionContainer1 = document.createElement("DIV");
	actionContainer1.setAttribute("class", "actionContainer")
	dateTimePickerDateContainer1.appendChild(actionContainer1);

	let buttonText1 = document.createElement("CB-BUTTON");
	buttonText1.setAttribute("class", "button--text")
	buttonText1.textContent = `${today}`;
	actionContainer1.appendChild(buttonText1);

	let dateTimePickerTimeContainer1 = document.createElement("DIV");
	dateTimePickerTimeContainer1.setAttribute("class", "dateTimePicker__timeContainer hide")
	dateTimePickerContainer1.appendChild(dateTimePickerTimeContainer1);

	let topContainer1 = document.createElement("DIV");
	topContainer1.setAttribute("class", "topContainer")
	dateTimePickerTimeContainer1.appendChild(topContainer1);

	let day1 = document.createElement("DIV");
	day1.setAttribute("class", "day")
	topContainer1.appendChild(day1);

	let info1 = document.createElement("DIV");
	info1.setAttribute("class", "info")
	info1.setAttribute("data-i18n-day-from", "${from}")
	info1.setAttribute("data-i18n-day-to", "${to}")
	day1.appendChild(info1);

	let div8 = document.createElement("DIV");
	day1.appendChild(div8);

	let clockContainer1 = document.createElement("DIV");
	clockContainer1.setAttribute("class", "clockContainer")
	dateTimePickerTimeContainer1.appendChild(clockContainer1);

	let clockCircleContainer1 = document.createElement("DIV");
	clockCircleContainer1.setAttribute("class", "clockCircleContainer")
	clockContainer1.appendChild(clockCircleContainer1);

	let hourCircle1 = document.createElement("DIV");
	hourCircle1.setAttribute("class", "hourCircle")
	clockCircleContainer1.appendChild(hourCircle1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `0`;
	hourCircle1.appendChild(number1);

	let number2 = document.createElement("DIV");
	number2.setAttribute("class", "number")
	number2.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number2);

	let number3 = document.createElement("DIV");
	number3.setAttribute("class", "number")
	number3.setAttribute("tabindex", "0")
	number3.textContent = `2`;
	hourCircle1.appendChild(number3);

	let number4 = document.createElement("DIV");
	number4.setAttribute("class", "number")
	number4.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number4);

	let number5 = document.createElement("DIV");
	number5.setAttribute("class", "number")
	number5.setAttribute("tabindex", "0")
	number5.textContent = `4`;
	hourCircle1.appendChild(number5);

	let number6 = document.createElement("DIV");
	number6.setAttribute("class", "number")
	number6.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number6);

	let number7 = document.createElement("DIV");
	number7.setAttribute("class", "number")
	number7.setAttribute("tabindex", "0")
	number7.textContent = `6`;
	hourCircle1.appendChild(number7);

	let number8 = document.createElement("DIV");
	number8.setAttribute("class", "number")
	number8.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number8);

	let number9 = document.createElement("DIV");
	number9.setAttribute("class", "number")
	number9.setAttribute("tabindex", "0")
	number9.textContent = `8`;
	hourCircle1.appendChild(number9);

	let number10 = document.createElement("DIV");
	number10.setAttribute("class", "number")
	number10.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number10);

	let number11 = document.createElement("DIV");
	number11.setAttribute("class", "number")
	number11.setAttribute("tabindex", "0")
	number11.textContent = `10`;
	hourCircle1.appendChild(number11);

	let number12 = document.createElement("DIV");
	number12.setAttribute("class", "number")
	number12.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number12);

	let number13 = document.createElement("DIV");
	number13.setAttribute("class", "number")
	number13.setAttribute("tabindex", "0")
	number13.textContent = `12`;
	hourCircle1.appendChild(number13);

	let number14 = document.createElement("DIV");
	number14.setAttribute("class", "number")
	number14.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number14);

	let number15 = document.createElement("DIV");
	number15.setAttribute("class", "number")
	number15.setAttribute("tabindex", "0")
	number15.textContent = `14`;
	hourCircle1.appendChild(number15);

	let number16 = document.createElement("DIV");
	number16.setAttribute("class", "number")
	number16.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number16);

	let number17 = document.createElement("DIV");
	number17.setAttribute("class", "number")
	number17.setAttribute("tabindex", "0")
	number17.textContent = `16`;
	hourCircle1.appendChild(number17);

	let number18 = document.createElement("DIV");
	number18.setAttribute("class", "number")
	number18.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number18);

	let number19 = document.createElement("DIV");
	number19.setAttribute("class", "number")
	number19.setAttribute("tabindex", "0")
	number19.textContent = `18`;
	hourCircle1.appendChild(number19);

	let number20 = document.createElement("DIV");
	number20.setAttribute("class", "number")
	number20.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number20);

	let number21 = document.createElement("DIV");
	number21.setAttribute("class", "number")
	number21.setAttribute("tabindex", "0")
	number21.textContent = `20`;
	hourCircle1.appendChild(number21);

	let number22 = document.createElement("DIV");
	number22.setAttribute("class", "number")
	number22.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number22);

	let number23 = document.createElement("DIV");
	number23.setAttribute("class", "number")
	number23.setAttribute("tabindex", "0")
	number23.textContent = `22`;
	hourCircle1.appendChild(number23);

	let number24 = document.createElement("DIV");
	number24.setAttribute("class", "number")
	number24.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number24);

	let minCircle1 = document.createElement("DIV");
	minCircle1.setAttribute("class", "minCircle")
	clockCircleContainer1.appendChild(minCircle1);

	let number25 = document.createElement("DIV");
	number25.setAttribute("class", "number top")
	number25.setAttribute("tabindex", "0")
	number25.textContent = `0`;
	minCircle1.appendChild(number25);

	let number26 = document.createElement("DIV");
	number26.setAttribute("class", "number")
	minCircle1.appendChild(number26);

	let number27 = document.createElement("DIV");
	number27.setAttribute("class", "number")
	minCircle1.appendChild(number27);

	let number28 = document.createElement("DIV");
	number28.setAttribute("class", "number")
	minCircle1.appendChild(number28);

	let number29 = document.createElement("DIV");
	number29.setAttribute("class", "number")
	minCircle1.appendChild(number29);

	let number30 = document.createElement("DIV");
	number30.setAttribute("class", "number top")
	number30.setAttribute("tabindex", "0")
	number30.textContent = `5`;
	minCircle1.appendChild(number30);

	let number31 = document.createElement("DIV");
	number31.setAttribute("class", "number")
	minCircle1.appendChild(number31);

	let number32 = document.createElement("DIV");
	number32.setAttribute("class", "number")
	minCircle1.appendChild(number32);

	let number33 = document.createElement("DIV");
	number33.setAttribute("class", "number")
	minCircle1.appendChild(number33);

	let number34 = document.createElement("DIV");
	number34.setAttribute("class", "number")
	minCircle1.appendChild(number34);

	let number35 = document.createElement("DIV");
	number35.setAttribute("class", "number top")
	number35.setAttribute("tabindex", "0")
	number35.textContent = `10`;
	minCircle1.appendChild(number35);

	let number36 = document.createElement("DIV");
	number36.setAttribute("class", "number")
	minCircle1.appendChild(number36);

	let number37 = document.createElement("DIV");
	number37.setAttribute("class", "number")
	minCircle1.appendChild(number37);

	let number38 = document.createElement("DIV");
	number38.setAttribute("class", "number")
	minCircle1.appendChild(number38);

	let number39 = document.createElement("DIV");
	number39.setAttribute("class", "number")
	minCircle1.appendChild(number39);

	let number40 = document.createElement("DIV");
	number40.setAttribute("class", "number top")
	number40.setAttribute("tabindex", "0")
	number40.textContent = `15`;
	minCircle1.appendChild(number40);

	let number41 = document.createElement("DIV");
	number41.setAttribute("class", "number")
	minCircle1.appendChild(number41);

	let number42 = document.createElement("DIV");
	number42.setAttribute("class", "number")
	minCircle1.appendChild(number42);

	let number43 = document.createElement("DIV");
	number43.setAttribute("class", "number")
	minCircle1.appendChild(number43);

	let number44 = document.createElement("DIV");
	number44.setAttribute("class", "number")
	minCircle1.appendChild(number44);

	let number45 = document.createElement("DIV");
	number45.setAttribute("class", "number top")
	number45.setAttribute("tabindex", "0")
	number45.textContent = `20`;
	minCircle1.appendChild(number45);

	let number46 = document.createElement("DIV");
	number46.setAttribute("class", "number")
	minCircle1.appendChild(number46);

	let number47 = document.createElement("DIV");
	number47.setAttribute("class", "number")
	minCircle1.appendChild(number47);

	let number48 = document.createElement("DIV");
	number48.setAttribute("class", "number")
	minCircle1.appendChild(number48);

	let number49 = document.createElement("DIV");
	number49.setAttribute("class", "number")
	minCircle1.appendChild(number49);

	let number50 = document.createElement("DIV");
	number50.setAttribute("class", "number top")
	number50.setAttribute("tabindex", "0")
	number50.textContent = `25`;
	minCircle1.appendChild(number50);

	let number51 = document.createElement("DIV");
	number51.setAttribute("class", "number")
	minCircle1.appendChild(number51);

	let number52 = document.createElement("DIV");
	number52.setAttribute("class", "number")
	minCircle1.appendChild(number52);

	let number53 = document.createElement("DIV");
	number53.setAttribute("class", "number")
	minCircle1.appendChild(number53);

	let number54 = document.createElement("DIV");
	number54.setAttribute("class", "number")
	minCircle1.appendChild(number54);

	let number55 = document.createElement("DIV");
	number55.setAttribute("class", "number top")
	number55.setAttribute("tabindex", "0")
	number55.textContent = `30`;
	minCircle1.appendChild(number55);

	let number56 = document.createElement("DIV");
	number56.setAttribute("class", "number")
	minCircle1.appendChild(number56);

	let number57 = document.createElement("DIV");
	number57.setAttribute("class", "number")
	number57.setAttribute("tabindex", "0")
	minCircle1.appendChild(number57);

	let number58 = document.createElement("DIV");
	number58.setAttribute("class", "number")
	minCircle1.appendChild(number58);

	let number59 = document.createElement("DIV");
	number59.setAttribute("class", "number")
	minCircle1.appendChild(number59);

	let number60 = document.createElement("DIV");
	number60.setAttribute("class", "number top")
	number60.setAttribute("tabindex", "0")
	number60.textContent = `35`;
	minCircle1.appendChild(number60);

	let number61 = document.createElement("DIV");
	number61.setAttribute("class", "number")
	minCircle1.appendChild(number61);

	let number62 = document.createElement("DIV");
	number62.setAttribute("class", "number")
	minCircle1.appendChild(number62);

	let number63 = document.createElement("DIV");
	number63.setAttribute("class", "number")
	minCircle1.appendChild(number63);

	let number64 = document.createElement("DIV");
	number64.setAttribute("class", "number")
	minCircle1.appendChild(number64);

	let number65 = document.createElement("DIV");
	number65.setAttribute("class", "number top")
	number65.setAttribute("tabindex", "0")
	number65.textContent = `40`;
	minCircle1.appendChild(number65);

	let number66 = document.createElement("DIV");
	number66.setAttribute("class", "number")
	minCircle1.appendChild(number66);

	let number67 = document.createElement("DIV");
	number67.setAttribute("class", "number")
	minCircle1.appendChild(number67);

	let number68 = document.createElement("DIV");
	number68.setAttribute("class", "number")
	minCircle1.appendChild(number68);

	let number69 = document.createElement("DIV");
	number69.setAttribute("class", "number")
	minCircle1.appendChild(number69);

	let number70 = document.createElement("DIV");
	number70.setAttribute("class", "number top")
	number70.setAttribute("tabindex", "0")
	number70.textContent = `45`;
	minCircle1.appendChild(number70);

	let number71 = document.createElement("DIV");
	number71.setAttribute("class", "number")
	minCircle1.appendChild(number71);

	let number72 = document.createElement("DIV");
	number72.setAttribute("class", "number")
	minCircle1.appendChild(number72);

	let number73 = document.createElement("DIV");
	number73.setAttribute("class", "number")
	minCircle1.appendChild(number73);

	let number74 = document.createElement("DIV");
	number74.setAttribute("class", "number")
	minCircle1.appendChild(number74);

	let number75 = document.createElement("DIV");
	number75.setAttribute("class", "number top")
	number75.setAttribute("tabindex", "0")
	number75.textContent = `50`;
	minCircle1.appendChild(number75);

	let number76 = document.createElement("DIV");
	number76.setAttribute("class", "number")
	minCircle1.appendChild(number76);

	let number77 = document.createElement("DIV");
	number77.setAttribute("class", "number")
	minCircle1.appendChild(number77);

	let number78 = document.createElement("DIV");
	number78.setAttribute("class", "number")
	minCircle1.appendChild(number78);

	let number79 = document.createElement("DIV");
	number79.setAttribute("class", "number")
	minCircle1.appendChild(number79);

	let number80 = document.createElement("DIV");
	number80.setAttribute("class", "number top")
	number80.setAttribute("tabindex", "0")
	number80.textContent = `55`;
	minCircle1.appendChild(number80);

	let number81 = document.createElement("DIV");
	number81.setAttribute("class", "number")
	minCircle1.appendChild(number81);

	let number82 = document.createElement("DIV");
	number82.setAttribute("class", "number")
	minCircle1.appendChild(number82);

	let number83 = document.createElement("DIV");
	number83.setAttribute("class", "number")
	minCircle1.appendChild(number83);

	let number84 = document.createElement("DIV");
	number84.setAttribute("class", "number")
	minCircle1.appendChild(number84);

	let time1 = document.createElement("DIV");
	time1.setAttribute("class", "time")
	clockCircleContainer1.appendChild(time1);

	let active1 = document.createElement("INPUT");
	active1.setAttribute("class", "active")
	active1.setAttribute("type", "text")
	active1.setAttribute("value", "00")
	time1.appendChild(active1);

	let inactive1 = document.createElement("INPUT");
	inactive1.setAttribute("class", "inactive")
	inactive1.setAttribute("type", "text")
	inactive1.setAttribute("value", "00")
	time1.appendChild(inactive1);

	let buttonText2 = document.createElement("CB-BUTTON");
	buttonText2.setAttribute("class", "button--text ok")
	buttonText2.textContent = `${ok}`;
	clockCircleContainer1.appendChild(buttonText2);

	// code ends here