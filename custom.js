

var prob = 10000/23;
var button;

var started = false;
var total = 0;

var entrants;
var results;

function setup() {
  noCanvas();
 
  button = select('#start');
  button.mouseClicked(startLottery);
  results = select('#results');
  
  noLoop();
}





function startLottery() {
  started = true;
  results.style('background-color', 'white');
  total = 0;
  loop();
}

function draw() {
  if (started) {
    var r = floor(random(prob));

    if (r == 1) {
      results.html('You won!');
      results.style('background-color', 'rgb(200, 200, 200)');
      noLoop();
      //console.log('won lottery');
    } else {
      results.html('Try again');
      //console.log('lost lottery');
    }
    total++;

    select('#total').html(total);
  }

}