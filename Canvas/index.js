function exercice6() {
    let circle = {
        color: "#FFD65B",
        radius: 100,
        x: 110,
        y: 110,
    }

    let canvasDom = document.getElementById("ex6");
    let ctx = canvasDom.getContext('2d');
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    let myImg = new Image();

    myImg.src = 'pacman.png';

    myImg.onload = function() {
        ctx.drawImage(myImg, 10, 10);
    };


    let interval = setInterval(function() {
        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();
    },1000)
}

function exercice5() {
    let circle = {
        color: "blue",
        radius: 10,
        x: 220,
        y: 140,
    }
    
    let canvasDom = document.getElementById("ex5");
    let ctx = canvasDom.getContext('2d');
    
    let interval = setInterval(function() {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
        circle.radius += 10;
        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (circle.radius >= canvasDom.height/2) {
            clearInterval(interval);
        }

    }, 100)
}

function exercice4() {
    let circle = {
        color: "blue",
        radius: 100,
        x: 100,
        y: 100,
    }

    let canvasDom = document.getElementById("ex4");
    let ctx = canvasDom.getContext('2d');

    let interval = setInterval(function() {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
        circle.x += 10;
        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (circle.x === 250) {
            clearInterval(interval);
        }

    }, 100)
}

function exercice3() {
    let geo = document.getElementById('ex3');

    let ctx = geo.getContext('2d');

    ctx.font = 'bold 68px Montserrat';

    ctx.fillStyle = '#000';

    ctx.fillText('Geometry.io', 0, 150);
}

function exercice2() {
    let circle = {
        color: "blue",
        radius: 100,
        x: 220,
        y: 140,
    }

    let bluecircle = document.getElementById("ex2");
    let ctx = bluecircle.getContext('2d');
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill()
}

function exercice1() {
    let redsquare = document.getElementById("ex1");
    let ctx = redsquare.getContext('2d');

    ctx.fillStyle = "red";
    ctx.fillRect(120, 50, 200, 200)
}

function initCanvasSize() {
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for (canvas of canvasList) {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function() {
    initCanvasSize();
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
});