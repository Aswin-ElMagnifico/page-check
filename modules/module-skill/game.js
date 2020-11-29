

function setBirdPos() {
    bird.css({
        left: x,
        top: limit - y
    });
}


function F(x) {
    return Math.log(x);
}

function G(x) {
    return Math.sqrt(x);
}


let c = 0;
function sequence() {
    if (x < $(".game-screen").width() - 50) {
        setBirdPos();
        x += 3;
        if ( x > $(".game-screen").width() / 2 ) {
           y = G(x) + c;
        } else { 
            y = F(x);
            y*= y*y;
            c = y;
        }
        
    } else {
         clearInterval(handler);
         xplode();
    }
}

let handler = null
function launchBird() {
    handler = setInterval(sequence, 1);
}

function xplode() {
    bird.hide();
    $(".game-screen").css("background-image", 'url("modules/module-skill/images/game-bg-init.png")');
    setTimeout(transitionToSkill, 1000);
}

function transitionToSkill() {

    $(".game-container").fadeOut(()=> {
        $(".skill-container").fadeIn(()=>{
            $(".skill-container card").fadeIn('slow');
        });
        
    });
}

$(".btn-launch").click(() => launchBird());


let bird = $(".bird");
let x = 5, y = F(x);

let limit = $(window).width() <= 800 ? 250 : 350;
console.log("limit: " + limit);
setBirdPos();
