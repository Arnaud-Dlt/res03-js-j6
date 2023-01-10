
function ex1(){
    let timeout = setTimeout(function() {
        alert("Hello World");
    }, 4200);
}


function ex2() {
    let hourTimeout = setInterval(function() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let secondes = date.getSeconds();
        let newdate = hours + "h " + minutes + "min et " + secondes + "s";

        console.log(newdate);
    }, 4200);
}


/////////    EX3    ///////////

function ex3() {
    let times = [1, 2, 3];

    let timeout = setTimeout(function() {
        console.log(times[0]);
        
        let timeout = setTimeout(function() {
            console.log(times[1]);

            let timeout = setTimeout(function() {
                console.log(times[2]);

            }, 3000);
        }, 2000);
    }, 1000);
}

function ex4() {
    let numbers = [32, 43, 56, 24, 78, 42];
    let count = 0;
    
    let interval = setInterval(function() {
        console.log(numbers[count]);
        count++;
        if (count >= numbers.length) {
            clearInterval(interval)
        }
    }, 1000);
}

window.addEventListener("DOMContentLoaded", function()
{
    //ex1();
    //ex2();
    //ex3();
    //ex4();
})


