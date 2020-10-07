
let massMark= 111;
let massJohn=123;
let heightMark=1.78;
let heightJohn=1.67;
//Use Math operators to shorten BMI results. 
let BMIJohn=massJohn/(heightJohn*heightJohn);
BMIJohn=Math.round(BMIJohn);
console.log(BMIJohn);
let BMIMark=massMark/(heightMark*heightMark);
BMIMark=Math.round(BMIMark);
console.log(BMIMark)

//Print BMI to the console
 if (BMIJohn>BMIMark){
  alert("Jhon BMI is bigger than Mark");
 }else{
   alert("Mark BMI is bigger than Jhon");
 }

