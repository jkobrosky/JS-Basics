//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var callNow = callFriend();

callNow('555-555-5555');

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  var makeCounter = function() {
    var counter = 0;
    return function() {
      return counter += 1;
    }
  }

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

var outerFn = function(innerFn) {
  return function() {
    innerFn();
  }
}

//Next Problem

/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter 
  will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous 
  function to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
var fnCounter = function(param1, N) {
  for (var i = 0; i < N; i++) {
    param1();
  }
  return 'STOP';
}

fnCounter(function(){
  alert("running");
}, 3);


var param1 = function(name) {
  alert('running');
}

//Next Problem


  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };


/*
  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    // console.log is going to log 5, five times. This is going to happen because of the callback function; i will complete
    it's run to 5 before everything is logged.


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    // I was right and wrong. It displayed 6 five times; not 5 five times. Because 6 is what breaks the function parameter
    of i <= 5.


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/
var counter = function() {
  for (var i = 0; i <=5; i++) {
    (function(i) {
      setTimeout( function timer() {
        console.log(i);
      }, i * 1000 );
    })(i);
  }
};

function logI() {
  for(var i = 0; i < 5; i++) {
    conosole.log(i);
  }
}

//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

var funcArray = [
  function() { alert('A long time ago, in a galaxy far, far away...')},
  function() { alert('It is a period of civil war')},
  function() { alert('Rebel spaceships, striking from a hidden base, have won')},
  function() { alert('their first victory against the evil Galactic Empire.')},
  function() { alert('During the battle, rebel spies managed to steal secret plans')},
  function() { alert('to the Empire\'s ultimate weapon,')},
  function() { alert('the DEATH STAR, an armoured space station with enough')},
  function() { alert('power to destroy an entire planet.')},
];

for (var i = 0; i < funcArray.length; i++) {
  funcArray[i]();
};














