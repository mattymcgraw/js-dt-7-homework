var startupX = ['Uber', 'Snap Chat', 'Optimizely', 'Credit Karma', 'Udemy', 'Neighbor.ly', 'TotSpot', 'Blueboard', 'Eko', 'Contently', 'HappyCo', 'Gyft'];
var startupY = ['KartRocket', '9GAG', 'MisterBnB', 'StackSocial', '99Gamers', 'Woof', 'All Trails', 'Pantry', 'Wanderu', 'Simple', 'MeUndies', 'Behance'];
var startupConcept;
var favoriteSU = [];

createStartup()

document.getElementById('create').onclick = createStartup;
document.getElementById('save').onclick = save;
document.getElementById('print').onclick = print;

function createStartup(){
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));
	startupIdea = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	document.getElementById('XforY').innerHTML = startupIdea;
}
function save(){
	favoriteSU.push(startupIdea);
	console.log(favoriteSU);
}
function print(){
	document.getElementById('favoriteSU').innerHTML = '';
	var numberList = 0;
	for(i=0;i<favoriteSU.length;i++){
		numberList++;
		document.getElementById('favoriteSU').innerHTML += numberList + '. ' + favoriteSU[i] + '<br />';
	}
}