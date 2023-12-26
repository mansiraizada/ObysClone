var tl = gsap.timeline();

tl.from('.text h1', {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})
tl.from('#text-num', {
    opacity: 0,
    onStart: function () {
        var timer = document.querySelector('#text-num h5');
        var time = 0;
        setInterval(function () {
            if (time < 100) {
                timer.innerHTML = time++
            } else {
                timer.innerHTML = time
            }
        }, 33)
    }
})
tl.to('.text h2', {
    animationName: "textChange",
    opacity: 1
})
tl.to('#loader', {
    opacity: 0,
    duration: 0.5,
    delay: 4
})
tl.from('#page1', {
    y: 1200,
    delay: 0.2,
    opacity: 0,
    ease: Power4,
    duration: 0.5
})
tl.to('#loader', {
    display: 'none'
})