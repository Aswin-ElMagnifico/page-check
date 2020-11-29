let textHolder = $(".animation"), messages = [ "A fullstack developer", "A Hacker", "An Artist", "An e-sport player"];
let index = 0;


function changeText() {
    textHolder.fadeOut("fast", ()=> {
        textHolder.text(messages[index++]).fadeIn("fast");
    });
    
    if(index > 3) {
        index = 0;
    }
}

changeText();
setInterval(changeText, 2000);