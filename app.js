    // chapter 17 , 20



//Q1. Declare and initialize an empty multidimensional array (Array of arrays)

// var arr = [[2,4],[3,6],[7,8],[8,9],];

// console.log(arr)

//Q2. Declare and initialize a multidimensional array representing the following matrix:


// var arr = [
//     [0,1,2,3], 
//     [1,0,1,2], 
//     [2,1,0,1], 
// ]

// console.log(arr);


// Q3. Write a program to print numeric counting from 1 to 10.


// var a = 1 
// for(var a ; a <=10 ; a++){
//     console.log(a)
// }



//Q4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.




/* program to generate a multiplication table
upto a range */

// take number input from the user
//const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
//const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
//for(let i = 1; i <= range; i++) {
    //const result = i * number;
   // console.log(`${number} * ${i} = ${result}`);
//}

//Q5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]




// var furte = prompt(`Welcome To Karachi Bakery, What Do you Want To Ordr Sir/Mam`, `Cake`)


// var red = [ "apple" , "banana" , "mango" , "orange" , "strawberry"]

// var flag =true;

// for(i=0;i<=red.length;i++){
    
//   if(furte===red[i]){
//     flag= false;
//     var red2 = `${[red[i]]}  is Available at index ${[i]} in our Furte `;
//     document.write(`${red2}`)


//   }
// }
//   if(flag){ 
//       document.write(`We are sorry.${furte} is not available in our Furte `)
  
// }


// Q6 Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




// var arrAcounting = [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15]

// var arrAcount = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 
// var arrEven = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 
// var arrOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 
// var Series = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"]


// document.write(`Counting: </br> </br> ${arrAcounting} <br><br>`)
// document.write(`Reverse Counting: </br> </br> ${arrAcount} <br><br>`)
// document.write(`Even: </br> </br> ${arrEven} <br><br>`)
// document.write(`Odd </br> </br> ${arrOdd} <br><br>`)
// document.write(`Series </br> </br> ${Series} <br><br>`)



// Q7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var ja = ["cake", "apple pie", "cookie", "chips", "patties"]

// var code = prompt(`Welcome to Ali Bekery. What do yoy want to order sir/ma`)


//Q8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var A = [24, 53, 78, 91, 12] ;

// var largest = 0 ;
 
// for (i = 0 ; i <= largest ;i++){
//  if(A[i]> largest){
//    var largest = A[i]
//  }
// }
// document.write(`Arry Items: ${A} <br> The Largest Number ${largest}`)



// Q9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


// var B = [24, 53, 78, 91, 12] ;

// var smallest = 12 ;

// for (i = 12 ; i <= smallest ; i++){
//           if(B[i] > smallest){
//          var smallest = B[i]
//     }
//  }
// document.write(`Arry Items: ${B} <br> The Smallest Number ${smallest} `)






// Q10. Write a program to print multiples of 5 ranging 1 to
// 100.
// for(var i = 5 ; i<=100 ; i+=5){

//     document.write(` ${i}`)
// }



















//......................................................................................................................................................................................................................................................................................






// Chapters 21-25




// Q1.Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



// var userInput = prompt(`Enter Your First Name:`)

// var input = prompt(`Enter Your Last Name`)

// alert(`${userInput} ${input}`)  


// Q2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// var userI = prompt(`Enter Your Favorite Phone:`, `samsung galaxy  s6 edge plus`)

// document.write(`My Favorite Phone Is: ${userI} <br> Length Of String: ${userI.length}`)


// Q3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser


// var country = `Pakistani`

// var  city = country.indexOf(`n`)

// console.log(`String: ${country}
// Index of "n": ${city}`)
 

// Q4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.



// var gree = `Hello World`

// var find =  gree.lastIndexOf(`l`)

// console.log(`String: ${gree}
// Last Index Of "l" ${find}`)



// Q5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var country = "pakistani "

// var find  = country.charAt(3)

// console.log(`String: ${country}
// character at Index 3: ${find}`)


// Q6. Repeat Q1 using string concat() method.



// var firstN = `Muhammad`

// var lastN = `Aman`

// var fullName = firstN.concat(" "+lastN)

// console.log(`Your Full Name Is: ${fullName}`)



// Q7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.




// var pCity = "Hyderabad"

// var pCity1 = pCity.replace(`Islamabad`)

// console.log(`City: ${pCity}

// After Repl: ${pCity1}`)



// Q8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.



// var message = "Ali and Sami are best friends. They play cricket and football together "

// var nMessage = message.replace(/and/g , "&")


// console.log(`First Message:

// ${message}

// Message Change:


// ${nMessage}`)



// Q9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.




// var number = "472"

// var number1 = parseInt(number)

// console.log(`Value: ${number}`)
// console.log(`Value:`, typeof(number))
// console.log(`Value: ${number1}`)
// console.log(`Value:`, typeof(number1))


// Q10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var uInput = prompt(`Enter`)

// document.write(`User Input: ${uInput} <br> Upper Case: ${uInput.toUpperCase()}`)


// Q11. Write a program that takes user input. Convert and
// show the input in title case.



// var input = prompt(`Enter Input`)

// var firstN = input.slice( 0 , 1)

// var othersN = input.slice(1)

// var upper = firstN.toUpperCase()

// var nameF = upper + othersN

// var userInput = input.slice()

// document.write(`${userInput} <br> ${nameF} `)


// Q12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36 ;

// var num2 = num.toString().replace("." , "")

// console.log(`Number: ${num}

// Result: ${num2}`)



// Q13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var userName=prompt("Enter your Input: ");
// checkValidName(userName);
// function checkValidName(un)
// {
//     var message;
//     var split=[];
//     var arr=[];
//     for(var i=0;i<un.length;i++)
//     {
//         split[i]=un.split("&nbsp;");
//         arr[i]=un.charCodeAt(i);
//         if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//         {
//                 message="Welcome:\n";
//         }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//         {
//             alert("please enter a valid userName");                                                                                                                   
//             userName=prompt("Enter your Input: ");
//             split[i]=un.split("&nbsp;");
//             arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message ="Welcome:\n";
//                 break;
//             }
//         }

//     }
//     alert(`${message} ${userName}`);
// }





// Q14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:




// var bakery = prompt(`Welcome To Karachi Bakery, What Do you Want To Ordr Sir/Mam`, `Cake`)

// var arr = [`cake`, `applepie`, `cookie`, `chips`, `patties`]

// var flag =true;

// for(i=0;i<=arr.length;i++){

//   if(bakery===arr[i]){
//     flag= false;
//     var arr2 = `${[arr[i]]}  is Available at index ${[i]} in our Bakery `;
//     document.write(`${arr2}`)


//   }
// }
//   if(flag){ 
//       document.write(`We are sorry.${bakery} is not available in our Bakery `)
  
// }





// Q15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.








//Q16.Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University Of Karachi"

// var universityU = university.split(``);

// console.log(`${universityU}`)


// Q17. Write a program to display the last character of a user
// input.


    // var firstName = `Pakistan`

    // var lastName = firstName.charAt(7)

    // console.log(`User Input: ${firstName}

    // Last Character Of Input: ${lastName}`)



// Q18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var jump = `“The quick brown fox jumps over the lazy dog”.`

// var strin = jump.toLowerCase()

// var string = strin.split( 'the' ).length - 1 ;

// document.write(` ${jump} <br><br> There Are ${string} Occurrences of Word 'the' `)






