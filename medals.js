svg = document.getElementById("svgfield");
switch_b = document.getElementById("switch");

var country = "china";
var china_medals = [1, 6, 2];
var norway_medals = [14, 14, 11];

var makeCircles = function() {
    for (var i = 0; i < 3; i++) {
	var circle = 
