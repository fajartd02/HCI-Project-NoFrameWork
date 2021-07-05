$(document).ready( () => {
    $(window).scroll( () => {
        if (this.scrollY > 12) {
            $('.nav').addClass('stick');
        } else {
            $('.nav').removeClass('stick');
        }
    });
});