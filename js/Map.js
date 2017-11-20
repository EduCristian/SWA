var unorderList = document.getElementById('unorderList');

var numbers = [];
var halvedNumbers = [];
var intNumber = 0;


function getNumbers(HTMLcollection) 
{
    console.log("Value: " + HTMLcollection[0].textContent)
    var CollectiontoArray = Array.from(HTMLcollection)
    alert(typeof CollectiontoArray[0].toString())
 
    numbers = CollectiontoArray.map(function(element){
        var number = '';
        var content = element.textContent
        for (var j = 0; j < content.length; j++)
        {
            if(content[j] >= '0' && content[j] <= '9')
            {
                number += content[j];
            }
        }
        
        console.log("Number: " + number);
        intNumber = parseInt(number);
        
        return intNumber;
    })
}


function getHalvedNumbers(numberArray){
    halvedNumbers = numbers.map(function(num){return num / 2;})
}


function replaceWithNewNumbers(oldArray){

    var newArray = [];
    var dotsPosition = 0;

    for(var i = 0; i < oldArray.length; i++)
    {
        for(var j = 0; j < oldArray[0].textContent.length; j++){
            if(oldArray[i].textContent.charAt(j) == ':'){
                j++;
                newArray[i] = oldArray[i].textContent.slice(0, j) + " " + halvedNumbers[i] + oldArray[i].textContent.slice(j + 5);
            }
        }
    }
    return newArray;
}


function salesOf()
{
    getNumbers(unorderList.children);
    getHalvedNumbers(numbers);
    var newList = replaceWithNewNumbers(unorderList.children);

    x = document.getElementById("saleP");
    x.innerHTML = newList;
}

salesOf();