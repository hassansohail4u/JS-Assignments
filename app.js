// Chapter 1

// alert("Error! Please enter a valid password")
// alert("Welcome to JS...")
// alert("Happy Coding!\nPrevent this page from creating additional dialogs")
// console.log(alert("Hello... I can run JS through my web browser`s console"))















// Chapter 2

// var username = "Hassan Sohail"
// alert(username)

// var fullname = "Hassan Sohail"
// alert(fullname)

// var massage = "Hello World"
// alert(massage)


// var username = prompt("Enter your Name")
// var age = prompt("Enter your Age")
// var certified = prompt("Enter your Certified")


// alert(username)
// alert("I am "  + age  +" years old")
// alert(certified)

// var Dish = " PIZZA \n PIZZ \n PIZ \n PI \n P"

// alert(Dish)

// var email = "My email address is" +" "+"example@example.com"
// alert(email)

// var bookName = "I am trying to learn from the book A smarter\nway to learn JavaScript "
// alert(bookName)

// var displayMassage = document.querySelector("#display-massage")
// displayMassage.innerHTML = "Yah! I can write HTML content through JavaScript"

// 1 question remaining

















// Chapter 3

// var age = prompt("Enter your Age")

// alert("I am "  + age  +" years old")

// var visitorVisit = "You Have Visit this Website 14 times"
// alert(visitorVisit)


// var birthdate = document.querySelector("#birth-date")
// var dataType = document.querySelector("#data-type")
// var birthDate = "My Birth year is " +prompt("Enter Your Birth Date")
// birthdate.innerHTML = birthDate
// dataType.innerHTML = "Data Type of my declared variable is Number"


// var brandName = "hassanclothing@gmail.com"
// var visitorName = prompt("Enter Your Name")
// var product = prompt("Enter The Product Name")
// var quantity = prompt("Enter the Quantity")

// var brand = document.querySelector("#brand")

// var fullUserInfo = visitorName + " Ordered " +" "+ quantity +" " +product + " On " + brandName
// brand.innerHTML = fullUserInfo














// Chapter 4









// variable ko ap dollar aur underscore ki sign sa name da sakta ho

// 3 variables ho aur one statement ho
// aik var ma hum comma dal kar aur var bhi bana sakta hai aur Var likhna ki zarorat bhi nahi
// var myBikeName = "Suzuki 150", myCarName = "Ferrari" , myNameIs = "Hassan Sohail Duroodwala";
// console.log(myBikeName , myCarName , myNameIs)



// 5 Legal Variables

// var $username = "My name is Hassan"
// var _userAge = "I am 15 Years old"
// var myVar = "This is my Variable"
// var myAlert = "This is my Alert"
// var myConsole = "This is my Console"


// 5 Illegal Variables

// var !myExclamationMark = "This is my Exclamation Mark"
// var ?questionMark = "This is my Question Mark"
// var 123myNumber = "This is my Numbers"
// var var = "This is my Var"
// var my space = "Variable cannot contain space"



// var blankOne = document.querySelector("#blank-one")
// var blankTwo = document.querySelector("#blank-two")
// var blankThree = document.querySelector("#blank-three")
// var blankFour = document.querySelector("#blank-four")
// var blankFive = document.querySelector("#blank-five")

// blankOne.innerHTML = "A heading stating 'Rules for naming JS Variables'"
// blankTwo.innerHTML = "Variables name can only contain Letter, Numbers, Dollar sign and Underscores For example : $my_1stVariable."
// blankThree.innerHTML = "Variable must begin with a Letter, Dollar sign or Underscores. For example : name, $name or _name"
// blankFour.innerHTML = "Variable names are case Sensitive"
// blankFive.innerHTML = "Variable names should not be JS Keywords"


// Chapter 5

// Plus

// var result = document.querySelector("#result")
// var num1 = prompt("Enter Number One")
// var num2 = prompt("Enter Number Two")

// var sum = +num1 + +num2
// result.innerHTML = "Sum of " + num1 + " + " + num2 + " is " + sum

// Minas

// var result = document.querySelector("#result")
// var num1 = prompt("Enter Number One")
// var num2 = prompt("Enter Number Two")

// var sum = +num1 - +num2
// result.innerHTML = "Sum of " + num1 + " - " + num2 + " is " + sum

// multiple

// var result = document.querySelector("#result")
// var num1 = prompt("Enter Number One")
// var num2 = prompt("Enter Number Two")

// var sum = +num1 * +num2
// result.innerHTML = "Sum of " + num1 + " x " + num2 + " is " + sum

// divide

// var result = document.querySelector("#result")
// var num1 = prompt("Enter Number One")
// var num2 = prompt("Enter Number Two")

// var sum = +num1 / +num2
// result.innerHTML = "Sum of " + num1 + " / " + num2 + " is " + sum

var afterDeclarationhtml = document.querySelector("#after-declaration-html");
var afterDeclaration = 
afterDeclarationhtml.innerHTML = "Value after value declaration is " + afterDeclaration;

var initialValuehtml = document.querySelector("#initial-value-html");
var initialValue = 5;
initialValuehtml.innerHTML = "Initial Value : " + initialValue++ 

var afterIncrementhtml = document.querySelector("#after-increment-html")
var afterIncrement = initialValue
afterIncrementhtml.innerHTML = "Value after increment is : " + afterIncrement 
