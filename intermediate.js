// 1. Addition

// Define an empty array
// Create a foor loop from 200 to 2700
// If number can be divided by 3 or 5 and also caan't be diveded 15 then push it array
// Log the array

// const nums = [];
// for(let i =200; i<=2700; i++){
//     if((i%3 === 0 || i%5===0) && (i%15 !==0)){
//         nums.push(i)
//     }
// }
// console.log(nums);


// 2. Shift the Values

// Define an empty array (nums2)
// Define a variable (x)
// Put the value of the length of the array to a variable
// Create a for loop from 0 to x
// In the loop, grab the first item of num array by useing shift()
// And put it in the array nums2 
// In order to start at the end of the array nums2  use (x-1) 
// Log the new array to the console

// const nums = [1,2,3,4,5,87,85,74,12] ;
// const nums2=[]
// let x = nums.length ;
// for(let i = 0 ; i< x ; i++){
//     nums2[(x-1)-i] = nums.shift()    
// }
// console.log(nums2);


// 3. FizzBuzz
// Create an empty array 
// Loop from 1 to 135
// If number is divided by 3 and 5 then push the word FizzBuzz to the array
// If number is divided by 5 then push the word Buzz to the array
// If number is divided by 3 then push the word Fizz to the array
// If none all of them push the number
// Log the array to the console


// const nums = [];
// for(let i =1 ; i< 135 ; i++){
//     if(i%3===0 && i%5===0){
//         nums.push("FizzBuzz")
//     } else if(i%5===0){
//         nums.push("Buzz")
//     } else if (i%3===0){
//         nums.push("Fizz")
//     } else {
//         nums.push(i)
//     }
// }
// console.log(nums);


//4. Fibonacci

// Create an empty array
// Create 3 variables, one of them is 1(also for while loop), one is 1 and the other one is undefined
// Create while loop that lasts until 1000000
// Push the first variable to the array
// Add your varible and put third variable
// Set the first variable to second one
// Set your second variable to the variable which equals to total
// Log the final array to the console

// const nums = [];
// let x = 1, y=1, xy;
// while(x<1000000){
//     nums.push(x);
//     xy = x+y ;
//     x=y;
//     y=xy;
// }
// console.log(nums);


//5. Remove the Negative

// Create a for loop from 0 to the length of the array
// If current item less than 0 remove it and decrease the variable of the loop
// Lof the final array to the console

// const nums = [1,-2,-3,4,-5,6];
// for(let i=0;i<nums.length;i++){
//     if(nums[i]<0){
//         nums.splice(i,1);
//         i--;
//     }
// }
// console.log(nums);

// 6.Communist Censorship

// Create a function that has 2 parameters
// put the value which the user wants to reach to a variable
// Look how many letter that value has
// reassign your variable that much times
// return the new value

// const x = ['Man', 'I','Love','The','Matrix','Program'];

// function makeStars (arr, index){
//     let current = arr[index];
//     current = "*".repeat(current.length)
//     return current
// }

// console.log(makeStars(x,4));