
    var rgb = ["255,0,255", "255,255,0", "0,255,3", "0,255,153"];
    var body = document.querySelectorAll("div")[0];
    var tree = document.querySelectorAll("div")[1];
    var snow = document.querySelectorAll("div")[2];
    var rgba =""; 
    var music = new Audio("https://ia601500.us.archive.org/15/items/y-2mate.com-christmas-instrumental-ringtone-jingle-bell-instrumental-ringtone-new-creation_202112/Merry%20Christmas.mp3");
    var v = 15;
window.onload = function()
{           
        var random = Math.round(Math.random()*99)+100;
    for(var i = 1; i<random; i++)
    body.innerHTML+= "<span></span>";
    var span = document.querySelectorAll("span");
    for(var i = 1; i<span.length; i++)
    {
            span[i].style.top = Math.round(Math.random()*99)+"%";
            span[i].style.left = Math.round(Math.random()*99)+"%";
            var random_color = Math.round(Math.random()*rgb.length-1);
            var a = 0.8;
            span[i].style.background = "rgb("+rgb[random_color]+")";
            for(var j = 5; j<=v; j+=5)
            {
                        if(j==v)
                                    rgba+= "0 0 "+j+"px 1px rgba("+ rgb[random_color]+","+a+")";
                        else
                                    rgba+= "0 0 "+j+"px 1px rgba("+ rgb[random_color]+","+a+"),";
                        a-=0.05;
            }
            span[i].style.boxShadow = rgba;
            rgba = "";
            }
    }
    for(var i = 0; i<11; i++)
    {
     if(i==10)
            tree.innerHTML+= "<p>    &#11088;</p>";
      else
            tree.innerHTML+="<p></p>";
 }
    var p = document.querySelectorAll("p");
    var w = 120;
    var bw = 120;
    var g = 50;
    for(var i = 1; i<p.length; i++)
    {            
                p[i].style.borderWidth = bw+"px";
                p[i].style.marginTop = "-"+(w/2+25)+"px";
                p[i].style.borderBottomColor = "rgb(0,"+g+",2)";
                w-=10;
                bw-=10;
                g+=7;
    }
    for(var i = 0; i<20; i++)
    {
                snow.innerHTML+= "<li></li>";
    }
    var li = document.querySelectorAll("li");
    var left = 0;
    for(var i = 0; i<li.length; i++)
    {
                li[i].style.left = left+"%";
                left+= 5;        
                li[i].style.animationDelay = Math.random()*20+"s";
                if(left>99)
                left=0;
    }
    var title = document.querySelector("header");
var cap = "", quote = "Merry Christmas\n", n_name = "";
var count = 0;
var name = prompt("Hi! Enter your name please");
if(name == "" || name == 'null')
{
    quote = "Merry Christmas";
}
else
{
    for(var i = 0; i<name.length; i++)
{
    if(name.charAt(i)!=' ')
        n_name+=name.charAt(i);
    else
        break;
}
		 quote+=n_name
}
alert(n_name+" tap on the snowman ☃️");
var counting_text = setInterval(function() 
{         
         cap+=quote.charAt(count);
            title.innerHTML = cap;                                       
         if(count==quote.length)
            clearInterval();               
         else
         count++;
},300);
var snowman = document.querySelector(".man");
var gifts = document.querySelector(".gifts");
snowman.onclick = function()
{
			music.play();
			snowman.style.textShadow = "0 0 20px yellow";
			gifts.style.textShadow = "0 0 20px yellow";
}
music.addEventListener('ended', function()
{
    this.currentTime = 0;
    this.play();
},false);
