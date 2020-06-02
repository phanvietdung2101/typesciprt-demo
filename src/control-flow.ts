import "./scss/styles.scss";

/**
 * If/else
 */

 let count = 50;
 if(count > 0){
   count--;
 } else {
   count = 0;
 }
 console.log(count);


 // loop
 console.log("for loop");
 
 const keys = "abcdef";
 for(let idx = 0; idx < keys.length; idx++){
   console.log(keys[idx]);
 }

 console.log("while loop");
 let idx = 0;
 while(idx < keys.length) {
   console.log(keys[idx]);
   ++idx;
 }


 

