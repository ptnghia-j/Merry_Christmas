onload = function (){
	c = canvas.getContext('2d');
	canvas.width = W = innerWidth;
	canvas.height = H = innerHeight;
	var amplitude = [];
	var frequency = [];
	var speed = [];
	var snow = 400;
	var tilt = [];
	var addX = [];
	var y = []
	var r = []
	function setUp(){
		for(i = 0; i < snow; i++){
			y[i] = Math.floor(Math.random()*H);
			addX[i] = Math.floor(Math.random()*W *3/2-W/2);
			r[i] = Math.floor(Math.random()*4+1)
			frequency[i] = Math.floor(Math.random()*20+20)
			amplitude[i] = Math.floor(Math.random()*6+2)
			speed[i] = Math.random()+1
			tilt[i] = 0;
		}
	}
	setUp();
	function reset(i){
		y[i] = Math.floor(Math.random()*-50);
		addX[i] = Math.floor(Math.random()*W*3/2-W/3*2);
		r[i] = Math.floor(Math.random()*4+1)
		frequency[i] = Math.floor(Math.random()*20+20)
		amplitude[i] = Math.floor(Math.random()*6+2)
		tilt[i] = 0;
	}
	function draw(){
			c.clearRect(0, 0, canvas.width, canvas.height);
		for(i = 0; i < snow; i++){
	  		y[i]+=speed[i];
			x = amplitude[i] * Math.cos(y[i]/frequency[i]) + addX[i] + tilt[i]
			c.beginPath()
	  		c.arc(x, y[i], r[i], 0, Math.PI * 2)
	  		c.fillStyle = "white"
	  		c.fill()
	  		tilt[i]+=.5;
	  		if(y[i] > H || x > W){
	  			reset(i);
	  		}
	  	}
	  	requestAnimationFrame(draw);
	}
	requestAnimationFrame(draw);
}