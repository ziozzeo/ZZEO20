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
            gsap.fromTo('.imgcontain1,.imgcontain2,.imgcontain3,.imgcontain4', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1.5, delay:.8, ease: 'power2', stagger:.2})
            gsap.fromTo('#date, #type, #catg, #campiabout, .whoszzeo1, .whoszzeo2, #titlefoglia, #titlefoglia2, #stitlefoglia, #stitlefoglia2, #stitlefoglia3', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1, delay:.8})
            gsap.fromTo('.black',{opacity:1},{opacity:0,duration:1.6})
            gsap.fromTo('#imgfix', {clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:1, delay:.8})
            gsap.fromTo('hr', {clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%))'}, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)', duration:2})
            gsap.fromTo('#projtitle, #desc', {y:15, opacity:0}, {y:0,opacity:1, duration:1.4, delay:1})
            gsap.fromTo('#acab',{opacity:0},{opacity:1,duration:.2})
            document.getElementById("black").style.pointerEvents = "none";
        },500);
    }
  }
}


function aprimenu()
{
    window.alert("click");
    gsap.fromTo('.openmenu',{y:-2500},{y:0, duration:.5})
}