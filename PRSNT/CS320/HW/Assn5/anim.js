/*******************************************************************
*                         Image Map Actions                        * 
*                                                                  *
*   PROGRAMMER: Ines Constant                                      *
*   COURSE: CS320                                                  *
*   DATE: 3/24/2024                                                *
*   REQUIREMENT: Assignment 5                                      *
*                                                                  *
*   DESCRIPTION:                                                   *
*   The following program uses JavaScript functions that an HTML   *
*   webpage calls to execute various SVG animations.               *
*                                                                  *
*   COPYRIGHT: This code is copyright (C) 2024 Ines Constant       *
*   and Dean Zeller.                                               *
*                                                                  *
*   CREDITS: This code was written with the help of ChatGPT.       *
*                                                                  *
*******************************************************************/

/**********************************************************
*   METHOD: anim()                                        *
*   DESCRIPTION: change shapes in SVG to create a sample  *
*   of a Tic Tac Toe game.                                *
*   PARAMETERS: none                                      *
*   RETURN VALUE: new SVG drawing.                        *
**********************************************************/

function anim() { // https://www.w3schools.com/jsref/met_win_settimeout.asp
  l = document.getElementById("win");
  o0 = document.getElementById("0x0");
  o1 = document.getElementById("1x1");
  o2 = document.getElementById("1x2");
  o3 = document.getElementById("2x2");
  x0 = document.getElementById("0x1");
  x1 = document.getElementById("0x2");
  x2 = document.getElementById("1x0");

  o2.style.fill = "#000000"; // maybe
  setTimeout(function () { x1.style.fill = "#000000" }, 1000);
  setTimeout(function () { o0.style.fill = "#000000" }, 2000);
  setTimeout(function () { x0.style.fill = "#000000" }, 3000);
  setTimeout(function () { o3.style.fill = "#000000" }, 4000);
  setTimeout(function () { x2.style.fill = "#000000" }, 5000);
  setTimeout(function () { o1.style.fill = "#000000" }, 6000);
  setTimeout(function () { l.style.stroke = "#000000" }, 7000);
}

/**********************************************************
*   METHOD: changeMe()                                    *
*   DESCRIPTION: change shape in SVG move and modify color*
*   of drawing.                                            *
*   PARAMETERS: none                                      *
*   RETURN VALUE: new SVG drawing.                        *
**********************************************************/

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

/**********************************************************
*   METHOD: addMe()                                       *
*   DESCRIPTION: change shape in SVG move and modify color*
*   of drawing.                                           *
*   PARAMETERS: none                                      *
*   RETURN VALUE: new SVG drawing.                        *
**********************************************************/

function addMe() {
  var c = document.getElementById("O1");
  c.setAttribute("cx", "150");
  c.setAttribute("cy", "150");
  c.setAttribute("r", "40");
  c.setAttribute("stroke-width", "5");
}  