var canvas;
var url;
var globalData;

var urlBase;
var apiKey;
var query;

// var index = 0;

var searchBox;
var searchButton;

function setup() {
	canvas = createCanvas(500, 500);
	canvas.position(300, 150);

	urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	apiKey = "eb8367adf06a4fb6b301e02157a03a73";
	// query = myTerms[index];

	// url = urlBase + "?api-key=" + apiKey + "&q=" + searchRes;

	// setInterval(loadNewData, 2000);

	searchBox = createInput('Search the NY Times');
	searchBox.position(300, 100);

	searchButton = createButton("Search");
	searchButton.position(450, 100);

	searchButton.mousePressed(display);



}


//callback function
function gotData(myData) {
	globalData = myData;
	for (i = 0; i<=5; i++){
		console.log(globalData.response.docs[i].headline.main);
	}

}

//repeating interval function
function loadNewData() {
	myData = loadJSON(url, gotData);
	// index++;
	// if(index >= 3){
	// 	index = 0;
	// }

}


function draw() {
	background(255);
	if(globalData){
		for (i = 0; i<=5; i++){
			text(globalData.response.docs[i].headline.main, 0, 50*i, 500, 500);
		}
	}
}


function display() {
	var searchRes = searchBox.value();

	url = urlBase + "?api-key=" + apiKey + "&q=" + searchRes;
	loadNewData();
}