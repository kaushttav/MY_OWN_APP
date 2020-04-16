class Donatebook{
 
    constructor(){
        this.input9 = createInput('Name of the book');
        this.greeting14 = createElement('h3');
        this.greeting15 = createElement('h3');
        this.greeting16 = createElement('h3');
        this.greeting17 = createElement('h3');
        this.dropdown1 = createSelect();
    }

    display(){

        this.greeting12.hide();
        this.greeting13.hide();
        this.button1.hide();
        this.button2.hide();

        this.button1.mousePressed(()=>{

        this.greeting14.html("Name of the book");
        this.greeting14.position(400,230); 
        this.greeting14.style('color:white');
 
        this.input9.position(650,250);

        this.greeting15.html("Number of copies of the book");
        this.greeting15.position(400,330); 
        this.greeting15.style('color:white');

        this.greeting16.html("Language of the book");
        this.greeting16.position(400,430); 
        this.greeting16.style('color:white');
      
        this.greeting17.html("Book Details");
        this.greeting17.position(600,100); 
        this.greeting17.style('color:white');

        this.dropdown1 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        this.dropdown1.position(700,350);
        this.dropdown1.option('1');
        this.dropdown1.option('2');
        this.dropdown1.option('3');
        this.dropdown1.option('4');
        this.dropdown1.option('5+');
        this.dropdown1.changed(newSelection);
        });
    }
}