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
  document.getElementById("body").style.backgroundImage="linear-gradient(0deg, rgba(172,157,199,1) 0%, rgba(0,0,0,1) 90%)";
  x.style.color="#FFFFFF";
}

// ————————————————— GRAINED SHIT ——————————————————————


// ——————————————————————————————————————————————————————
