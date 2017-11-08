var unorderList = document.getElementById('unorderList');

var numbers = [];
var halvedNumbers = [];

function getNumbers(array) {
    var number = '';
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].textContent.length; j++){
            if(  array[i].textContent.charAt(j) >= '0' && array[i].textContent.charAt(j) <= '9'){
                number += array[i].textContent.charAt(j);
            }
        }

        numbers.push(parseInt(number));
        number = '';
    }
    return numbers;
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
                console.log(oldArray[i].textContent.slice(0, j));
                console.log(oldArray[i].textContent.slice(j + 5));
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

var shopItem.Prototype = {
    name
}