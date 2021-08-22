$(document).ready(function(){
    $(window).on('scroll',function(){
        var navbar = $('.point');
        console.log(navbar);
        var top = $(window).scrollTop();
        $('.point_section').each(function(){
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top;
            if(top >= offset && top < offset + height){
                navbar.removeClass('active');
                $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    });

    var scroll_link = $('.point');
    scroll_link.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});