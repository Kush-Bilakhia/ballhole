
// Create canvas variable
var canvas = new fabric.Canvas('c')

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_x=800;
hole_y=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf.h1.png", function(Img)
	{
		hole_obj = img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left.hole_x
		});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas

	fabric.Image.fromURL("ball.png", function(Img)
	{
		hole_obj = img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left.hole_x
		});
		
	

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
	
	else{
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
		// Write a code to move ball upward.
	}

	
		 // Write a code to move ball downward.
		 function down()
{
    if(player_y <=500)
    {
        player_y =player_y - block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When Down arrow is pressed, X = " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			function left()
			{
				if(player_x >0)
				{
					player_x =player_x - block_image_width;
					console.log("block image width =" + block_image_width);
					console.log("When Left arrow is pressed, X = " + player_x + " , Y ="+player_y);
					canvas.remove(player_object);
					player_update();
				}
			}
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			function left()
{
    if(player_x >0)
    {
        player_x =player_x - block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Left arrow is pressed, X = " + player_x + " , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }

		}
	}
	
}

