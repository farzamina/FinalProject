var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

new WOW().init();

const step = 1;

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

var isFunctionExecuted = false;

function outNum(num, elem, time) {
    let e = document.querySelector(elem);
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        e.innerHTML = n;
        if (n == 300 && elem == "#taken") {
            e.innerHTML = '300+'
        }
    }, t);
    
}
window.addEventListener("scroll", function () {
    var element = document.getElementById("numbers");
    if (checkVisible(element)) {
        if (!isFunctionExecuted) {
            outNum(30, "#clients", 3000);
            outNum(300, "#taken", 5000);
            outNum(8, "#years", 1000);
            isFunctionExecuted = true;
        }
    }
});
