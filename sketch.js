var input1,input2,input3; //THE THREE INPUTS(FIRST PAGE)

var greeting1,greeting2,greeting3,greeting4;  //THE FOUR GREETINGS(FIRST PAGE)

var greeting5,greeting6,greeting7,greeting8,greeting9,greeting10,greeting11;  //THE SIX GREETIINGS(SECOND PAGE)

var greeting12,greeting13;  //THE GREETINGS OF THIRD PAGE

var submit_button; // SUBMIT BUTTON
var submit_button2; // SECOND PAGE 
var button1,button2;  //THIRD PAGE

var greeting14,greeting15,greeting16,greeting17,greeting18; //  THE GREETINGS OF DONATE BOOKS

var input9; // THE INPUT OF DONATE BOOKS

var dropdown1,dropdown2,dropdown3;  // DROPDOWNS OF DONATE BOOKS

var donate_button;

var greeting19,greeting20,greeting21,greeting22,greeting23; // THE GREETINGS OF RECIEVE BOOKS

var dropdown4,dropdown5,dropdown6;  // DROPDOWNS OF RECIEVE BOOKS

var input10;  // THE INPUT OF RECIEVE BOOKS

var recieve_button;

var add_book;

var book1_image,book2_image,book3_image;

var back_button,back_button2,back_button3,back_button4;

function preload(){
  book1_image = loadImage("book_donation.png");
  book2_image = loadImage("book1.png");
  book3_image = loadImage("book1.jpg");

}
// first page starts
function setup() {
  
  var canvas = createCanvas(displayWidth,displayHeight);

  submit_button =  createButton("Submit");  // CREATES THE SUBMIT BUTTON
  submit_button.position(850,430);
  submit_button.style('color:blue');
  submit_button.mouseClicked(submitbutton);

  greeting1 = createElement('h2'); // CREATES GREETINGS OF WELCOME
  greeting1.html("WELCOME TO BOOK BANK, PLEASE SIGN UP THE FOLLOWING DETAILS TO RECIEVE OR DONATE BOOKS.")
  greeting1.position(140,60); 
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
// first page ends
function draw() {
  
  background("black");  

}
//second page starts 
function submitbutton(){  //HIDES THE FIRST PAGE WRITINGS

  input1.hide();
  input2.hide();
  input3.hide();

  greeting1.hide();
  greeting2.hide();
  greeting3.hide();
  greeting4.hide();



  // image(book1_image, 0,-displayHeight*4,displayWidth, displayHeight*5);

  back_button = createButton("Back");
  back_button.position(200,200);
  back_button.mouseClicked(back);

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
//second page ends
//third page starts 
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
  submit_button.hide();


  back_button2 = createButton("Back");
  back_button2.position(200,200);
  back_button2.mouseClicked(back2);

  greeting12 = createElement('h2'); // CREATES GREETINGS(THIRD PAGE)
  greeting12.html("WHAT DO YOU WANT TO ?")
  greeting12.position(590,80); 
  greeting12.style('color:white');

  button1 =  createButton("DONATE BOOKS");  // CREATES THE DONOR BUTTON (THIRD PAGE)
  button1.position(630,230);
  button1.size(200,50);
  button1.mouseClicked(donatebooks);

  greeting13 = createElement('h2'); // CREATES GREETINGS OR(THIRD PAGE)
  greeting13.html("OR");
  greeting13.position(710,330); 
  greeting13.style('color:white');

  button2 =  createButton("RECIEVE BOOKS");  // CREATES THE RECIEVER BUTTON (THIRD PAGE)
  button2.position(630,430);
  button2.size(200,50);
  button2.mouseClicked(recievebooks);
}
//third page ends
//4th page starts
function donatebooks(){
  background("white");

  button1.hide();
  button2.hide();

  greeting12.hide();
  greeting13.hide();

  back_button3 = createButton("Back");
  back_button3.position(200,200);
  back_button3.mouseClicked(back3);

  greeting14 = createElement('h3'); // CREATES GREETINGS OR(FOURTH PAGE)
  greeting14.html("Name of the book");
  greeting14.position(400,430); 
  greeting14.style('color:white');

  input9 = createInput("Name of the book");  // INPUT NAME OF THE BOOK
  input9.position(700,450);

  greeting15 = createElement('h3'); // CREATES GREETINGS NUMBER OF COPIIES OF THE BOOK(FOURTH PAGE)
  greeting15.html("Number of copies of the book");
  greeting15.position(400,530); 
  greeting15.style('color:white');

  greeting16 = createElement('h3'); // CREATES GREETINGS LANGUAGE OF THE BOOK(FOURTH PAGE)
  greeting16.html("Language of the book");
  greeting16.position(400,230); 
  greeting16.style('color:white');

  greeting17 = createElement('h2'); // CREATES GREETINGS BOOK DETAILS(FOURTH PAGE)
  greeting17.html("Book Details");
  greeting17.position(600,100); 
  greeting17.style('color:white');

  greeting18 = createElement('h3'); // CREATES GREETINGS BOOK DETAILS(FOURTH PAGE)
  greeting18.html("Genre of the book");
  greeting18.position(400,330); 
  greeting18.style('color:white');

  dropdown1 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
  dropdown1.position(700,550);
  dropdown1.option('1');
  dropdown1.option('2');
  dropdown1.option('3');
  dropdown1.option('4');
  dropdown1.option('5+');

  dropdown2 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
  dropdown2.position(700,250);
  dropdown2.option('English');
  dropdown2.option('Mandarin Chinese');
  dropdown2.option('Spanish');
  dropdown2.option('Hindi');
  dropdown2.option('Bengali');
  dropdown2.option('other');
  
  dropdown3 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
  dropdown3.position(700,350);
  dropdown3.option('Text Books');
  dropdown3.option('Reference Books');
  dropdown3.option('Fantasy');
  dropdown3.option('Action & Adventure');
  dropdown3.option('Science - Fiction');
  dropdown3.option('Horror');
  dropdown3.option('Thriller & mystery');
  dropdown3.option('Humour');
  dropdown3.option('Crime & Detective');
  dropdown3.option('Comic');
  dropdown3.option('other');

  donate_button = createButton("Donate");
  donate_button.position(1000,550);
  donate_button.style('color:blue');

  add_book = createButton("Add_book");
  add_book.position(850,550);
  add_book.mouseClicked(add);
}
//fourth page ends
// function add(){
//   text(input9.value(),500,100);
// }
//fifth page starts
function recievebooks(){

  button1.hide();
  button2.hide();

  greeting12.hide();
  greeting13.hide();

  back_button4 = createButton("Back");
  back_button4.position(200,200);
  back_button4.mouseClicked(back4);

  greeting19 = createElement('h3'); // CREATES GREETINGS OR(FOURTH PAGE)
  greeting19.html("Name of the book");
  greeting19.position(400,430); 
  greeting19.style('color:white');

  input10 = createInput("Name of the book");  // INPUT NAME OF THE BOOK
  input10.position(700,450);

  greeting20 = createElement('h3'); // CREATES GREETINGS NUMBER OF COPIIES OF THE BOOK(FOURTH PAGE)
  greeting20.html("Number of copies of the book");
  greeting20.position(400,530); 
  greeting20.style('color:white');

  greeting21 = createElement('h3'); // CREATES GREETINGS LANGUAGE OF THE BOOK(FOURTH PAGE)
  greeting21.html("Language of the book");
  greeting21.position(400,230); 
  greeting21.style('color:white');

  greeting22 = createElement('h2'); // CREATES GREETINGS BOOK DETAILS(FOURTH PAGE)
  greeting22.html("Recieving Book Details");
  greeting22.position(600,100); 
  greeting22.style('color:white');

  greeting23 = createElement('h3'); // CREATES GREETINGS BOOK DETAILS(FOURTH PAGE)
  greeting23.html("Genre of the book");
  greeting23.position(400,330); 
  greeting23.style('color:white');

  dropdown4 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
  dropdown4.position(700,550);
  dropdown4.option('1');
  dropdown4.option('2');
  dropdown4.option('3');
  dropdown4.option('4');
  dropdown4.option('5+');

  dropdown5 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
  dropdown5.position(700,250);
  dropdown5.option('English');
  dropdown5.option('Mandarin Chinese');
  dropdown5.option('Spanish');
  dropdown5.option('Hindi');
  dropdown5.option('Bengali');
  dropdown5.option('other');
  
  dropdown6 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
  dropdown6.position(700,350);
  dropdown6.option('Text Books');
  dropdown6.option('Reference Books');
  dropdown6.option('Fantasy');
  dropdown6.option('Action & Adventure');
  dropdown6.option('Science - Fiction');
  dropdown6.option('Horror');
  dropdown6.option('Thriller & mystery');
  dropdown6.option('Humour');
  dropdown6.option('Crime & Detective');
  dropdown6.option('Comic');
  dropdown6.option('other');
  recieve_button = createButton("Recieve Book");
  recieve_button.position(1000,550);
  recieve_button.style('color:blue');
}
//fifth page ends
function back(){

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
  submit_button.hide();

  back_button.hide();

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

function back2(){

  button1.hide();
  button2.hide();

  greeting12.hide();
  greeting13.hide();

  back_button2.hide();
  back_button.hide();
  submit_button.hide();
  submit_button2.hide();


  back_button = createButton("Back");
  back_button.position(200,200);
  back_button.mouseClicked(back);

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

function back3(){

  back_button3.hide();
  back_button2.hide();
  back_button.hide();

  greeting14.hide();
  greeting15.hide();
  greeting16.hide();
  greeting17.hide();
  greeting18.hide();

  input9.hide();

  dropdown1.remove();
  dropdown2.remove();
  dropdown3.remove();

  add_book.hide();


  donate_button.hide();

  back_button2 = createButton("Back");
  back_button2.position(200,200);
  back_button2.mouseClicked(back2);

  greeting12 = createElement('h2'); // CREATES GREETINGS(THIRD PAGE)
  greeting12.html("WHAT DO YOU WANT TO ?")
  greeting12.position(590,80); 
  greeting12.style('color:white');

  button1 =  createButton("DONATE BOOKS");  // CREATES THE DONOR BUTTON (THIRD PAGE)
  button1.position(630,230);
  button1.size(200,50);
  button1.mouseClicked(donatebooks);

  greeting13 = createElement('h2'); // CREATES GREETINGS OR(THIRD PAGE)
  greeting13.html("OR");
  greeting13.position(710,330); 
  greeting13.style('color:white');

  button2 =  createButton("RECIEVE BOOKS");  // CREATES THE RECIEVER BUTTON (THIRD PAGE)
  button2.position(630,430);
  button2.size(200,50);
  button2.mouseClicked(recievebooks);
}

function back4(){
  back_button3.hide();
  back_button2.hide();
  back_button.hide();
  back_button4.hide();
  input10.hide();
  greeting19.hide();
  greeting20.hide();
  greeting21.hide();
  greeting22.hide();
  greeting23.hide();
  dropdown4.remove();
  dropdown5.remove();
  dropdown6.remove();
  recieve_button.hide();

  back_button2 = createButton("Back");
  back_button2.position(200,200);
  back_button2.mouseClicked(back2);

  greeting12 = createElement('h2'); // CREATES GREETINGS(THIRD PAGE)
  greeting12.html("WHAT DO YOU WANT TO ?")
  greeting12.position(590,80); 
  greeting12.style('color:white');

  button1 =  createButton("DONATE BOOKS");  // CREATES THE DONOR BUTTON (THIRD PAGE)
  button1.position(630,230);
  button1.size(200,50);
  button1.mouseClicked(donatebooks);

  greeting13 = createElement('h2'); // CREATES GREETINGS OR(THIRD PAGE)
  greeting13.html("OR");
  greeting13.position(710,330); 
  greeting13.style('color:white');

  button2 =  createButton("RECIEVE BOOKS");  // CREATES THE RECIEVER BUTTON (THIRD PAGE)
  button2.position(630,430);
  button2.size(200,50);
  button2.mouseClicked(recievebooks);
}
