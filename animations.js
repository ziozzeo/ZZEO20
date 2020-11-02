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


// GSAP ANIMATIONS

function prova()
{
  document.onreadystatechange = function () {
    
    var state = document.readyState
 if (state == 'complete') {
        setTimeout(function(){
            gsap.fromTo('#progress',{opacity:1},{opacity:0,duration:.4})
            gsap.fromTo('.imgcontain1,.imgcontain2,.imgcontain3,.imgcontain4', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1.5, delay:.8, ease: 'power2', stagger:.2})
            gsap.fromTo('#date, #type, #campiabout, .whoszzeo1, .whoszzeo2, #titlefoglia, #titlefoglia2, #stitlefoglia, #stitlefoglia2, #stitlefoglia3', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1, delay:.8})
            gsap.fromTo('#catg', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1.2, delay:.4})
            gsap.fromTo('.black',{clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)'},{clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',duration:1,ease: "power4.inOut"})
            gsap.fromTo('#imgfix', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1, delay:.8})
            gsap.fromTo('hr', {clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%))'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:2})
            gsap.fromTo('#projtitle, #desc',{y:15, opacity:0}, {y:0,opacity:1, duration:1.4, delay:1})
            gsap.fromTo('#acab',{opacity:0},{opacity:1,duration:.2})
            document.getElementById("black").style.pointerEvents = "none";
            gsap.fromTo('#menumob', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:.6, delay:.8})
            gsap.fromTo('#photo', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1, delay:.8})
        },500);
    }
  }
}

// GESTIONE MENU MOBILE

var chiudoapro=0;
function gestmenu()
{
    if (chiudoapro==0){
        gsap.fromTo('#openmenu',{opacity:0, pointerEvents: "none"},{opacity:1,pointerEvents: "auto", duration:.1})
        gsap.fromTo('#openmenu',{y:-2500},{y:0, duration:1})
        gsap.fromTo('#Rectangle-Copy',{rotation: 0, y:0},{rotation: -45,y:30, duration:.5})
        gsap.fromTo('#Rectangle',{rotation: 0, y:0,x:0},{rotation: 45,y:1,x:2,duration:.5})
        gsap.fromTo('.menuico',{y:0,x:0},{y:-60, x:40,duration:.5})
        gsap.fromTo('#menulogo',{stroke:"#000"},{stroke:"#fff",duration:.2})
        gsap.fromTo('#Digital',{fill:"#000"},{fill:"#fff",duration:.2})
        gsap.fromTo('#menumob-op', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:.8, delay:.8})
        gsap.fromTo('#bar',{backgroundColor:"#988AA5"},{backgroundColor:"#000",duration:.9})
    }
    else
    {
        gsap.fromTo('#openmenu',{opacity:1, pointerEvents: "auto"},{opacity:0, pointerEvents: "none", duration:.2,delay:1})
        gsap.fromTo('#openmenu',{y:0},{y:-2500, duration:1,delay:.8})
        gsap.fromTo('#Rectangle-Copy',{rotation: -45,y:30},{rotation: 0,y:0, duration:.5})
        gsap.fromTo('#Rectangle',{rotation: 45, y:1,x:0},{rotation: 0,y:0,x:0, duration:.5})
        gsap.fromTo('.menuico',{y:-60,x:40},{y:0,x:0,duration:.5})
        gsap.fromTo('#menulogo',{stroke:"#fff"},{stroke:"#000",duration:.2})
        gsap.fromTo('#Digital',{fill:"#fff"},{fill:"#000",duration:.2})
        gsap.fromTo('#menumob-op', {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%))'}, {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)', duration:.6})
        gsap.fromTo('#bar',{backgroundColor:"#000"},{backgroundColor:"#988AA5",duration:.9,delay:1})
    }
    if(chiudoapro==0){chiudoapro=1;}else{chiudoapro=0;}
}