let contactBtn = $(".btn-contact-me");

contactBtn.hover(
    () => {
        contactBtn.text("aswin1398@gmail.com");
    },
    () => {
        contactBtn.text("CONTACT ME");
    }
)

$(".copyright").text(`© ${(new Date()).getFullYear()} Aswin Prasad.`);
