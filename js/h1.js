function something() {
		
	
	
	
	// code starts here h3.html
	const component = document.querySelector("#123");
	let div = document.createElement("DIV");
	component.appendChild(div);

	let someCase = document.createElement("SOME-CASE");
	div.appendChild(someCase);

	let text = document.createElement("P");
	text.setAttribute("class", "text")
	text.textContent = `Hello`;
	div.appendChild(text);

	let img = document.createElement("IMG");
	img.setAttribute("class", "img")
	div.appendChild(img);

	let form = document.createElement("FORM");
	div.appendChild(form);

	let login = document.createElement("INPUT");
	login.setAttribute("name", "login")
	form.appendChild(login);

	let span = document.createElement("SPAN");
	span.textContent = `Something else`;
	div.appendChild(span);


	// code ends here
}

