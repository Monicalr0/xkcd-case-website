'use strict'

//Generate random integer between 1 and 2474, since the API only available in 1 - 2474.
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Not include max, include min.
}

function goRandom() {
	const newID = getRandomInt(1,2475)
	const full_url = document.URL + newID
	location.href = full_url;
}


