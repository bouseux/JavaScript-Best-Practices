/*
Demonstration of inheritance
*/

var Person = function() {

};

Person.prototype.myType = function() {
    alert('I am a person');
};

Person.prototype.myName = function() {
    alert('hello my name is');
};

var Player = function() {
    // call the parent constructor
    Person.call(this);
    
    // set an alert
    alert('player constructor called');
};
    
Player.prototype = new Person();

Player.prototype.constructor = Player;

Player.prototype.myType = function() {
    alert('I am a player');
};

var person1 = new Person();
var person2 = new Player();

person1.myType();
person1.myName();
person2.myType();
person2.myName();
