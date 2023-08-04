// Define 3 variable that keep the first, second and third number of the array adn set them 0
// Creat a loop for the number of your array
// If the item that we've grabed from array is greater than first number, set the thir number to secon number, second number to the first number and that number we have to first array
// If number is greater than secon number, set the third number to the second number and second number to the item we have
// If number is greater than third number than equal it to third number
// Return the third number


const arr =  [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
function thirdHighest(arr){
    let first = 0;
    let second = 0;
    let third = 0;
    for(let i =0; i<arr.length ; i++){
        if(arr[i]>first){
            third = second;
            second = first;
            first = arr[i];
        } else if( arr[i] > second){
            third  = second;
            second = arr[i]
        } else if( arr[i]> third)
            third = arr[i];
    
    }
    return third
}

console.log(thirdHighest(arr));
