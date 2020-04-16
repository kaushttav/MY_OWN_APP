var input1,input2,input3; //THE THREE INPUTS(FIRST PAGE)

var greeting1,greeting2,greeting3,greeting4;  //THE FOUR GREETINGS(FIRST PAGE)

var greeting5,greeting6,greeting7,greeting8,greeting9,greeting10,greeting11;  //THE SIX GREETIINGS(SECOND PAGE)

var greeting12,greeting13;  //THE GREETINGS OF THIRD PAGE

var submit_button; // SUBMIT BUTTON
var submit_button2; // SECOND PAGE 
var button1,button2;  //THIRD PAGE

var greeting14,greeting15,greeting16; //  THE GREETINGS OF FOURTH PAGE
var input10;
var dropdown1,dropdown2;
function setup() {
  
  var canvas = createCanvas(1500,800);

  submit_button =  createButton("Submit");  // CREATES THE SUBMIT BUTTON
  submit_button.position(850,430);
  submit_button.style('color:blue');


  greeting1 = createElement('h2'); // CREATES GREETINGS OF WELCOME
  greeting1.html("WELCOME TO BOOK BANK, PLEASE SIGN UP THE FOLLOWING DETAILS TO RECIEVE OR DONATE BOOKS.")
  greeting1.position(80,60); 
  greeting1.style('color:white');
  
  greeting2 = createElement('h4'); // GREETINGS(NAME)
  greeting2.html("Name")
  greeting2.position(450,190);
  greeting2.style('color:white');

  greeting3 = createElement('h4'); // GREETINGS(E-MAIL)
  greeting3.html("E-mail")
  greeting3.position(450,290);
  greeting3.style('color:white');

  greeting4 = createElement('h4'); // GREETINGS(PHONE_NO.)
  greeting4.html("Phone_No.")
  greeting4.position(450,390);
  greeting4.style('color:white');

  input1 = createInput("Name"); // INPUT NAME
  input1.position(450,230);

  input2 = createInput("E-mail"); // INPUT E_MAIL
  input2.position(450,330);

  input3 = createInput("Phone_No.");  // INPUT PHONE_NO.
  input3.position(450,430);

}

function draw() {
  
  background("black");  

}



  // dropdown2 = createSelect(); // THIS DROPDOWN IS NOT WORKING
  // dropdown2.position(700,450);
  // dropdown2.option('English');
  // dropdown2.option('Mandarin Chinese');
  // dropdown2.option('Spanish');
  // dropdown2.option('Hindi');
  // dropdown2.option('Bengali');
  // dropdown2.option('other');
  // dropdown2.changed(newSelection);

