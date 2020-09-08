function backtohome()
{
  $(document).ready(function(){
      window.location.href = "index.html";
  });
}

function bgcambia(x,y)
{
  var stringa=(y+"bg.png");
  document.getElementById("body").style.backgroundImage="url("+stringa+")";
  x.style.color="#9482BB";
}

function ripristina(x)
{
  document.getElementById("body").style.backgroundImage="linear-gradient(0deg, rgba(215,197,255,1) 0%, rgba(0,0,0,1) 90%)";
  x.style.color="#FFFFFF";
}

// ————————————————— GRAINED SHIT ——————————————————————

var options = {
  "animate": true,
  "patternWidth": 490.88,
  "patternHeight": 215.32,
  "grainOpacity": 0.11,
  "grainDensity": 1,
  "grainWidth": 1,
  "grainHeight": 1
}
grained("#g-con",options);

// ——————————————————————————————————————————————————————
