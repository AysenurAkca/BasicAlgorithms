//1. Print 1 - 135

//Print all number firstElement = 0 lastElement = 135
//For loop
//log the result to the console

// for(let i=1 ;i<=135;i++){
//     console.log(i);
// }

//2. Print Odd Numbers 1 - 135

//Print odd number firstElement = 1 lastElement = 135
//For loop
//log the result to the console

// for(let i=1;i<=135;i+=2){
//     console.log(i);
// }

// 3. Sum of Printed Numbers

//Define a total variable
//For loop from 0 to 135
//Add the variable of the loop to the total variable
//log the result to the console

// let total = 0;
// for(let i=0; i<135; i++){
//     total += i;
//     console.log(`Number is: ${i} Sum: ${total}`);
// }

//4. Print the elements of an array

//For of loop
//log the result to the console

// const nums = [1,4,2,12];
// for(let num of nums){
//     console.log(num);
// }

//5. Find Max

// Use Math.max
// In order to pass in the array to the max method, use rest
//log the result to the console

// const nums = [1,4,2,12,-5];
// console.log(Math.max(...nums));

// 6. Get Average

//Define a total variable
//For loop until the the length of the array
//Add the number on that index to the total variable
//log the result to the console

// const nums = [1,4,2,12,18,5];
// total = 0;
// for(let i=0; i<nums.length; i++){
//     total += nums[i];
// }
// console.log(`Your array's average is ${total/nums.length}`);

//7. Eliminate the Negatives

//For loop until the the length of the array
//If item of the array is less than 0, remove it
//Log the left numbers to the console

// const nums = [1,-4,2,12,-18,5];
// for(let i = 0; i<nums.length ; i++){
//     if(nums[i]<0){
//         nums.splice(i,1,0)
//     }
// }
// console.log(nums);

//8. Number to String

//For loop until the the length of the array
//If item of the array is less than 0, remove it and add a string
//Log the new array to the console

// const nums = [1,-4,2,12,-18,5];
// for(let i = 0; i<nums.length ; i++){
//     if(nums[i]<0){
//         nums.splice(i,1,"I'm string")
//     }
// }
// console.log(nums);
