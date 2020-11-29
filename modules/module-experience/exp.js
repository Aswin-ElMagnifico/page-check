let p1 = $(".card-car"), i1 = $(".card-car .img-disp");
let p2 = $(".card-blog"), i2 = $(".card-blog .img-disp");
let p3 = $(".card-fda"), i3 = $(".card-fda .img-disp");

p1.hover(
    () => {
        i1.attr("src", "modules/module-experience/images/car_dyn.gif");
    },
    ()=> {
        i1.attr("src", "modules/module-experience/images/car_static.png");
    }
);

p2.hover(
    () => {
        i2.attr("src", "modules/module-experience/images/blog_dyn.gif");
    },
    ()=> {
        i2.attr("src", "modules/module-experience/images/blog_static.png");
    }
);


p3.hover(
    () => {
        i3.attr("src", "modules/module-experience/images/fda_dyn.gif");
    },
    ()=> {
        i3.attr("src", "modules/module-experience/images/fda_static.png");
    }
);