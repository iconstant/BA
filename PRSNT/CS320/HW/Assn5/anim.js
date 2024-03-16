function anim() { // https://www.w3schools.com/jsref/met_win_settimeout.asp
    l =document.getElementById("win");
    o0 = document.getElementById("0x0");
    o1 = document.getElementById("1x1");
    o2 = document.getElementById("1x2");
    o3 = document.getElementById("2x2");
    x0 = document.getElementById("0x1");
    x1 = document.getElementById("0x2");
    x2 = document.getElementById("1x0");
    
    o2.style.fill="#000000"; // maybe
    setTimeout(function(){ x1.style.fill="#000000"}, 1000);
    setTimeout(function(){ o0.style.fill="#000000"}, 2000);
    setTimeout(function(){ x0.style.fill="#000000"}, 3000);
    setTimeout(function(){ o3.style.fill="#000000"}, 4000);
    setTimeout(function(){ x2.style.fill="#000000"}, 5000);
    setTimeout(function(){ o1.style.fill="#000000"}, 6000);
    setTimeout(function(){ l.style.stroke="#000000"}, 7000);
  }