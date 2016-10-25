/* 
 * app.js, code for Trumphouse game.
 * Module pattern.
 * MVC pattern.
 * "Fart in the Elevator" pattern.
 */


var game = ( function () {

	// MODEL STUFF

	var trump = {};  // object, trump character

	var bricks = []; // array of objects

	var arena = {};  // object, entire game canvas

	var whiteHouse = {}; // the right side of the arena, "win" zone

	function initModel () {

		console.log('in initModel');
		// init trump
		trump.dom = document.getElementById('trump');
		trump.name = trump.dom.id;

		// init arena
		arena.dom = document.getElementById('game-canvas');
		arena.name = arena.dom.id;

		// init bricks 
		var list = document.getElementsByClassName('bricks');

		// Make the brick objects by creating objes, and assigning 
		// the DOM elements we got from getElementsByClassName()
		for ( var i = 0; i < list.length; i++ ) {

			bricks.push( 

				{
					dom: list[i],

					name: list[i].id

				} // end of object we're pushing into bricks array

			); // end of 'push'

		} // end of for() loop

	}; // end of initModel


	// VIEW STUFF

	function initView () {
		console.log('in initView');
	}; // end of initView


	// CONTROLLER STUFF

	/** 
	 * -------------------------------------
	 * Figure out which key the user pressed
	 * Stack Overflow
	 * @link http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
     * -------------------------------------
	 */
	function checkKey(e) {

    	e = e || window.event;

    	if (e.keyCode == '38') {
    	    // up arrow
    	    console.log('up arrow pressed');
    	}
    	else if (e.keyCode == '40') {
    	    // down arrow
    	    console.log('down arrow pressed');
    	}
    	else if (e.keyCode == '37') {
    	   // left arrow
    	   console.log('left arrow pressed');
    	}
    	else if (e.keyCode == '39') {
       		// right arrow
       		console.log('right arrow pressed');
    	}

	}; // end of checkKey

	/** 
	 * ------------------------
	 * the main animation loop.
	 * ------------------------
	 */
	function gameLoop () {
		console.log('in gameLoop');

	}; // end of gameLoop

	// save a 'process' id for starting and stopping setInterval()
	var animateId = null; //starts without animating

	/** 
	 * --------------------------
	 * initialize the controller.
	 * --------------------------
	 */
	function initController () {

		console.log('in initController');

		// If a key is pressed, run the function checkKey()
		document.onkeydown = checkKey;

	}; // end of initController

	// MAIN PROGRAM

	/** 
	 * ----------------------------
	 * start animation
	 * ----------------------------
	 */
	function start () {

		if ( animateId === null) {

			animateId = setInterval( // save the id of this animation loop

				function () { // a "closure"
			
					gameLoop(); // run 'gameloop()' in this game

					}, 100 // every 1/10 of a second (100 milliseconds)

			); // end of setInterval()

			console.log('starting game...');

		}

	}; // end of start()

	/** 
	 * ------------------------------
	 * stop animation
	 * ------------------------------
	 */
	function stop () {

		clearInterval(animateId);

		animateId = null; //set to nothing

		console.log('stopping game');

	}; // end of stop()

	/** 
	 * -------------------------------
	 * check if a loop is running
	 * -------------------------------
	 */
	function isStarted () {

		if ( animateId !== null ) {
			return true;
		} else {
			return false;
		}

	}; // end of isStarted()

	/** 
	 * Initialize Model, View with DOM elements, 
	 * Initialize Controller with keyboard commands.
	 */
	function init () {
		console.log('in init');
		initModel();
		initView();
		initController();
		start(); // start the game
	};

	// Expose some properties (variables) and methods (functions)
	return {
		trump: trump,
		bricks: bricks,
		arena: arena,
		whiteHouse: whiteHouse,
		init: init,
		start: start,
		stop: stop
	};

} ) (); // the '()' causes this function to execute instantly


console.log( 'in app.js' ); // debugging line









