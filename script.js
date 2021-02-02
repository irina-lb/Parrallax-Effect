$(document).ready(function () {
    $(window).scroll(function () {

        let scrollTop = $(this).scrollTop(); // scrolling pixels in window of browser
        let windWidth = $(this).outerWidth(); // window width
        let contHight = $('.content').outerHeight(); // height of content part
        let animHight = $('.animation').outerHeight(); // height of parallax part
        let scrollProc = scrollTop / contHight * 100; // per cent of scrolling

        let scrollProc2 = scrollTop / animHight * 100; // per cent of scrolling of top part
        let opacity = 1 - 1 / 100 * scrollProc2; // opacity of elements, for disappearing

        let zoom1 = 1 + (windWidth / 10000 * scrollProc2);// width of window / speed of animation * scroll of content
        $('.fog').css('transform', 'scale(' + zoom1 + ')'); // moving fog to person
        $('.fog').css('opacity', opacity); // fog disappearance 

        let zoom2 = 1 + (windWidth / 5000000 * scrollProc); // 5000000 for changing slowly size of element
        $('.mountain_1').css('transform', 'scale(' + zoom2 + ')'); // background mountain growing

        let horizontal1 = windWidth / 2000 * scrollProc2;
        let zoom3 = 1 + (windWidth / 1000 * scrollProc2);
        $('.mountain_2').css('transform', 'translate3d('
            + horizontal1 + 'px,0,0) scale(' + zoom3 + ')');// right bottom mountain moving to person

        let horizontal2 = windWidth / 1500 * scrollProc2;
        let zoom4 = 1 + (windWidth / 1000 * scrollProc2);
        $('.mountain_3').css('transform', 'translate3d('
            + horizontal2 + 'px,0,0) scale(' + zoom4 + ')'); // left bottom mountain moving to person
    })
})

