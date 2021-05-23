let btn = document.getElementById("btn");



const box = document.getElementById('box');

const scroll = () => {
    window.addEventListener('scroll', function () {
        var value = window.scrollY;
        // btn.style.left = value * 0.1 + 'px';
        btn.style.top = value * 0.3 + 'px';
        console.log(value)
});
}

const observer =  new IntersectionObserver(scroll, {
    threshold: [.3, .4, .8]
});

observer.observe(box);