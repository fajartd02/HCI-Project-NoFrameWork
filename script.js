$(document).ready( () => {
    $(window).scroll( () => {
        if (this.scrollY > 12) {
            $('.nav').addClass('stick');
        } else {
            $('.nav').removeClass('stick');
        }
    });

    var scroll_link = $('.point');
    scroll_link.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});