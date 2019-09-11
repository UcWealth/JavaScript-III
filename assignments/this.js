/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global: WHEN YOU USE 'THIS' IN THE global scope, it refers to the console/window object
* 2. Implicit: When i use a dot to call a function, this refers to the object before the dot
* 3. New: When 'this' is used in a constructor, it refers to the instance of the object being created and returned at that instant.
* 4. Explicit: when the .call or .apply methods are called, they can override the values set in the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function drinkWater(gulp) {
    console.log(this);
    return gulp;
};
drinkWater('golum golum');


// Principle 2

// code example for Implicit Binding
const house = {
    kitchen: 'cooking',
    balcony: function(chore) {
        console.log(`${this.kitchen} is a very interesting activity while ${chore}`);
        console.log(this);
    }
};
house.balcony('chilling with champagne');

// Principle 3

// code example for New Binding
function stayHealthy(howto) {
    this.happy = 'Keep fit';
    this.howto = howto;
    this.slim = function(){
        console.log(this.happy+' '+this.howto);
        console.log(this);
    };
}
// stayHealthy('Avoid pizza!!!');

const dietPlan = new stayHealthy('I hate fat!');
const dontCare = new stayHealthy('I dont care!');
dietPlan.slim();
dontCare.slim();

// Principle 4
// code example for Explicit Binding
// Using same constructor as above:

dietPlan.slim.call(console.log('Jog everyday'));
dontCare.slim.apply(console.log('Who slim don epp?'));
