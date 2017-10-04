function sliderChange(val)
{
	document.getElementById('sliderStatus').innerHTML = val;
	filterSaddle(val)
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

saddleFilter();