app.directive('carDirective',function(){
    return{
        restrict:"EA",
        templateUrl:"App/View/temp/_car.html",
        link:function(){
            var mySwiper = new Swiper('.banner',{
                direction:"horizontal",
                loop:true,
                pagination:".swiper-pagination",
                autoplay:1000
            });
            var myScroll = new IScroll('.test',{
                scrollX:true,
                scrollY:false
            });
            $('header a').click(function(){
                $(this).addClass('change').siblings().removeClass('change');
            });
            $('footer li').click(function(){
                $(this).addClass('on').siblings().removeClass('on');
            });
        }
    }
});