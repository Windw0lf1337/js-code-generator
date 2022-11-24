	// code starts here date-timepicker.html
	const component = document.querySelector("#123");
	let datetimepicker1 = document.createElement("DIV");
	datetimepicker1.setAttribute("${id", "}")
	datetimepicker1.setAttribute("class", "dateTimePicker")
	component.appendChild(datetimepicker1);

	let datetimepickerContainer1 = document.createElement("DIV");
	datetimepickerContainer1.setAttribute("class", "dateTimePicker__container")
	datetimepickerContainer1.setAttribute("${aria-disabled", "}")
	datetimepickerContainer1.setAttribute("${aria-required", "}")
	datetimepicker1.appendChild(datetimepickerContainer1);

	let datetimepickerDateinputcontainer1 = document.createElement("DIV");
	datetimepickerDateinputcontainer1.setAttribute("class", "dateTimePicker__dateInputContainer")
	datetimepickerContainer1.appendChild(datetimepickerDateinputcontainer1);

	let datetimepickerTextcontainer1 = document.createElement("DIV");
	datetimepickerTextcontainer1.setAttribute("class", "dateTimePicker__textContainer")
	datetimepickerDateinputcontainer1.appendChild(datetimepickerTextcontainer1);

	let datetimepickerLabel1 = document.createElement("LABEL");
	datetimepickerLabel1.setAttribute("class", "dateTimePicker__label")
	datetimepickerLabel1.textContent = `${label}`;
	datetimepickerTextcontainer1.appendChild(datetimepickerLabel1);

	let datetimepickerRequired1 = document.createElement("SPAN");
	datetimepickerRequired1.setAttribute("class", "dateTimePicker__required")
	datetimepickerRequired1.textContent = `*`;
	datetimepickerTextcontainer1.appendChild(datetimepickerRequired1);

	let datetimepickerText1 = document.createElement("DIV");
	datetimepickerText1.setAttribute("class", "dateTimePicker__text")
	datetimepickerText1.setAttribute("tabindex", "0")
	datetimepickerTextcontainer1.appendChild(datetimepickerText1);

	let datetimepickerIconcontainer1 = document.createElement("DIV");
	datetimepickerIconcontainer1.setAttribute("class", "dateTimePicker__iconContainer")
	datetimepickerDateinputcontainer1.appendChild(datetimepickerIconcontainer1);

	let cbIconButton1 = document.createElement("CB-ICON-BUTTON");
	cbIconButton1.textContent = `date_range`;
	datetimepickerIconcontainer1.appendChild(cbIconButton1);

	let datetimepickerDatecontainer1 = document.createElement("DIV");
	datetimepickerDatecontainer1.setAttribute("class", "dateTimePicker__dateContainer hide")
	datetimepickerContainer1.appendChild(datetimepickerDatecontainer1);

	let monthcontainer1 = document.createElement("DIV");
	monthcontainer1.setAttribute("class", "monthContainer")
	datetimepickerDatecontainer1.appendChild(monthcontainer1);

	let left1 = document.createElement("DIV");
	left1.setAttribute("class", "left")
	monthcontainer1.appendChild(left1);

	let cbIconButton1 = document.createElement("CB-ICON-BUTTON");
	cbIconButton1.textContent = `navigate_before`;
	left1.appendChild(cbIconButton1);

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
	monthcontainer1.appendChild(name1);

	let span1 = document.createElement("SPAN");
	name1.appendChild(span1);

	let span1 = document.createElement("SPAN");
	name1.appendChild(span1);

	let right1 = document.createElement("DIV");
	right1.setAttribute("class", "right")
	monthcontainer1.appendChild(right1);

	let cbIconButton1 = document.createElement("CB-ICON-BUTTON");
	cbIconButton1.textContent = `navigate_next`;
	right1.appendChild(cbIconButton1);

	let daycontainer1 = document.createElement("DIV");
	daycontainer1.setAttribute("class", "dayContainer")
	datetimepickerDatecontainer1.appendChild(daycontainer1);

	let daynamecontainer1 = document.createElement("DIV");
	daynamecontainer1.setAttribute("class", "dayNameContainer")
	daycontainer1.appendChild(daynamecontainer1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${monday}`;
	daynamecontainer1.appendChild(div1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${tuesday}`;
	daynamecontainer1.appendChild(div1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${wendsday}`;
	daynamecontainer1.appendChild(div1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${thursday}`;
	daynamecontainer1.appendChild(div1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${friday}`;
	daynamecontainer1.appendChild(div1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${saturday}`;
	daynamecontainer1.appendChild(div1);

	let div1 = document.createElement("DIV");
	div1.textContent = `${sunday}`;
	daynamecontainer1.appendChild(div1);

	let dayscontainer1 = document.createElement("DIV");
	dayscontainer1.setAttribute("class", "daysContainer")
	daycontainer1.appendChild(dayscontainer1);

	let actioncontainer1 = document.createElement("DIV");
	actioncontainer1.setAttribute("class", "actionContainer")
	datetimepickerDatecontainer1.appendChild(actioncontainer1);

	let buttonText1 = document.createElement("CB-BUTTON");
	buttonText1.setAttribute("class", "button--text")
	buttonText1.textContent = `${today}`;
	actioncontainer1.appendChild(buttonText1);

	let datetimepickerTimecontainer1 = document.createElement("DIV");
	datetimepickerTimecontainer1.setAttribute("class", "dateTimePicker__timeContainer hide")
	datetimepickerContainer1.appendChild(datetimepickerTimecontainer1);

	let topcontainer1 = document.createElement("DIV");
	topcontainer1.setAttribute("class", "topContainer")
	datetimepickerTimecontainer1.appendChild(topcontainer1);

	let day1 = document.createElement("DIV");
	day1.setAttribute("class", "day")
	topcontainer1.appendChild(day1);

	let info1 = document.createElement("DIV");
	info1.setAttribute("class", "info")
	info1.setAttribute("data-i18n-day-from", "${from}")
	info1.setAttribute("data-i18n-day-to", "${to}")
	day1.appendChild(info1);

	let div1 = document.createElement("DIV");
	day1.appendChild(div1);

	let clockcontainer1 = document.createElement("DIV");
	clockcontainer1.setAttribute("class", "clockContainer")
	datetimepickerTimecontainer1.appendChild(clockcontainer1);

	let clockcirclecontainer1 = document.createElement("DIV");
	clockcirclecontainer1.setAttribute("class", "clockCircleContainer")
	clockcontainer1.appendChild(clockcirclecontainer1);

	let hourcircle1 = document.createElement("DIV");
	hourcircle1.setAttribute("class", "hourCircle")
	clockcirclecontainer1.appendChild(hourcircle1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `0`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `2`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `4`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `6`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `8`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `10`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `12`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `14`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `16`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `18`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `20`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `22`;
	hourcircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	hourcircle1.appendChild(number1);

	let mincircle1 = document.createElement("DIV");
	mincircle1.setAttribute("class", "minCircle")
	clockcirclecontainer1.appendChild(mincircle1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `0`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `5`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `10`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `15`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `20`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `25`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `30`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	number1.setAttribute("tabindex", "0")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `35`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `40`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `45`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `50`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number top")
	number1.setAttribute("tabindex", "0")
	number1.textContent = `55`;
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let number1 = document.createElement("DIV");
	number1.setAttribute("class", "number")
	mincircle1.appendChild(number1);

	let time1 = document.createElement("DIV");
	time1.setAttribute("class", "time")
	clockcirclecontainer1.appendChild(time1);

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
	clockcirclecontainer1.appendChild(buttonText1);

	// code ends here