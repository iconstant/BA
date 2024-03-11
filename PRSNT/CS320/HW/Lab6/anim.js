function changeMe() {
    var c = document.getElementById("X0");
    var d = document.getElementById("X1");
    c.setAttribute("x1", "120");
    c.setAttribute("y1", "10");
    c.setAttribute("x2", "190");
    c.setAttribute("y2", "90");
    c.style.stroke = "green";
    d.setAttribute("x1", "190");
    d.setAttribute("y1", "10");
    d.setAttribute("x2", "120");
    d.setAttribute("y2", "90");
    d.style.stroke = "green";
}
function addMe() {
    var c = document.getElementById("O1");
    c.setAttribute("cx", "150");
    c.setAttribute("cy", "150");
    c.setAttribute("r", "40");
    c.setAttribute("stroke-width", "5");
}
