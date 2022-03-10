1. Check if the given string is a palindrome. E.g. “aabbaa” is a palindrome.

function palindrome(str) {

    str = str.toLowerCase().replace(/\s/g,'');
    let answer = true;
    let s = Math.floor(str.length/2);
   
     
    for(let i = 0; i < s; i++){   
        if(str[i] !== str[str.length - i - 1]){
            answer = false;
            break;
        }
    }
        return answer;   
}

2. Find the sum of min and max elements in the array.

 1-st option

function sumMaxMin(arr){
   
    let max = 0;
    for (let i = 0; i < arr.length; i++){
      let flag = true;
      for(let j = 1; j < (arr.length - 2); j++){
          if (arr[i] < arr[i + j]){
              flag = false;
              break;
          }
      }
     if ( flag === true){max = max + arr[i]; break}
    }
    
    let min = 0;
    for (let i = 0; i < arr.length; i++){
      let flag = true;
      for(let j = 1; j < (arr.length - 2); j++){
          if (arr[i] > arr[i + j]){
              flag = false;
              break;
          }
      }
     if ( flag === true){min = min + arr[i]; break}
   }

    console.log(max + min)
    
}

 2-nd option

function sumMinMax(arr){
    let max = Math.max.apply(Math, arr);
    let min = Math.min.apply(Math, arr);
    return (min + max)
}

3. For the given N create an array with length of N where all elements are unique.

let arr = [];
let n = 14;
 
for(let x = 2; x >= 2; x++){
    let flag = true;
 for (let i = 2; i < x; i++) {
	if (x % i == 0) {
		flag = false;
		break; 
	}    
  }
    if( flag === true) {arr.push(x)} 
    if (arr.length >= n){break}
}
console.log(arr)

4. Create a function which will convert the given snake_case_string into a CamelCaseString.





