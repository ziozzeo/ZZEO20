function hreffazio(link)
{
  gsap.fromTo('.black',{x:-2000},{x:0,duration:1, ease: "power4.inOut" })
    gsap.fromTo('#acab',{opacity:1},{opacity:0,duration:.2})
    $(document).ready(function(){
      setTimeout(function(){
        window.location.href = link;
      }, 1000);
    }); 

}

function ov(verif,men){

if(verif==1)
  {
document.addEventListener('mousemove', function(ev){
    document.getElementById('acab').style.display="initial";
    document.getElementById('acab').style.transform = 'translateY('+(ev.clientY-50)+'px)';
    document.getElementById('acab').style.transform += 'translateX('+(ev.clientX-50)+'px)';
},false);}

else if(verif==2)
{
  document.addEventListener('mousemove', function(ev){
      document.getElementById('acab').style.display="none";
  },false);
}

if(men==1)
{
  document.getElementById("space").style.animationPlayState = "paused";
}
if(men==2)
{
  document.getElementById("space").style.animationPlayState = "running";
}
}

function projhover(verif,nsc)
{
  if(verif==1){
  ov(1,0);
  var css = '.sc'+nsc+' #projtitle, .sc'+nsc+' #date, .sc'+nsc+' #type {color:#CDCDCD;transition: 0.2s; cursor:pointer;}.imgzoom'+nsc+',.imgdoom'+nsc+'{cursor:pointer; -webkit-transition: all .6s;-moz-transition: all .6s;-o-transition: all .6s;transition: all .6s;-ms-transform: scale(1.2);-moz-transform: scale(1.2);-webkit-transform: scale(1.2);-o-transform: scale(1.2);transform: scale(1.2);} .imgcontain'+nsc+':hover .imgzoom'+nsc+':before, .imgdoom'+nsc+':before, .imgcontain'+nsc+':focus .imgzoom'+nsc+':before{display: block;}';
  var style = document.createElement('style');

  if (style.styleSheet) {
      style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName('head')[0].appendChild(style);

  }

  else if(verif==2)
  {

    ov(2,0);
    var css = '.sc'+nsc+' #projtitle, .sc'+nsc+' #date, .sc'+nsc+' #type {color:#000;transition: 0.2s;}.imgzoom'+nsc+',.imgdoom'+nsc+'{-webkit-transition: all .6s;-moz-transition: all .6s;-o-transition: all .6s;transition: all .6s;-ms-transform: scale(1);-moz-transform: scale(1);-webkit-transform: scale(1);-o-transform: scale(1);transform: scale(1);} .imgcontain'+nsc+':hover .imgzoom'+nsc+':before,.imgdoom'+nsc+':before, .imgcontain'+nsc+':focus{display: block;}';
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}

function scrollingbar() {
  var winScroll = document.getElementById("scrolle").scrollTop;
  var height = document.getElementById("scrolle").scrollHeight - document.getElementById("scrolle").clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
