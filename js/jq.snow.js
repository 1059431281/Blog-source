(function($){
    var interval
    $.fn.snow = function(options){

        var $flake 			= $('<div id="snowbox" />').css({'position': 'fixed', 'top': '-50px','z-index':'9999'}).html('&#10052;'),
            documentHeight 	= $(document).height(),
            documentWidth	= $(document).width(),
            defaults		= {
                minSize		: 10,		//雪花的最小尺寸
                maxSize		: 20,		//雪花的最大尺寸
                newOn		: 1000,		//雪花出现的频率
                flakeColor	: "#B9CDF6"
            },
            options			= $.extend({}, defaults, options);

         interval		= setInterval( function(){
            var startPositionLeft 	= Math.random() * documentWidth - 100,
                startOpacity		= 0.5 + Math.random(),
                sizeFlake			= options.minSize + Math.random() * options.maxSize,
                // endPositionTop		= documentHeight - 40,
                endPositionTop = $('#xuehua').height() - 100
                // endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
                endPositionLeft = 0
                durationFall		= documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo($('.app')).css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor
            }).animate({
                    top: endPositionTop,
                    opacity: 0.2
                },durationFall,'linear',function(){
                    $(this).remove()
                }
            );

        }, options.newOn);

        window.addEventListener("resize",function () {
            clearInterval(interval);

                $.fn.snow({
                    minSize: 5,		//雪花的最小尺寸
                    maxSize: 40, 	//雪花的最大尺寸
                    newOn: 700		//雪花出现的频率 这个数值越小雪花越多
                });
        },false)
    };

})(jQuery);