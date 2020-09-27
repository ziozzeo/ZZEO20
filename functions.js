function hreffazio(link)
{
  $(document).ready(function(){
      window.location.href = link;
  });
}

function ov(verif){

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

}



function projhover(verif,nsc)
{
  if(verif==1){
  ov(1);
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
    ov(2);
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


// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————BG NOISE——————————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



const noise = () => {

    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.05) {
                buffer32[i] = 0x080000ff; /* Set smallest dots of noise red */

            } else if(Math.random() < 0.1) {
					buffer32[i] = 0x0800ff00; /* Set small dots of noise green */

				} else if(Math.random() < 0.15) {
					buffer32[i] = 0x08ff0000; /* Set big dots of noise blue */

				} else if(Math.random() < 0.2) {
					buffer32[i] = 0xccdddddd; /* Set biggest dots of noise gray */

				}
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 5) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.getElementById('noise-canvas');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

function scrollingbar() {
  var winScroll = document.getElementById("devoscrollare").scrollTop;
  var height = document.getElementById("devoscrollare").scrollHeight - document.getElementById("devoscrollare").clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————TRANSIZIONI———————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
