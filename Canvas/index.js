function exercice6()
{
    
}

function exercice5()
{
    
}

function exercice4() {
    let circle = {
        color: "blue",
        radius: 100,
        x: 0,
        y: 100,
    }

    let canvasDom = document.getElementById("ex4");
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x += 10, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
    
    let interval=setInterval(function() {
        ctx.arc(circle.x += 10, circle.y, circle.radius, 0, 2 * Math.PI);

        if (circle.x === 150) {
            clearInterval(ctx);
        }
    }, 100)
}

function exercice3()
{
    let geo = document.getElementById('ex3');

    let ctx = geo.getContext('2d');

    ctx.font = 'bold 68px Montserrat';

    ctx.fillStyle = '#000';

    ctx.fillText('Geometry.io', 0, 150);
}

function exercice2()
{
    let circle = {
        color: "blue",
        radius: 100,
        x: 220,
        y:140,
    }
    
    let bluecircle=document.getElementById("ex2");
    let ctx=bluecircle.getContext('2d');
    ctx.fillStyle=circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill()
}

function exercice1()
{
    let redsquare=document.getElementById("ex1");
    let ctx=redsquare.getContext('2d');
    
    ctx.fillStyle="red";
    ctx.fillRect(120,50, 200, 200)
}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});