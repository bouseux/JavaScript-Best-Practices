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
alert(Namespace.email);

// Demonstration of prototype inheritance
var Test = function() {
	
};

// Demonstarting prototype
var MyClass = new Test();

// Add a newFunc function to all Test objects
Test.prototype.newFunc = function() {
	alert("new prototype function");
};

// Should display an alert
MyClass.newFunc();

/*
Sample code demonstrating a template, a most recently used cache, a key, json implementation
*/
var mkv = (function($){
	// private local variables
	var me = {}, elementsStored = 0, cache = new Array(), mostRecentlyUsed = new Array(), sizeOfCache, templateUrl;
	
	// initializer
	me.makeFetch = function(tmp, size) {
		sizeOfCache = size;
		elementsStored = 0;
		templateUrl = tmp.slice(); // copy an array
	}	
	
	me.fetch = function(key, callBack) {
		
		// form url where %s is replaced with key
		var jsonurl = templateUrl.splice(templateUrl.indexOf("%s"), 2, key);
		
		// check cache
		if(cache[key]!="undefined") {
			
			// remove from most recently used
			for(i = 0; i < mostRecentlyUsed.length; i++) {
				if(mostRecentlyUsed[i] == key) {
					delete mostRecentlyUsed[i];
					elementsStored--;
					break;
				}
			}
			
			// add to most recently used
			mostRecentlyUsed.push(key);
			
			// callback
			return callBack(cache[key]);
		}
		
		// cache miss, make a backend call
		$.ajax({
			url: jsonurl,
			success : function(data) {
				
				// if cache is overflown
				if(elementsStored > sizeOfCache) {
					var tmp, lru;
					
					// get LRU key
					tmp = mostRecentlyUsed[0];
					
					// delete from cache
					delete cache[tmp];
					
					// remove least recently used
					lru = mostRecentlyUsed.shift();
					
					// push new key as most recently used
					mostRecentlyUsed.push(key);
					
					// incremente element stored
					elementsStored++;
					
					// store in cache
					cache[key] = data;
					
					// call callback
					return callBack(cache[key]);
					
				} else {
					// increate element stored
					elementsStored++;
					
					// store in cache
					cache[key] = data;
					
					// add to most recently used
					mostRecentlyUsed.push(key);
					
					// call callback
					return callBack(cache[key]);
				}
			}
		});
		
	}

	return me;
}(jQuery));

