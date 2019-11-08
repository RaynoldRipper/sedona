//переменные переключатля меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.button-togle--opened');
//Перемнные попапа
var form = document.getElementById('form-review');
var popUpsucsess = document.getElementById('popup-sucsess')
var popUpfail = document.getElementById('popup-fail');
var popUpdark = document.querySelector('.form__popup__bgrwrap');
var btnClose = document.getElementById('button-close');
var email = document.getElementById('email');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('button-togle--opened');
    navToggle.classList.add('button-togle--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('button-togle--closed');
    navToggle.classList.add('button-togle--opened');
  }
});

btnClose.addEventListener('click', function(){
  if (popUpsucsess.classList.contains('form__popup-sucsess--active')){
    popUpsucsess.classList.remove('form__popup-sucsess--active')
  }
})

btnClose.addEventListener('click', function(){
  if (popUpfail.classList.contains('form__popup-fail--active')){
    popUpfail.classList.remove('form__popup-fail--active')
  }
})

form.addEventListener("submit", function (event) {
  // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
   // валидность поля электронной почты.
   if (!email.validity.valid) {
    popUpsucsess.classList.add('form__popup-fail--active');
    
  }
}, false);