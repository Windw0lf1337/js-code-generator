function something() {
		
	
	
	// code starts here h3.html
	const component = document.querySelector("#123");
	let div1 = document.createElement("DIV");
	component.appendChild(div1);

	let someCase1 = document.createElement("SOME-CASE");
	div1.appendChild(someCase1);

	let text = document.createElement("P");
	text.setAttribute("class", "text")
	text.textContent = `Hello`;
	div1.appendChild(text);

	let img = document.createElement("IMG");
	img.setAttribute("class", "img")
	div1.appendChild(img);

	let form1 = document.createElement("FORM");
	div1.appendChild(form1);

	let login = document.createElement("INPUT");
	login.setAttribute("name", "login")
	form1.appendChild(login);

	let span1 = document.createElement("SPAN");
	span1.textContent = `Something else`;
	div1.appendChild(span1);


	// code ends here
}

