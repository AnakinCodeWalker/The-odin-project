const inputSlider =document.querySelector("[data-lengthSlider]");
const lengthDisplay =document.querySelector("[data-lengthNumber]");

const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn =document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowecaseCheck =document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generatebtn");

//selects all the checkboxes at once.
const allCheckBox=document.querySelectorAll("input [type=checkbox]");

//inital values when the pages loades 
let password="";
let passwordLength=10;
let checkCount =1;
const arr= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "?"];



/*
understanding the flow of the program..functions 
1 copyContent
2. handleSlider -->password length
3. genratePassword
4. setIndicator -->changes color 
5. getrandomInteger(min,max)//main core of this code 
6. getrandomNumber()
7. getrandomUpperCase()
8. getrandomLowerCase()
9. getrandomSymbol()
9  calcStrength()

*/
//creating functions 

handleSlider();
//set password length.

function handleSlider(){

inputSlider.value=passwordLength;//intially slider ki value 10 hogi
lengthDisplay.innerText=passwordLength;//number which is displaying the will also be 10

} 


//color setting of the strength and shadow 
function setIndicator(color){
indicator.style.backgroundcolor=color;

}

//setting up for the range of the slider.
function getRandomInteger(max,min){
return Math.floor(Math.random()*(max-min))+min;
}

//setting up the password part of the number [only a signle number so range is 0-9 ] 
function getRandomNumber(){
    return getRandomInteger(0,9);//this will provide a random integer in 1 digit 
}

//setting up the password part of the lowercase character
function getLowerCase(){
 return String.fromCharCode(getRandomInteger(97,123)) ;//passing the ascii value of the lowercase character
//this convert the number given into a upperCase letter
}

//setting up the password part of the number 
function getUpperCase(){
return String.fromCharCode(getRandomInteger(65,91));//passing ascii of uppercase letter.
//this convert the number given into a upperCase letter
}

//now generating the symbol ..
function generateSymbol(){
//genrate the symbol ,create an array genrate a random index and then choose one and return

const index =getRandomInteger(0,arr.length-1);
return arr[index];
}

