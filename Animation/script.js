document.addEventListener('DOMContentLoaded', function () {
    const cube = document.getElementById('cube');
    const decorations = document.querySelector('.decorations');


    document.addEventListener('mousemove', (event) => {
        rotateCube(event);
    });


    window.addEventListener('resize', () => {
        decorations.style.height = window.innerHeight + 'px';
    });


    // Initial setup
    decorations.style.height = window.innerHeight + 'px';
});


function rotateCube(event) {
    const cube = document.getElementById('cube');
    const rect = cube.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;


    const rotateX = (y - rect.height / 2) / (rect.height / 2) * -10;
    const rotateY = (x - rect.width / 2) / (rect.width / 2) * 10;


    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}