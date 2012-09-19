// Self invoking anonymous function with namespace
var namespace = (function() {

	// private local variables
	var my = {}, email = "feedback@test.com";
	
	my.sendFeedback = function() {
		// has access to private variable email
		alert(email);
	}
	
	// return my, closure example
	return my;

})();

// alerts the email
namespace.sendFeedback();

// undefined, no access to private variable
alert(namespace.email);


// Module pattern with the ability to continously add functions
var hw = (function(my) {
    var _privateVariable = 'hello world';
    
    // add to homeaway function
    my.sayHello = function() {
        alert(_privateVariable);       
    };
        
    return my;
    
}(hw || {}));
       
hw.sayHello();

alert(hw._privateVariable);