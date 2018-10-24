$("#toop").click(function () {
    $('html,body').animate({
        scrollTop: 0//高度
    }, 1000);//s时间
});
$(window).on('scroll', function () {
    if ($(window).scrollTop() >200){
        $('.jian').fadeIn();
    }else{
        $('.jian').fadeOut();
    }
});
$(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/