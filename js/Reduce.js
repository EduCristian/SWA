var unorderList = document.getElementById('unorderList');

console.log(unorderList);

function getNumbers(array){
    var numbers = [];
    var number = '';
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].textContent.length; j++){
            if(  array[i].textContent.charAt(j) == '0' || array[i].textContent.charAt(j) == '1' 
              || array[i].textContent.charAt(j) == '2' || array[i].textContent.charAt(j) == '3'
              || array[i].textContent.charAt(j) == '4' || array[i].textContent.charAt(j) == '5'
              || array[i].textContent.charAt(j) == '6' || array[i].textContent.charAt(j) == '7'
              || array[i].textContent.charAt(j) == '8' || array[i].textContent.charAt(j) == '9'){
                    number += array[i].textContent.charAt(j);    
            }
        }
            
        numbers.push(parseInt(number));
        number = '';
    }
    return numbers;
}

function average(numberArray){
    var avg = 0;
    
  
    avg = numberArray.reduce(function (sum, number) {
  return sum + number;
}, 0) / numberArray.length;
return avg;
}


document.getElementById('averageP').innerHTML = average(getNumbers(unorderList.children));
