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

	let CBICONBUTTON1 = document.createElement("CB-ICON-BUTTON");
	CBICONBUTTON1.textContent = `date_range`;
	dateTimePickerIconContainer1.appendChild(CBICONBUTTON1);

	let dateTimePickerDateContainer1 = document.createElement("DIV");
	dateTimePickerDateContainer1.setAttribute("class", "dateTimePicker__dateContainer hide")
	dateTimePickerContainer1.appendChild(dateTimePickerDateContainer1);

	let monthContainer1 = document.createElement("DIV");
	monthContainer1.setAttribute("class", "monthContainer")
	dateTimePickerDateContainer1.appendChild(monthContainer1);

	let left1 = document.createElement("DIV");
	left1.setAttribute("class", "left")
	monthContainer1.appendChild(left1);

	let CBICONBUTTON1 = document.createElement("CB-ICON-BUTTON");
	CBICONBUTTON1.textContent = `navigate_before`;
	left1.appendChild(CBICONBUTTON1);

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

	let SPAN1 = document.createElement("SPAN");
	name1.appendChild(SPAN1);

	let SPAN1 = document.createElement("SPAN");
	name1.appendChild(SPAN1);

	let right1 = document.createElement("DIV");
	right1.setAttribute("class", "right")
	monthContainer1.appendChild(right1);

	let CBICONBUTTON1 = document.createElement("CB-ICON-BUTTON");
	CBICONBUTTON1.textContent = `navigate_next`;
	right1.appendChild(CBICONBUTTON1);

	let dayContainer1 = document.createElement("DIV");
	dayContainer1.setAttribute("class", "dayContainer")
	dateTimePickerDateContainer1.appendChild(dayContainer1);

	let dayNameContainer1 = document.createElement("DIV");
	dayNameContainer1.setAttribute("class", "dayNameContainer")
	dayContainer1.appendChild(dayNameContainer1);

	let DIV1 = document.createElement("DIV");
	DIV1.textContent = `${monday}`;
	dayNameContainer1.appendChild(DIV1);

	let DIV1 = document.createElement("DIV");
	DIV1.textContent = `${tuesday}`;
	dayNameContainer1.appendChild(DIV1);

	let DIV1 = document.createElement("DIV");
	DIV1.textContent = `${wendsday}`;
	dayNameContainer1.appendChild(DIV1);

	let DIV1 = document.createElement("DIV");
	DIV1.textContent = `${thursday}`;
	dayNameContainer1.appendChild(DIV1);

	let DIV1 = document.createElement("DIV");
	DIV1.textContent = `${friday}`;
	dayNameContainer1.appendChild(DIV1);

	let DIV1 = document.createElement("DIV");
	DIV1.textContent = `${saturday}`;
	dayNameContainer1.appendChild(DIV1);

	let DIV1 = document.createElement("DIV");
	DIV1.textContent = `${sunday}`;
	dayNameContainer1.appendChild(DIV1);

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

	let DIV1 = document.createElement("DIV");
	day1.appendChild(DIV1);

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

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `2`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `4`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `6`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `8`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `10`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `12`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `14`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `16`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `18`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `20`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `22`;
	hourCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourCircle1.appendChild(number1);

	let minCircle1 = document.createElement("DIV");
	minCircle1.setAttribute("class", "minCircle")
	clockCircleContainer1.appendChild(minCircle1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `0`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `5`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `10`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `15`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `20`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `25`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `30`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `35`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `40`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `45`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `50`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `55`;
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	minCircle1.appendChild(number1);

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

	let buttonText1 = document.createElement("CB-BUTTON");
	buttonText1.setAttribute("class", "button--text ok")
	buttonText1.textContent = `${ok}`;
	clockCircleContainer1.appendChild(buttonText1);


	// code ends here