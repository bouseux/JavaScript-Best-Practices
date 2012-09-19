(function($) {
    
    var methods = {
		init : function() {
			console.log('perform some init');
		},
		sayHello : function() {
			alert('hello world!');
		}		
    };

    $.fn.colorMe = function(options) {
        
        var settings = $.extend({
            "color" : "#999"          
        }, options);
        
        return this.each(function() {
        
            var $this = $(this);
            
            $this.css({"background":settings.color});
            
        });
                                    

    };

}(jQuery));


$('p').colorMe({"color" : '#ccc'});


$('div').colorMe();