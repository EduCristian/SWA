function sliderChange(val)
{
	document.getElementById('sliderStatus').innerHTML = val;
}

function saddleFilter() 
{
	var input, filter, unorderedList, li, a, i;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	unorderedList = document.getElementById("unorderList");
	li = unorderedList.getElementsByTagName("li");
	for (i = 0; i < li.length; i++)
	{
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
		{
			li[i].style.display = "";
		} else 
		{
			li[i].style.display = "none";
		}
	}
}


function saddle(name, price, size, colour) 
{
	this.name = name;
	this.price = price;
	this.size = size;
	this.colour = colour;
}

var saddle1 = new saddle("Leather saddle", 50, "medium", "blue");
var saddle2 = new saddle("Custom saddle", 70, "medium", "green");
var saddle3 = new saddle("Racing saddle", 100, "large", "black");
var saddle4 = new saddle("City saddle", 80, "small", "red");
var saddle5 = new saddle("Brooks saddle", 60, "large", "brown");
var saddle6 = new saddle("Suede saddle", 90, "medium", "black");
var saddle7 = new saddle("Biker saddle", 30, "medium", "navy");
var saddle8 = new saddle("Children saddle", 40, "small", "green");

var saddleList =
[
	saddle1, saddle2, saddle3, saddle4, saddle5, saddle6, saddle7, saddle8
];

function printArr(a)
{
	for(var i = 0; i <= a.length-1; i++)
	{
		console.log(a[i])
	}
}
function filterByPrice(item)
{
	if(item.price >= 80){return true;}
	return false;
}

function filteredList(list)
{
	saddleList = list.filter(filterByPrice);
}

saddleFilter();