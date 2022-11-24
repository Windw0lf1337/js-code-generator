function something() {
	
	const component = document.querySelector("#123");
	let div1 = document.createElement("DIV");
	component.appendChild(div1);

	let someCase1 = document.createElement("SOME-CASE");
	div1.appendChild(someCase1);

	let text1 = document.createElement("P");
	text1.setAttribute("class", "text")
	text1.textContent = `Hello`;
	div1.appendChild(text1);

	let img1 = document.createElement("IMG");
	img1.setAttribute("class", "img")
	div1.appendChild(img1);

	let form1 = document.createElement("FORM");
	div1.appendChild(form1);

	let login1 = document.createElement("INPUT");
	login1.setAttribute("name", "login")
	form1.appendChild(login1);

	let span1 = document.createElement("SPAN");
	span1.textContent = `Something else`;
	div1.appendChild(span1);

	
}

