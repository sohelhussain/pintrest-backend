const $ = e => document.querySelector(e);
const $$ = e => document.createElement(e);


$('.go-log').onclick = e => {
    $('.sing-form').style.display = 'none';
    $('.login-form').style.display = 'flex';
}
$('.go-sign').onclick = e => {
    $('.sing-form').style.display = 'flex';
    $('.login-form').style.display = 'none';
}

const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.navLink');
    
    lines.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        
    //Line Animation
    lines.classList.toggle('toggle');
    });
   
}
navSlide();

$('#arr-right').addEventListener('click',() => {
    console.log("span");
});