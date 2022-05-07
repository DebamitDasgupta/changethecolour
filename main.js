//Colors array
let colors = ['grey', 'blue', 'yellow', 'black', 'red', 'brown', 'orange', 'green', 'white', 'pink'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})