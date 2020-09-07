function backtohome()
{
  $(document).ready(function(){
      window.location.href = "index.html";
  });
}

var options = {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1
};


function bgcambia(x,y)
{
  var stringa=(y+"bg.png");
  document.getElementById("body").style.backgroundImage="url("+stringa+")";
  x.style.color="#9482BB";
}

function ripristina(x)
{
  document.getElementById("body").style.backgroundImage="url('bg.png'),linear-gradient(0deg, rgba(215,197,255,1) 0%, rgba(0,0,0,1) 90%)";
  x.style.color="#FFFFFF";
}

barba.init({
    transitions: [{
        async leave() {
            await loaderIn();
        },
        enter() {
            loaderAway();
        }
    }]
});

function loaderIn() {
    // GSAP tween to stretch the loading screen across the whole screen
    return gsap.fromTo(loader,
        {
            rotation: 10,
            scaleX: 0,
            xPercent: -5
        },
        {
            duration: 0.8,
            xPercent: 0,
            scaleX: 1,
            rotation: 0,
            ease: 'power4.inOut',
            transformOrigin: 'left center'
        });
}

function loaderAway() {
    // GSAP tween to hide loading screen
    return gsap.to(loader, {
        duration: 0.8,
        scaleX: 0,
        xPercent: 5,
        rotation: -10,
        transformOrigin: 'right center',
        ease: 'power4.inOut'
    });
}
