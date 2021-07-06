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


//social icons tilt
let list = document.querySelectorAll('.sci li');
let links = document.querySelectorAll('.sci li a');
let bg = document.querySelector('.social-media');

links.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    });
    element.addEventListener('mouseenter', (event) => {
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    });
    element.addEventListener('mouseleave', (event) => {
        bg.style.backgroundColor = '#fff';
    })
})
