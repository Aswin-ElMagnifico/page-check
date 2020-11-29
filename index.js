import preFetch from "./prefetcher.js";

const filesToBeFetched = [
    "modules/module-experience/images/blog_dyn.gif",
    "modules/module-experience/images/car_dyn.gif",
    "modules/module-experience/images/fda_dyn.gif",
    "modules/module-skill/images/game-bg-init.png"
]

preFetch(filesToBeFetched);

$("#module-intro").load("modules/module-intro/intro.html", () => {
    $.getScript("modules/module-intro/clouds.js");
    $.getScript("modules/module-intro/text.js");
});

$("#module-about").load("modules/module-aboutme/about.html");

$("#module-skill").load("modules/module-skill/gamenskill.html", () => {
    $.getScript("modules/module-skill/game.js");
});

$("#module-exp").load("modules/module-experience/exp.html", () => {
    $.getScript("modules/module-experience/exp.js");
});

$("#module-contact").load("modules/module-contact/contact.html", () => {
    $.getScript("modules/module-contact/contact.js");
});

