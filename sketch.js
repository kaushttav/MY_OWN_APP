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
  submit_button.mouseClicked(submitbutton);

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
function submitbutton(){  //HIDES THE FIRST PAGE WRITINGS
  input1.hide();
  input2.hide();
  input3.hide();

  greeting1.hide();
  greeting2.hide();
  greeting3.hide();
  greeting4.hide();

  submit_button.hide();

  greeting5 = createElement('h2'); // CREATES GREETINGS(SECOND PAGE)
  greeting5.html("GREAT JOB! ONE MORE STEP AND YOU CAN DONATE OR RECIEVE BOOKS.")
  greeting5.position(260,60); 
  greeting5.style('color:white');
  
  greeting6 = createElement('h4'); // GREETINGS(DATE OF BIRTH)
  greeting6.html("Date Of Birth")
  greeting6.position(400,190);
  greeting6.style('color:white');

  greeting7 = createElement('h4'); // GREETINGS(AGE)
  greeting7.html("School-Name")
  greeting7.position(610,190);
  greeting7.style('color:white');

  greeting8 = createElement('h4'); // GREETINGS(SCHOOL-NAME)
  greeting8.html("Class")
  greeting8.position(400,290);
  greeting8.style('color:white');

  greeting9 = createElement('h4'); // GREETINGS(COUNTRY)
  greeting9.html("Country")
  greeting9.position(610,290);
  greeting9.style('color:white');

  greeting10 = createElement('h4'); // GREETINGS(CITY)
  greeting10.html("City")
  greeting10.position(610,390);
  greeting10.style('color:white');

  greeting11 = createElement('h4'); // GREETINGS(ADDRESS)
  greeting11.html("Address")
  greeting11.position(400,390);
  greeting11.style('color:white');

  input4 = createInput("Date Of Birth"); // INPUT DATE OF BIRTH
  input4.position(400,230);

  input5 = createInput("School-Name"); // INPUT SCHOOL NAME
  input5.position(610,230);

  input6 = createInput("Class");  // INPUT CLASS 
  input6.position(400,330);
  
  input7 = createInput("City"); // INPUT CITY
  input7.position(610,330);

  input8 = createInput("Country"); // INPUT COUNTRY
  input8.position(610,430);

  input9 = createInput("Address");  // INPUT ADDRESS
  input9.position(400,430);

  submit_button2 =  createButton("Submit");  // CREATES THE SUBMIT BUTTON (SECOND PAGE)
  submit_button2.position(850,430);
  submit_button2.style('color:blue');
  submit_button2.mouseClicked(submitbutton2);
}
function submitbutton2(){

  greeting5.hide();
  greeting6.hide();
  greeting7.hide();
  greeting8.hide();
  greeting9.hide();
  greeting10.hide();
  greeting11.hide();

  input4.hide();
  input5.hide();
  input6.hide();
  input7.hide();
  input8.hide();
  input9.hide();

  submit_button2.hide();

  greeting12 = createElement('h2'); // CREATES GREETINGS(THIRD PAGE)
  greeting12.html("WHAT DO YOU WANT TO ?")
  greeting12.position(590,80); 
  greeting12.style('color:white');

  button1 =  createButton("DONATE BOOKS");  // CREATES THE DONOR BUTTON (THIRD PAGE)
  button1.position(630,230);
  button1.size(200,50);
  button1.mouseClicked(donatebooks);
  // button1.style('background-color:blue');

  greeting13 = createElement('h2'); // CREATES GREETINGS OR(THIRD PAGE)
  greeting13.html("OR");
  greeting13.position(710,330); 
  greeting13.style('color:white');

  button2 =  createButton("RECIEVE BOOKS");  // CREATES THE RECIEVER BUTTON (THIRD PAGE)
  button2.position(630,430);
  button2.size(200,50);
  // button2.style('color:blue');
}
function donatebooks(){

  button1.hide();
  button2.hide();

  greeting12.hide();
  greeting13.hide();

  greeting14 = createElement('h3'); // CREATES GREETINGS OR(FOURTH PAGE)
  greeting14.html("Name of the book");
  greeting14.position(400,230); 
  greeting14.style('color:white');

  input9 = createInput("Name of the book");  // INPUT NAME OF THE BOOK
  input9.position(650,250);

  greeting15 = createElement('h3'); // CREATES GREETINGS NUMBER OF COPIIES OF THE BOOK(FOURTH PAGE)
  greeting15.html("Number of copies of the book");
  greeting15.position(400,330); 
  greeting15.style('color:white');

  greeting16 = createElement('h3'); // CREATES GREETINGS LANGUAGE OF THE BOOK(FOURTH PAGE)
  greeting16.html("Language of the book");
  greeting16.position(400,430); 
  greeting16.style('color:white');

  greeting17 = createElement('h2'); // CREATES GREETINGS BOOK DETAILS(FOURTH PAGE)
  greeting17.html("Book Details");
  greeting17.position(600,100); 
  greeting17.style('color:white');

  dropdown1 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
  dropdown1.position(700,350);
  dropdown1.option('1');
  dropdown1.option('2');
  dropdown1.option('3');
  dropdown1.option('4');
  dropdown1.option('5+');
  dropdown1.changed(newSelection);

  dropdown2 = createSelect(); // THIS DROPDOWN IS NOT WORKING
  dropdown2.position(700,450);
  dropdown2.option('English');
  dropdown2.option('Mandarin Chinese');
  dropdown2.option('Spanish');
  dropdown2.option('Hindi');
  dropdown2.option('Bengali');
  dropdown2.option('other');
  dropdown2.changed(newSelection);
}
