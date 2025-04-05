'use strict';
const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
const shapes = ['triAngle', 'Circle', 'Square', 'Rectangle'];
const ele = document.getElementById("geoShape");
ele.style.color = colors[0];
// console.log(ele.style.backgroundColor, colors[0]);

let colorIndex = 0;
let shapeIndex = 0;

let changeColor = document.getElementById('changeColor');
let changeShape = document.getElementById('changeShape');

changeColor.addEventListener("click", () => colorChange());
changeShape.addEventListener("click", () => shapeChange());

function colorChange(){
    colorIndex++;
    colorIndex = (colorIndex >= colors.length) ? 0: colorIndex;
    ele.style.backgroundColor = colors[colorIndex];
    ele.style.color = colors[colorIndex];
    return;
}

function shapeChange(){
    shapeIndex++;
    shapeIndex = (shapeIndex >= shapes.length) ? 0: shapeIndex;
    // ele.innerHTML = '';
    //let newShape = document.createElement('div');
    shapes.forEach((shape) => ele.classList.remove(shape));
    ele.classList.add(shapes[shapeIndex]);
    ele.style.backgroundColor = (shapes[shapeIndex] === 'triAngle') ? '' : colors[colorIndex];
    // ele.style.color = (shapes[shapeIndex] === 'triAngle') ? '' : colors[colorIndex];
    // ele.appendChild(newShape);
    console.log(ele.innerHTML, shapes[shapeIndex]);
    console.log(ele);



        
}