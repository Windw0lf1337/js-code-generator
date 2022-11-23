function something() {
		
	
	
	
	
	
	
	
	
	
	
	
	// code starts here h3.html
	const component = document.querySelector("#123");
	let DIV1 = document.createElement("DIV");
	component.appendChild(DIV1);

	let SOMECASE1 = document.createElement("SOME-CASE");
	DIV1.appendChild(SOMECASE1);

	let text1 = document.createElement("P");
	text1.setAttribute("class", "text")
	text1.textContent = `Hello`;
	DIV1.appendChild(text1);

	let img1 = document.createElement("IMG");
	img1.setAttribute("class", "img")
	DIV1.appendChild(img1);

	let FORM1 = document.createElement("FORM");
	DIV1.appendChild(FORM1);

	let login1 = document.createElement("INPUT");
	login1.setAttribute("name", "login")
	FORM1.appendChild(login1);

	let SPAN1 = document.createElement("SPAN");
	SPAN1.textContent = `Something else`;
	DIV1.appendChild(SPAN1);


	// code ends here
}

