let cloudTop = document.getElementById("id-top-cloud");
let bottomCLoud = document.getElementById("id-bottom-cloud");


let left = 0, right = 0, maxWidth = $(window).width() - 150;

function topCloudMotion () {
    maxWidth = $(window).width() - 155;
    left = (left >= maxWidth) ? 0 : left;
    
    cloudTop.style.left = left + "px";
    left += 0.2;
}

function bottomCloudMotion () {
    right = (right > maxWidth) ? 0 : right;
    bottomCLoud.style.right = right + "px";
    right += 0.1;
   // console.log("right: " + right );
}

console.log();

setInterval(topCloudMotion, 1);
setInterval(bottomCloudMotion, 1);


