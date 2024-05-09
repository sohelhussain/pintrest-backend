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