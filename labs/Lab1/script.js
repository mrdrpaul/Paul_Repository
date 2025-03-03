// 1. Dynamic Age Calculator
//     Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”
function task1(){
    age = prompt("How old are you");
    alert("Your age is: " + age);
}
// 2. Simple Interest Calculator
//     Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
//     Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
//     Log the result to the console: “Your simple interest is:”
function calculateSimpleInterest(){
    Principal = prompt("What is the Principle");
    Rate = prompt("What is the Rate");
    Time = prompt("What is the Time");
    Simple_Interest = (Principal * Rate * Time)/100
    alert("Your simple interest is: " + Simple_Interest)
}

// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
//     Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
//     Log the updated array to the console using: “Updated colors: “
function task3(){
    colors = ["blue","green","red"];
    addColor(colors)
}
function addColor(colorArray){
    newColor = prompt("Enter a color to add");
    colorArray.unshift(newColor);
    alert("Updated colors:" + colorArray)
}
// 4. Event Countdown with Date Object
//     Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
//     Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
//     Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.
function calculateDaysUntil(){
    enteredDate = new Date(prompt("Enter a date in the form YYYY-MM-DD"));
    currentDate = new Date();
    alert("Days until the event: " + Math.ceil((enteredDate-currentDate)/(1000*60*60*24)));
}
// 5. Temperature Classifier
//     Use a traditional function named classifyTemperature to classify a temperature.
//     Takes one argument - user input for temperature
//     Prompt the user to input the temperature in Celsius.
//     Convert into Farenheit using this formula
//     Fahrenheit = (C x (9/5)) + 32
//     Use conditionals to classify the temperature as:
//     "Hot," if over 100
//     "Warm," if over 80
//     "Cold” if under 40
//     “Chilly” for everything else
//     Error message if number not entered
//     Log the classification to the console using: “The temperature is: “
function task5(){
    userInput = prompt("What is the temperature in Celcius");
    if(isNaN(userInput)){
        alert("You must enter a number")
    } else {
        clasifyTemperature(userInput);
    }
}
function clasifyTemperature(celcius){
    farenheit = (celcius * (9/5)) + 32;
    let temperature;
    if(farenheit > 100){
        temperature = "Hot";
    }else if (farenheit > 80){
        temperature = "Warm";
    } else if (farenheit < 40){
        temperature = "Cold";
    }else{
        temperature = "Chilly";
    }
    alert("The temperateure is:" + temperature)
}
// 6. Student Array Operations
//     Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
//     Use a fat arrow function to modify a student's age in an array of student objects.
//     Prompt the user to input the name of the student to modify
//     If student does not exist, log an error message
//     Prompt the user to input a new age.
//     If not a number, log an error message
//     Update the student’s age in the array of objects.
//     Log the updated array to the console: “Updated students: ”
const task6 = ()=> {
     let students = [
         {name : "Alice", age : 20},
         {name : "Bob", age : 22},
         {name : "Charlie", age : 18}
     ];
     modifiedStudent=prompt("Which student to modify: Alice, Bob, Charlie?");
     flag = false;
     let studentIndex;
     for(let i=0;i<students.length;i++){
         if(modifiedStudent == students[i].name){
             flag = true;
             studentIndex = i;
             break;
         }
     }
     flag ? newAge = prompt("Enter new age") : alert("Student Not Found");
     isNaN(newAge) ? (alert("Need to Enter a Number"),flag = false): (students[studentIndex].age = newAge, flag = true);

    let allStudents = "";
    if(flag == true){
        for(let i=0;i<students.length;i++){
            allStudents = allStudents + (students[i].name + ", " + students[i].age) + "\n";
        }
        alert("Updated students: " + allStudents);
    }

}
// 7. Grade Classification
//     Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
//     ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “
const task7 = () => {
    grade = prompt("Enter a number");
    let gradeLetter;
    grade > 90 ? gradeLetter = "A" :
        grade > 80 ? gradeLetter = "B":
            grade > 70 ? gradeLetter = "C":
                grade > 60 ? gradeLetter = "D":
                    gradeLetter = "F";
            ;
        ;
    ;
    alert("The grade classification is: " + gradeLetter)
}

// 8. Shopping List Operations
//     Hardcode an array representing a shopping list of eggs, butter, and flour.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.
const task8 = () => {
    groceryList = ["eggs","butter","flour"];
    newItem = prompt("Enter item to be added");
    modifyItem(groceryList,newItem);
}

const modifyItem = (list,addedItem) =>{
    list[list.length] = addedItem;
    alert("Updated shopping list: " + list)
}
// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
const task9 = () =>{
    daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    today = new Date;
    alert("Today is: " + daysOfWeek[today.getDay()]);
}

// 10. How Long Until Graduation
//     Use a fat arrow function to determine today’s date.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
//     Display in this format: “2025, January 21st”
//     NOTE: use -st, -nd, -rd, -th based on the numerical date
//     22nd, 5th, 9th, 23rd, etc….
//     Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
//     Last day is 5/17/25
//     Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.
const task10 = () => {
    MonthsOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    today = new Date;
    todayNumber = today.getDay();
    let letters;
    if(todayNumber == 1 || todayNumber == 21 || todayNumber == 31){
        letters = "st";
    }else if (todayNumber == 2 || todayNumber == 22){
        letters = "nd";
    }else if(todayNumber == 3 || todayNumber == 23){
        letters = "rd";
    }else{
        letters = "th";
    }
    graduationDay = new Date('2025-05-17')
    alert("Today is: " + today.getFullYear() + ", " + MonthsOfYear[today.getMonth()] + " " + today.getDate() + letters + "\nAnd you have " +Math.ceil((graduationDay-today)/(1000*60*60*24)) + " left until graduation");
}