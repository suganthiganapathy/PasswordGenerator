const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
// Array of characters to generate password
let pageEl=document.getElementById("page-el");
let  inputEl=document.getElementById("input_el");
let  pwdInput= document.getElementById("pwdinput");
let passwordEl=document.getElementById("passEl");
let passwordTwo=document.getElementById("passElTwo");
let idGeneratepwd="false";
// requirement

// button click should generte a password

// password character should not excide 15 length<=15

function empty(){
    passwordEl.textContent=""
   
}
 function emptyTwo(){
    passwordTwo.textContent=""
 }

function generatePassword(){
    empty();
    for(i=0;i<15;i++){
        
    let pass=Math.floor(Math.random()*characters.length);
    passwordEl.textContent+=characters[pass];
    

}

}



 function generatesecondPass(){
    emptyTwo();
    for(i=0;i<15;i++){
        
     let password=Math.floor(Math.random()*characters.length);
          //console.log(characters[password]);
            //return characters[password];
     passwordTwo.textContent +=characters[password];
    }
 }