'use strict'

function getComicID() {
	const full_url = document.URL; // Get current url
	const url_array = full_url.split('/') // Split the string into an array with / as separator
	const last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
	// alert( last_segment ); // Alert last segment
	console.log(full_url)
	return last_segment
}

async function getData() {
	const comicID = getComicID();
	const api_general_url = 'https://xkcd.com/' + comicID + '/info.0.json'
	const response = await fetch(api_general_url);
	const data = await response.json();
	// console.log(data)
	const display_block = document.getElementById('comic strip');
	display_block.src = data.img
	const transcript_block = document.getElementById('transcript');
	transcript_block.innerText = data.transcript
	document.getElementById('title').innerText = data.safe_title;
	document.getElementById('date').innerText = "Date Created:" + data.year + "-" + data.month + "-" + data.day
	// display_block.innerHTML = `<img src="${data.img}">`

}

getData()

//Generate random integer between 1 and 2474, since the API only available in 1 - 2474.
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Not include max, include min.
}

//Get the URL to go to, -1 for previous, 0 for random, 1 for next.
function getNewURL(num) {
	const comicID = parseInt(getComicID());
	let newID;
	if (num === 0){
		newID = getRandomInt(1,2475)
	}
	else {
		newID = comicID + num
	}
	const full_url = document.URL; // Get current url
	const general_url_len = full_url.length - comicID.toString().length
	return full_url.substring(0, general_url_len) + (newID).toString()
}

function goPrev() {
	 location.href = getNewURL(-1);
}

function goNext() {
	location.href = getNewURL(1);
}
function goRandom() {
	location.href = getNewURL(0);
}
