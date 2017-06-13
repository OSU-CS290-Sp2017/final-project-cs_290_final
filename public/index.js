/*
 * By: Brandon Villanueva
 */

var name;
function getName(){
	name = trooperInput.value;
	console.log('add text', name);
}

var number = Math.floor((Math.random() * 99999) + 10000);
function showWelcome() {
	var NewText = document.getElementById('NewTrooper');
	var TrooperNum = document.getElementById('NewTrooperNum');
	event.preventDefault();
	if(name){
		console.log('add text', name);

		var NewNumber = document.createTextNode(number);
		TrooperNum.appendChild(NewNumber);
		NewText.classList.toggle('hidden');
		NewNumber = '';
		name = '';
	}
	else{
		alert('Enter your name Trooper!');
	}
}

/*

function insertNewPhoto() {

	if (name) {


			storeInfo(Stormtroopers, name, number, function (err) {

				if (err) {
					alert("Unable to save person's photo.  Got this error:\n\n" + err);
				} else {

					var Template = Handlebars.templates.TrooperCard;
					var templateArgs = {
						Name: name,
						Numbers: number
					};

					var trooperHTML = Template(templateArgs);

					var Container = document.getElementById('.contain');
					Container.insertAdjacentHTML('beforeend', trooperHTML);

				}

			});

		}


	} else {

		alert('You must specify a value for the "URL" field.');

	}

}

function storeInfo(Stormtroopers, name, number, callback) {

	var postURL = "/Enlist";

	var postRequest = new XMLHttpRequest();
	postRequest.open('POST', postURL);
	postRequest.setRequestHeader('Content-Type', 'application/json');

	postRequest.addEventListener('load', function (event) {
		var error;
		if (event.target.status !== 200) {
			error = event.target.response;
		}
		callback(error);
	});

	var postBody = {
		Name: name,
		Numbers: number
	};
	postRequest.send(JSON.stringify(postBody));

}
*/

var joinButton = document.getElementById('UpButton');
joinButton.addEventListener('click', showWelcome);

var trooperInput = document.getElementById('inputName');
trooperInput.addEventListener('change', getName);




