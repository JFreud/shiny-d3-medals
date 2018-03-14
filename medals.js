svg = document.getElementById("svgfield");
switch_b = document.getElementById("switch");

var country = "china";
var china_medals = [1, 6, 2];
var norway_medals = [14, 14, 11];

var makeCircles = function() {
    if (country == "china") {
	var medals = d3.selectAll('circle').data(china_medals);
	medals.attr('r', function(d){return d*5});
	country = "norway";
    }
    else{
	var medals = d3.selectAll('circle').data(norway_medals);
	medals.attr('r', function(d){return d*5});
	country = "china";
    }
}

var initial_circle = function(color, cx){
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('r', '50');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', '250');
    c.setAttribute('fill', color);
    svg.appendChild(c);
}

initial_circle('yellow', '100');
initial_circle('grey', '250');
initial_circle('brown', '400');

switch_b.addEventListener('click', makeCircles);
