var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/citadelle_01.jpg') {
		myImage.setAttribute ('src','images/citadelle_02.jpg');
	} else {
	  myImage.setAttribute ('src','images/citadelle_01.jpg');
	}
}

var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Citadelle-La-Ferriere is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Citadelle-La-Ferriere is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}