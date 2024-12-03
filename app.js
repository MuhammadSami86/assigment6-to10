//question 1

var a = 10;
var b = ++a 
console.log("Now the value of a is"+b);

var c = ++b
console.log("Now the value of a is"+c);

var d = --c
console.log("Now the value of a is"+d);

var e =--d
console.log("Now the value of a is"+e);

//question2 

var a = 2, 
b = 1;
var result = --a - --b + ++b + b--;

console.log();

console.log(result);


//question 4
var userNum = prompt("enter your number")
for(var i = 0 ; i<=10;i++){
         
    console.log("table is" + userNum + "x" + i + "=" +i*userNum);
}

//question6
function totalNum(){
var firstSubject = "english"
var secondSubject = "urdu"
var thirdSubject = "math"
var totalMark = 100;
var firstSubjectNum  = parseInt(prompt("enter your firstnum"))
var secondSubjectNum =parseInt(prompt("enter your secondnum"))
var thirdSubjectNum  = parseInt(prompt("enter your thirdnum"))

var total = firstSubjectNum+secondSubjectNum+thirdSubjectNum
console.log(total);
var percentage = Math.round(total/300*100)
console.log(percentage + "%");

if(percentage >=40 && percentage<=50){
    console.log("improve your result");
    console.log("c grade");
    }
else if(percentage >=50 && percentage<=60){
    console.log("good");
    console.log("b grade");
    }
else if(percentage >=60 && percentage<=70){
    console.log("very good");
    console.log("A grade");
    
    
}

else if(percentage >=70 && percentage<=80){
    console.log("good perentage");
    console.log("A++ grade");
    }
else{
    console.log("try jari rakhe");
    
}
}
totalNum()

































































































































