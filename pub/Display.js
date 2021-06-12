'use strict'

function getComicID() {
	const full_url = document.URL; // Get current url
	const url_array = full_url.split('/') // Split the string into an array with / as separator
	const last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
	return last_segment
}

async function getData() {
	const comicID = getComicID();
	const api_general_url = `/getData/` + comicID
	const request = new Request(api_general_url, {
		method: 'get',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
	})
	const res = await fetch(request)
	const data = await res.json()

	const displayImg = document.getElementById('comic strip');
	displayImg.src = data.img
	displayImg.alt = data.alt

	const transcript_block = document.getElementById('transcript');
	if (data.transcript === ""){
		transcript_block.innerText = "the transcript is not provided"
	}
	else{
		// transcript_block.innerText = data.transcript
		// // console.log(data.transcript)
		// let length = data.transcript.split("\n")[0].length
		// console.log(data.transcript.split("\n")[0].substring(2,length-2))
		const transcript = data.transcript.split("\n")
		let element;
		let len;
		for (let i = 0; i < transcript.length; i++)
		{
			if (transcript[i].substring(0,2) === "[["){
				element = document.createElement('span')
				len = transcript[i].length
				element.innerText = transcript[i].substring(2,len-2) + "\n"
				element.style.color = "#125d98"
				transcript_block.append(element)
			}
			else if (transcript[i].substring(0,2) === "<<"){
				element = document.createElement('span')
				len = transcript[i].length
				element.innerText = transcript[i].substring(2,len-2) + "\n"
				element.style.color = "#7d5a50"
				transcript_block.append(element)
			}
			else if (transcript[i].substring(0,2) === "(("){
				element = document.createElement('span')
				len = transcript[i].length
				element.innerText = "(" + transcript[i].substring(2,len-2) + ")" + "\n"
				element.style.color = "#536162"
				transcript_block.append(element)
			}
			else if (transcript[i] === "") {
				element = document.createElement("br")
				transcript_block.append(element)
			}
			else if (transcript[i].substring(0,2) !== "{{"){
				element = document.createElement("b")
				element.innerText = transcript[i] + "\n"
				transcript_block.append(element)
			}

		}
	}

	document.getElementById('title').innerText = data.safe_title;
	document.getElementById('date').innerText = "Date Created: " + data.year + "-" + data.month + "-" + data.day

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

//Button for going to previous, next and random strips.
function goPrev() {
	 location.href = getNewURL(-1);
}

function goNext() {
	location.href = getNewURL(1);
}
function goRandom() {
	location.href = getNewURL(0);
}

// Display the number of time a page is viewed.
// Counter is saved in server and send to this function.
async function displayIDViewTime() {
	const url = `/times`
	const request = new Request(url, {
		method: 'get',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
	})
	const res = await fetch(request)
	const json = await res.json()

	return json.counter
}

displayIDViewTime().then(r => {
	const comicID = parseInt(getComicID());
	document.getElementById("viewTime").innerText = "This comic Strip is viewed: "+ r[comicID] + " times"
} )
