let text = document.getElementById('text')
let light = document.getElementById('light')
let bigmount = document.getElementById('bigmount')
let sky = document.getElementById('sky')
let mainmount = document.getElementById('mainmount')
let leftrock = document.getElementById('leftrock')
let fog1 = document.getElementById('fog1')
let rightrock = document.getElementById('rightrock')
let fog2 = document.getElementById('fog2')

window.addEventListener('scroll',()=> {
    let value =window.scrollY;
    
    mainmount.style.top = value * 1.5 + 'px';
    text.style.marginTop = value * 8 + 'px';
    light.style.left = value * .5 + 'px';
    sky.style.top = value * -2.5 + 'px';
    bigmount.style.left = value * 1.5 + 'px';
    fog2.style.left = value * 1.5 + 'px';
    fog1.style.left = value * -1.5 + 'px';
    leftrock.style.left = value * -.5 + 'px';
    rightrock.style.left = value * .5 + 'px';


})