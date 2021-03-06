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

// shows an alert player constructor called
var person2 = new Player();

// alerts i am a person
person1.myType();

// alerts hello my name is
person1.myName();

// alerts i am a person
person2.myType();

// alerts hello my name is
person2.myName();
