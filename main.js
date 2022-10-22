canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "EMPTY";
var last_position_of_x, last_position_of_y;
color ="black";
width_of_line = 1;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave" , my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup" , my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove" , my_mouseMove);
function my_mouseMove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offSetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offSetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinate = ");
        console.log("x = " + last_position_of_x + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current postion of x and y coordinate = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_Y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_Y;
}