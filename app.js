/*----------------------------------CHAPTER 21-25--------------------------------------------*/
/*----------------------------------TASK 1--------------------------------------------*/
// var a=prompt("Enter Your First Name");
// var b=prompt("Enter Your Last  Name");
// var  fullName=a+b;
// document.write(fullName)

/*----------------------------------TASK 2--------------------------------------------*/
//  var A = prompt("Enter Favourite mobile model name");
//  var charsInA = A.length;
//  document.write("My Favourite Phone Is:" + A +"<br>");
//  document.write("Lenght Of String Is:"+ charsInA +"<br>");
/*----------------------------------TASK 3--------------------------------------------*/
// var text="Pakistani ";
// var firstChar = text.indexOf("n");
// document.write("String:" + text +"<br>");
// document.write("Lenght of 'n':" + firstChar +"<br>");
/*----------------------------------TASK 4--------------------------------------------*/
// var text="Hello World ";
// var firstChar = text.lastIndexOf("l");
// document.write("String:" + text +"<br>");
// document.write("Last Index of 'l':" + firstChar +"<br>");
/*----------------------------------TASK 5--------------------------------------------*/
// var text="Pakistani";
// var b=(text.charAt(3))
// document.write("String:" + text +"<br>");
//  document.write("Character at index 3 is:" + b +"<br>");
/*----------------------------------TASK 6--------------------------------------------*/
/*----------------------------------TASK 7-------------------------------------------*/
// var text="Hyderabad";
//  for (var i = 0; i < text.length; i++) {
//  if (text.slice(i, i + 5) === "Hyder") {
//  b = text.slice(0, i) + "Islam" + text.slice(i + 5);
//  document.write("City:" +text+ "<br>");
//  document.write("After Replacement:" +b+ "<br>");
//  }
//  }
    


/*----------------------------------TASK 8--------------------------------------------*/

var text=("Ali & Sami are best friends. They play cricket & football together.")    ;
 for (var i = 0; i < text.length; i++) {
 if (text.slice(i, i + 3) === "&") {
 b = text.slice(0, i) + "and" + text.slice(i + 3);
 console.log("City:" +text+ "<br>");
 console.log("After Replacement:" +b+ "<br>");
 }
 }
    




/*----------------------------------TASK 9-------------------------------------------*/
//  var a ="456";
// console.log(a)
// a.toString()
// console.log(a)

/*----------------------------------TASK 10--------------------------------------------*/
// var a=prompt("Enter Dry Fruit");
// var firstChar=a.slice(0);
// firstChar =firstChar.toUpperCase();
// document.write("User Input:"+" " +a+ "<br>");
// document.write("Upper Case:"+" " +firstChar+ "<br>");



/*----------------------------------TASK 11--------------------------------------------*/
// var city=prompt('Enter your subject name');
// var firstchar=city.slice(0,1);
// firstchar=firstchar.toUpperCase()
// var otherChar=city.slice(1)
// firstchar=firstchar.toUpperCase()
//  var otherChar=otherChar.toLowerCase()
// var city=firstchar+otherChar;
// alert(city);

/*----------------------------------TASK 12-------------------------------------------*/


// var  num = 35.36;
// var  without = num.toString().replace(".", "");
// console.log("without");
/*----------------------------------TASK 13--------------------------------------------*/
/*----------------------------------TASK 14--------------------------------------------*/
// var item=["cake", "apple pie", "cookie", "chips", "patties"];
// var search =prompt("enter youer cookie")
// if (item.indexOf(search) !==-1){
//     alert("yes" + search + "is available")
// }
// else{
//     alert("not" + search + "is available")
//}

/*----------------------------------TASK 15-------------------------------------------*/
// var a=prompt("Enter a password");
// if(a===(/[A-Z]/)){
//     console.log(ok);
// }
// else if(a===(/[a-z]/))
// {
//     console.log(notok);


// /*----------------------------------TASK 16--------------------------------------------*/
// var str="University of Karachi";
// //var b=a.split("<br>");
// document.write(str.split("<hr>"));
/*----------------------------------TASK 17-------------------------------------------*/
//  var text = "Pakistan";
//  var segIndex = text.lastIndexOf("n");
//  console.log(segIndex)
/*----------------------------------TASK 18------------------------------------------*/
// var word="The quick brown fox jumps over the lazy Dog";
// var equal ="The";
// count=0;
// for(var i=0;i<word.length; i++)
// if(word===equal)
// {
//     count++;
// }
// {
//     console.log(count);
// }

/*----------------------------------CHAPTER 26-30--------------------------------------------*/
/*----------------------------------TASK 1------------------------------------------*/
// var a= prompt("Enter an integer number");
// /*----------------------------------TASK 1--Part A----------------------------------------*/
// document.write("Number:"+" " +a+ "<br>");
/*----------------------------------TASK 1--Part C----------------------------------------*/
// var round=Math.floor(a)
//document.write("Floor value:"+" " +a+ "<br>");
/*----------------------------------TASK 1--Part D----------------------------------------*/

// var round=Math.ceil(a)
// console.log(round)
//document.write("ceil value:"+" " +a+ "<br>");


/*----------------------------------TASK 2------------------------------------------*/
// var a= prompt("Enter a negative integer number");
// document.write("Number:"+" " +a+ "<br>");
// var round=Math.floor(a)
// document.write("Floor value:"+" " +a+ "<br>");
/*----------------------------------TASK 3------------------------------------------*/
// function absvalue(number){
//     if(number<0){
//         return -number
//     }
//     else{
//         return number
//     }
// }
// console.log(absvalue(-4))
/*----------------------------------TASK 4------------------------------------------*/
// var headsuser=prompt("Enter value of dice");
// var tailsuser=prompt("Enter another value of dice");
//     alert("Random Dice Value"+headsuser);
//     alert("Random Dice Value" + tailsuser);



/*----------------------------------TASK 5------------------------------------------*/
// var headsuser=prompt("Enter head user name");
// var tailsuser=prompt("Enter  tail user name");
// var toss = Math.random()*2;
// var floor = Math.floor(toss);
// if(floor===0){
//     console.log("heads"+headsuser+"win the toss")
// }
// else{
//     console.log("Tails" + tailsuser +"win the toss")
//}


/*----------------------------------TASK 6------------------------------------------*/

// var a= Math.floor(Math.random() * 100) + 1;
// console.log(a);
/*----------------------------------TASK 7------------------------------------------*/
// var a =prompt("Enter your weight");
// document.write("The Weight Of User Is:"+ a+ "<br>")
/*----------------------------------TASK 8-----------------------------------------*/
// var a=prompt("Enter a number between 1 to 10");
// for( var i=1;i<=10;i++)
// if(a===5){
//     // alert("congratulations Dear")
//     console.log("congratulation")

// }



// else if(a[i]!=5){
//     alert("Try Again")
//     break;
// }

// var city =prompt("Enter your city name");
// var arr=["karachi","islamabad","lahore"];
// for( var i=0; i<arr.length;i++)
// if(arr[i]===city)
// {
//     alert("city has found")
//     break;
// }
// else if(arr[i]!=city){
//     alert("city not found")
//     break;
// }

/*----------------------------------CHAPTER 31 to 34-------------------------------------------*/
/*----------------------------------TASK 1--------------------------------------------*/
// var a =new Date();
// a.setSeconds(60);
// document.write(a)
/*----------------------------------TASK 2--------------------------------------------*/
// var d = new Date();
//   var f=d.getMonth();
//  document.write("Current Month is:" +" "+f)
 
/*----------------------------------TASK 3--------------------------------------------*/

// var d = new Date();
// var n = d.getDay();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[n] + ".");


/*----------------------------------TASK 4--------------------------------------------*/

/*----------------------------------TASK 5--------------------------------------------*/
// var d = new Date();
// if(d<=15){
//     alert("First fifteen days of the month");
// }
// else if(d>=15)
// {
//     alert("Last days of the month")
// }
/*----------------------------------TASK 6--------------------------------------------*/


// var dob= new Date("Jan. 1, 1970 ")
// var dobmili =dob.getTime();
// var today =new Date();
// document.write("Elapsed milliseconds"+ " "+dobmili+" "+"from" +dob+"<br>");
// var dobminutes =dob.getMinutes();
// var today =new Date();
// document.write("Elapsed milliminutes"+ " "+dobminutes+" "+"from" +dob +"<br>");







/*----------------------------------TASK 7--------------------------------------------*/
// var a=prompt("Enter Time");

// if(a<="12AM"){
//     alert("Its AM")
// }
// else (a>="12pm")
// {
//     alert("Its PM")
// }
/*----------------------------------TASK 8--------------------------------------------*/
/*----------------------------------TASK 9--------------------------------------------*/
/*----------------------------------TASK 10--------------------------------------------*/
/*----------------------------------TASK 11--------------------------------------------*/
/*----------------------------------TASK 12--------------------------------------------*/
/*----------------------------------TASK 13--------------------------------------------*/
// var dob =new Date(prompt("enter your date of birth"))
// var dobmili=dob.getTime();
// var today=new Date();
// var todarmili=today.getTime()
// var diff =todarmili-dobmili;
// var accuage=diff/(1000*60*60*24*30*12)
// document.write("Your Age Is:"+ " "+accuage+"<br>");
// document.write("Your Birth Year Is:"+ " "+dob +"<br>");

/*----------------------------------TASK 14--------------------------------------------*/
// var a=prompt("Enter your Name");
// var b=prompt("Enter Current Month");
// var c=prompt("Enter  Number Of units");
// var d=prompt("Enter Charges Per Unit");
// document.write("Customer Name Is:"+ " "+a+"<br>");
// document.write("Month:"+ " "+b+"<br>");
// document.write("Number of units Is:"+ " "+c+"<br>");
// document.write("Charges Per Unit Is:"+ " "+d+"<br>");
// "<br>"
// var e=c*d;
// document.write("Net Amount Payable (within Due Date):"+ " "+e+"<br>");
// document.write("late Payment Charges:"+ " "+350+"<br>");
//  var f=e+350;
// document.write("Gross Amount Payable (after Due Date):"+ " "+f+"<br>");


/*----------------------------------CHAPTER 35 to 38-------------------------------------------*/

/*----------------------------------TASK 1--------------------------------------------*/
// var a =new Date();
// document.write(a)
/*------------------------------------TASK 2-----------------------------------------------------*/

/*------------------------------------TASK 3-----------------------------------------------------*/
//  function sum (x,y)
//      {
//           num1=parseInt(x);
//     	num2=parseInt(y);
//         return (num1+num2);
//     }
//      var input1 = window.prompt("Enter a number: ", 0);
//      var input2 = window.prompt("Enter another number: ", 0);
//       var sum = sum(input1 + input2);
//      document.writeln("<h1> First number: " + input1 + "</h1>");
//      document.writeln("<h1> Second number: " + input2 + "</h1>");
//      document.writeln("<h1> Sum: " + sum + "</h1>");



/*------------------------------------TASK 4-----------------------------------------------------*/
// var num1 =prompt("enter your first number");
// var num2 =prompt("enter your second number");
// var op=prompt("enter operator from +- /*");
// function add (a,b)
// {

// var result =parseInt(a)+ parseInt(b);
// document.write("Addition result is:" + result);
// }

// function subtract (a,b)
// {
//     var result= a-b;

// document.write("Subtraction result is:" + result);
// }
// function Multiply (a,b)
// {
//     var result=a*b;

// document.write("multilication result is:" + result);
// }
// function divide (a,b)
// {
//     var result=a/b;

// document.write("division result is:" + result);

// }
// if(op =="+")
// {
//     add(num1,num2);
// }


//  else if(op =="-")
// {
//     subtract(num1,num2);
// }
//  else if(op =="*")
// {
// Multiply(num1,num2);
// }
// else if(op =="/")
// {
//     divide(num1,num2);
// }
// else
// {
//     alert("invalid operator");
// }




/*-------------------------------------------task 5--------------------------------*/
// var num=prompt("Enter any number");
// function square(x)
// {
//     var result =x*x;
//     alert("Square of your number is:" +result)
// }
// square(num);
/*----------------------------------------TASK 6----------------------------------------------*/
// var userInput;
// var num;
// var i =1;
// var fact;

// function myFactor (num){    
//   fact = num * i;
//   for (i; i < num; i++) {
//     fact = fact * i;
//   }
//   return fact
// }

// var result;
// userInput = prompt("Enter Value:","");  
// num = parseInt (userInput);         
// result = myFactor(num);
// document.write(result);
/*-----------------------------------TASK 11-----------------------------------------------*/
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("'the quick brown fox' "));
/*----------------------------------TASK 12--------------------------------------------*/
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o'));


