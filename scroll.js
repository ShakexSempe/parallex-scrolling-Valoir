const box = document.getElementById('box');
const container = document.querySelector('cube-container');

scroll = () => {
    window.addEventListener('scroll', function () {
        var value = window.scrollY;
        // btn.style.left = value * 0.1 + 'px';
        btn.style.top = value * 0.14 + 'px';
});
}


const observer =  new IntersectionObserver(scroll, {
    threshold: [.5]
});


observer.observe(box);