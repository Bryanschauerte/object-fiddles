//Once you complete a problem, open up Chrome and check the answer in the console.


/*/Create an object called me. Give it a key of name with the value being your
 name, and another key of age with the value being your age. Then alert your
 name using dot notation.
*/
var me = {
  name : "bryan",
  age : 29

};
console.log(me.name);
  //Code here




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
var favoriteThings = {
  band: "Mickey Mouse and the Sunshine gang",
  food:"KimChi",
  person:"DaHee Jeong",
  book:"the ocean at the end of the lane",
  movie:"The Departed",
  holiday:"Halloween"

}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings.car = "Yellow";
favoriteThings.brand = "hot iron";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here

  favoriteThings.food = "Lettuce";
  favoriteThings.book = "50 Shades of Gray";


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here

var backPack = {
  };

var item = "firstPocket";
backPack[item] = "chapstick";
//After you do the above, alert your entire backPack object.

  //Code here
alert(backPack);
/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here
console.log(packPack);



//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.


  //Code Here

  var me = {
    name: "Bryan",
    age: 29,
    height: "186 cm",
    gender: "Male",
    married: true,
    eyeColor:"Hazel",
    hairColor:"brown"

  }

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here

for(var prop in me) {
  alert(me[prop]);

}


//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here

var album = {
  "Shake The Pepper": 3000,
  "Dry Water": 6000,
  "Wet turtle finds love": 5000,
  "Beatles made me do it": 3300,
  "Books that read": 29000

};

//Now, loop through your album object alerting every song title individually.

  //Code Here

for(var prop in album){
  alert(prop);

};


//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here
var states = {
  california: 90000,
  illinois: 30000,
  utah: 50000,
  missouri: 20000,
  maine: 10000

};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here
for(var prop in states){
  if(states[prop] > 30000) {
    alert(prop);

  }

}



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

for(var prop in user) {
  if((user[prop] == null) || (user[prop] == undefined) || (user[prop] == 0)) || (user[prop] == false){
  delete user[prop];
  }
}

//OR THIS WORKS TOO

for(var prop in user) {
if(!user[prop]){
delete user[prop];}
}

//Once you get your truthy Object, Change the remaining values in the object
// to be specific to you (name: 'your name', username: 'your username'), rather
// than my information.

  //Code Here

user.name = "Bryan";
user.username = "BryanLovesJS";
user.pwHash = "aabbccddee8x8"


//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

user.name = "Tyler S. McGinnis";
user.email= "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here

user.sayName();


//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here

  var methodCollection = {


  };

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here

methodCollection.alertHello = function() {
  alert("hello");
}
methodCollection.logHello = function() {
  console.log('hello');

}

//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();

//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  //Code Here
function MakePerson(name, birthday, ssn) {
return {name: name,
  birthday: birthday,
  ssn: ssn
}
}

//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to
//make a Credit Card object and returns that object so that whenever you invoke
 //MakeCard, you get a brand new credit card.

  //Code Here
function MakeCard(number, expiration) {
  return {
    number: name;
    expiration: expiration;
  }

}


//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.

for(var prop in object) {console.log(prop)}
*/

function bindCard(personOb, creditObj) {

return {
  name: person.name,
  birthday: person.bithday,
  ssn: person.ssn,
  number: card.number,
  expiration: card.expiration
  }
}


//Or a loop
  function bindCard(person, Card){
    var combined = {};
      for (var prop in person) {
      combined[prop]= person[prop];
    } for (var prop in card) {
      combined[prop] = card[prop];
    }
    return combined;
  }
