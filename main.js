ce=document.getElementById("c");
c=ce.getContext("2d");
cx=0;
cy=0;
let b=new Image();
let car=new Image();
function add() {
	b.onload=ub;
	car.onload=uc;
	b.src="parkingLot.jpg";
	car.src="car2.png";
}

function ub() {
	c.drawImage(b,0,0,1350,450);
}

function uc() {
	c.clearRect(0,0,1350,450);
	c.drawImage(b,0,0,1350,450);
	c.drawImage(car,cx,cy,100,100);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cy>5){
		cy-=5;
		ub();
		uc();
	}
}

function down()
{
	if(cy<345){
		cy+=5;
		ub();
		uc();
	}
}

function left()
{
	if(cx>5){
		cx-=5;
		ub();
		uc();
	}
}

function right()
{
	if(cx<1245){
		cx+=5;
		ub();
		uc();
	}
}
