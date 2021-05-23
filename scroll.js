const box = document.getElementById('box');
const scroll = () => {
    window.addEventListener('scroll', function () {
        var value = window.scrollY;
        // btn.style.left = value * 0.1 + 'px';
        btn.style.top = value * 0.16 + 'px';
        console.log(value)
});
}


const observer =  new IntersectionObserver(scroll, {
    threshold: [.5, .8]
});


observer.observe(box);